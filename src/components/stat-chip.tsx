import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type StatChipProps = {
  label: string;
  value: number | string;
  tone?: 'default' | 'correct' | 'incorrect' | 'primary';
};

export function StatChip({ label, value, tone = 'default' }: StatChipProps) {
  const theme = useTheme();
  const valueColor =
    tone === 'correct'
      ? theme.success
      : tone === 'incorrect'
        ? theme.error
        : tone === 'primary'
          ? theme.primary
          : theme.text;

  return (
    <View style={styles.chip}>
      <ThemedText type="subtitle" style={[styles.value, { color: valueColor }]}>
        {value}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary" style={styles.label}>
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    minWidth: 72,
    gap: Spacing.one,
    padding: Spacing.two,
    borderRadius: 12,
    alignItems: 'center',
  },
  value: {
    fontSize: 22,
    lineHeight: 26,
  },
  label: {
    textAlign: 'center',
  },
});
