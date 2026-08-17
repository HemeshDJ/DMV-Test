export type LicenseType = 'car' | 'motorcycle';
export type ScreenId = 'start' | 'quiz' | 'results' | 'review';
export type ModeId = 'adult' | 'teen' | 'quick' | 'moto' | 'motoQuick';
export type ThemePreference = 'light' | 'dark';

export type Question = {
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type PreparedQuestion = {
  question: string;
  category: string;
  explanation: string;
  options: string[];
  correct: number;
};

export type AnswerRecord = {
  selected: number;
  correct: number;
  isCorrect: boolean;
} | null;

export type QuizSession = {
  license: LicenseType;
  mode: ModeId;
  questions: PreparedQuestion[];
  index: number;
  answers: AnswerRecord[];
  locked: boolean;
};

export type LicenseConfig = {
  title: string;
  subtitle: string;
  handbookHref: string;
  handbookLabel: string;
  passRate: string;
  defaultMode: ModeId;
};

export type ModeConfig = {
  id: ModeId;
  title: string;
  shortTitle: string;
  detail: string;
  count: number;
  passCount: number;
};

export type QuizResult = {
  total: number;
  correct: number;
  incorrect: number;
  percent: number;
  passCount: number;
  passed: boolean;
  missed: number;
  title: string;
  message: string;
};
