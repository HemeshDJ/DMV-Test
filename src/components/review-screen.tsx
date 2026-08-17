import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppButton } from '@/components/app-button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { QuizSession } from '@/types/quiz';

type ReviewScreenProps = {
  session: QuizSession;
  compact: boolean;
  onBack: () => void;
  onRetry: () => void;
};

export function ReviewScreen({ session, compact, onBack, onRetry }: ReviewScreenProps) {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedText type="title" style={styles.heading}>
        Answer review
      </ThemedText>
      <View style={styles.list}>
        {session.questions.map((item, index) => {
          const answer = session.answers[index];
          const isCorrect = Boolean(answer?.isCorrect);
          return (
            <View
              key={`${index}-${item.question}`}
              style={[
                styles.item,
                {
                  borderColor: theme.border,
                  borderLeftColor: isCorrect ? theme.success : theme.error,
                },
              ]}>
              <ThemedText type="smallBold">
                {index + 1}. {item.question}
              </ThemedText>
              {answer && !answer.isCorrect ? (
                <View style={[styles.answer, { backgroundColor: theme.incorrectBg }]}>
                  <ThemedText type="small" style={{ color: theme.error }}>
                    <ThemedText type="smallBold" style={{ color: theme.error }}>
                      Your answer:{' '}
                    </ThemedText>
                    {item.options[answer.selected]}
                  </ThemedText>
                </View>
              ) : null}
              <View style={[styles.answer, { backgroundColor: theme.correctBg }]}>
                <ThemedText type="small" style={{ color: theme.success }}>
                  <ThemedText type="smallBold" style={{ color: theme.success }}>
                    Correct:{' '}
                  </ThemedText>
                  {item.options[item.correct]}
                </ThemedText>
              </View>
              <ThemedText type="small">{item.explanation}</ThemedText>
            </View>
          );
        })}
      </View>
      <View style={[styles.actions, compact && styles.stack]}>
        <AppButton label="Back to results" variant="secondary" onPress={onBack} style={styles.action} />
        <AppButton label="Take another test" onPress={onRetry} style={styles.action} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: Spacing.four,
    gap: Spacing.four,
  },
  heading: {
    fontSize: 24,
    lineHeight: 30,
  },
  list: {
    gap: Spacing.three,
  },
  item: {
    gap: Spacing.two,
    padding: Spacing.three,
    borderWidth: 1,
    borderLeftWidth: 4,
    borderRadius: 8,
  },
  answer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  stack: {
    flexDirection: 'column',
  },
  action: {
    minWidth: 160,
  },
});
