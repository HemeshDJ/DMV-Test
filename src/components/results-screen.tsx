import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppButton } from '@/components/app-button';
import { StatChip } from '@/components/stat-chip';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { QuizResult } from '@/types/quiz';

type ResultsScreenProps = {
  result: QuizResult;
  compact: boolean;
  onReview: () => void;
  onRetry: () => void;
  onHome: () => void;
};

export function ResultsScreen({ result, compact, onReview, onRetry, onHome }: ResultsScreenProps) {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View
        style={[
          styles.icon,
          { backgroundColor: result.passed ? theme.correctBg : theme.incorrectBg },
        ]}>
        <ThemedText
          type="title"
          style={{ color: result.passed ? theme.success : theme.error, fontSize: 36, lineHeight: 40 }}>
          {result.passed ? '✓' : '✕'}
        </ThemedText>
      </View>
      <ThemedText type="title" style={styles.heading}>
        {result.title}
      </ThemedText>
      <View style={[styles.scoreCircle, { borderColor: result.passed ? theme.success : theme.error }]}>
        <ThemedText type="title">{result.percent}%</ThemedText>
      </View>
      <ThemedText themeColor="textSecondary" style={styles.message}>
        {result.message}
      </ThemedText>
      <View style={styles.stats}>
        <StatChip label="Correct" value={result.correct} tone="correct" />
        <StatChip label="Incorrect" value={result.incorrect} tone="incorrect" />
        <StatChip label="Total" value={result.total} />
      </View>
      <View style={[styles.actions, compact && styles.stack]}>
        <AppButton label="Review answers" variant="secondary" onPress={onReview} style={styles.action} />
        <AppButton label="Take another test" onPress={onRetry} style={styles.action} />
        <AppButton label="Home" variant="secondary" onPress={onHome} style={styles.action} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: Spacing.five,
    alignItems: 'center',
    gap: Spacing.three,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 34,
  },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Spacing.two,
  },
  message: {
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    width: '100%',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
  },
  stack: {
    flexDirection: 'column',
  },
  action: {
    minWidth: 140,
  },
});
