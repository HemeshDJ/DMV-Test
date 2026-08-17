import { MODES } from '@/constants/modes';
import { CAR_QUESTIONS } from '@/constants/questions-car';
import { MOTORCYCLE_QUESTIONS } from '@/constants/questions-motorcycle';
import {
  AnswerRecord,
  LicenseType,
  ModeId,
  PreparedQuestion,
  Question,
  QuizResult,
  QuizSession,
} from '@/types/quiz';

export const LETTERS = ['A', 'B', 'C', 'D'] as const;

export function shuffle<T>(list: T[]): T[] {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function bankForLicense(license: LicenseType): Question[] {
  return license === 'motorcycle' ? MOTORCYCLE_QUESTIONS : CAR_QUESTIONS;
}

export function prepareQuestion(item: Question): PreparedQuestion {
  const order = item.options.map((_, index) => index);
  const shuffled = shuffle(order);
  return {
    question: item.question,
    category: item.category,
    explanation: item.explanation,
    options: shuffled.map((index) => item.options[index]),
    correct: shuffled.indexOf(item.correct),
  };
}

export function createSession(license: LicenseType, mode: ModeId): QuizSession {
  const config = MODES[mode];
  const bank = bankForLicense(license);
  const count = Math.min(config.count, bank.length);
  return {
    license,
    mode,
    questions: shuffle(bank).slice(0, count).map(prepareQuestion),
    index: 0,
    answers: new Array(count).fill(null),
    locked: false,
  };
}

export function correctSoFar(answers: AnswerRecord[]): number {
  return answers.filter((answer) => answer && answer.isCorrect).length;
}

export function selectAnswer(session: QuizSession, index: number): QuizSession {
  if (session.locked) {
    return session;
  }

  const current = session.questions[session.index];
  const isCorrect = index === current.correct;
  const answers = session.answers.slice();
  answers[session.index] = {
    selected: index,
    correct: current.correct,
    isCorrect,
  };

  return {
    ...session,
    answers,
    locked: true,
  };
}

export function goToNextQuestion(session: QuizSession): QuizSession {
  if (session.index >= session.questions.length - 1) {
    return session;
  }

  return {
    ...session,
    index: session.index + 1,
    locked: false,
  };
}

export function isLastQuestion(session: QuizSession): boolean {
  return session.index === session.questions.length - 1;
}

export function scoreSession(session: QuizSession): QuizResult {
  const total = session.questions.length;
  const correct = correctSoFar(session.answers);
  const incorrect = total - correct;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
  const passCount = MODES[session.mode].passCount;
  const passed = correct >= Math.min(passCount, total);
  const missed = total - passCount;

  return {
    total,
    correct,
    incorrect,
    percent,
    passCount,
    passed,
    missed,
    title: passed ? 'You passed' : 'Not quite yet',
    message: passed
      ? `You answered ${correct} of ${total} correctly. That meets the ${passCount}-correct bar for this practice test.`
      : `You needed ${passCount} correct (no more than ${missed} wrong). Review the misses, then try another set.`,
  };
}

export function optionIndexFromKey(key: string): number | null {
  const map: Record<string, number> = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    '1': 0,
    '2': 1,
    '3': 2,
    '4': 3,
  };

  return map[key] ?? null;
}