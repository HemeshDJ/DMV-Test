import * as Haptics from 'expo-haptics';
import React, { useEffect, useRef } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';

import { AppButton } from '@/components/app-button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { LETTERS, correctSoFar, isLastQuestion, optionIndexFromKey } from '@/lib/quiz';
import { QuizSession } from '@/types/quiz';

type QuizScreenProps = {
  session: QuizSession;
  onSelectOption: (index: number) => void;
  onNext: () => void;
  onFinish: () => void;
  onEnd: () => void;
};

export function QuizScreen({ session, onSelectOption, onNext, onFinish, onEnd }: QuizScreenProps) {
  const theme = useTheme();
  const current = session.questions[session.index];
  const total = session.questions.length;
  const answer = session.answers[session.index];
  const progress = ((session.locked ? session.index + 1 : session.index) / total) * 100;
  const last = isLastQuestion(session);

  function handleSelect(index: number) {
    if (session.locked) {
      return;
    }

    if (Platform.OS !== 'web') {
      const isCorrect = index === current.correct;
      Haptics.notificationAsync(
        isCorrect ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error
      ).catch(() => undefined);
    }

    onSelectOption(index);
  }

  const keyHandlerRef = useRef({
    locked: session.locked,
    optionCount: current.options.length,
    last,
    handleSelect,
    onNext,
    onFinish,
  });
  keyHandlerRef.current = {
    locked: session.locked,
    optionCount: current.options.length,
    last,
    handleSelect,
    onNext,
    onFinish,
  };

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      const handler = keyHandlerRef.current;
      if (!handler.locked) {
        const index = optionIndexFromKey(event.key);
        if (index !== null && index < handler.optionCount) {
          event.preventDefault();
          handler.handleSelect(index);
        }
        return;
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        if (handler.last) {
          handler.onFinish();
        } else {
          handler.onNext();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={styles.header}>
        <View style={styles.progressSection}>
          <View style={[styles.progressTrack, { backgroundColor: theme.background }]}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress}%`, backgroundColor: theme.primary },
              ]}
            />
          </View>
          <View style={styles.progressText}>
            <ThemedText type="small" themeColor="textSecondary">
              Question {session.index + 1} of {total}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Correct: {correctSoFar(session.answers)}
            </ThemedText>
          </View>
        </View>
        <AppButton label="End test" variant="text" onPress={onEnd} />
      </View>

      <View style={[styles.category, { backgroundColor: theme.backgroundSelected }]}>
        <ThemedText type="smallBold" style={{ color: theme.primaryDark, textTransform: 'uppercase' }}>
          {current.category}
        </ThemedText>
      </View>

      <ThemedText type="subtitle" style={styles.question}>
        {current.question}
      </ThemedText>

      <View style={styles.options}>
        {current.options.map((text, index) => {
          const isCorrectOption = Boolean(answer) && index === current.correct;
          const isIncorrectPick = Boolean(answer) && index === answer?.selected && !answer.isCorrect;
          const borderColor = isCorrectOption
            ? theme.success
            : isIncorrectPick
              ? theme.error
              : theme.border;
          const backgroundColor = isCorrectOption
            ? theme.correctBg
            : isIncorrectPick
              ? theme.incorrectBg
              : theme.backgroundElement;
          const letterBg = isCorrectOption
            ? theme.success
            : isIncorrectPick
              ? theme.error
              : theme.background;
          const letterColor = isCorrectOption || isIncorrectPick ? theme.onPrimary : theme.text;

          return (
            <Pressable
              key={`${session.index}-${index}`}
              disabled={session.locked}
              onPress={() => handleSelect(index)}
              style={({ pressed }) => [
                styles.option,
                { borderColor, backgroundColor },
                pressed && !session.locked && styles.pressed,
              ]}>
              <View style={[styles.letter, { backgroundColor: letterBg }]}>
                <ThemedText type="smallBold" style={{ color: letterColor }}>
                  {LETTERS[index]}
                </ThemedText>
              </View>
              <ThemedText style={styles.optionText}>{text}</ThemedText>
            </Pressable>
          );
        })}
      </View>

      {answer ? (
        <View
          style={[
            styles.feedback,
            {
              backgroundColor: answer.isCorrect ? theme.correctBg : theme.incorrectBg,
              borderColor: answer.isCorrect ? theme.success : theme.error,
            },
          ]}>
          <ThemedText type="smallBold" style={{ color: answer.isCorrect ? theme.success : theme.error }}>
            {answer.isCorrect ? 'Correct' : 'Incorrect'}
          </ThemedText>
          <ThemedText>{current.explanation}</ThemedText>
        </View>
      ) : null}

      {session.locked ? (
        <View style={styles.footer}>
          {last ? (
            <AppButton label="See results" onPress={onFinish} />
          ) : (
            <AppButton label="Next question" onPress={onNext} />
          )}
        </View>
      ) : null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  progressSection: {
    flex: 1,
    gap: Spacing.two,
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  question: {
    fontSize: 20,
    lineHeight: 28,
  },
  options: {
    gap: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  letter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    flex: 1,
  },
  pressed: {
    opacity: 0.9,
  },
  feedback: {
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: 8,
    borderWidth: 1,
  },
  footer: {
    alignItems: 'flex-end',
  },
});
