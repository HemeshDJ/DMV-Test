import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ChoiceButtonProps = {
  title: string;
  detail: string;
  selected: boolean;
  onPress: () => void;
};

export function ChoiceButton({ title, detail, selected, onPress }: ChoiceButtonProps) {
  const theme = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          borderColor: selected ? theme.primary : theme.border,
          backgroundColor: selected ? theme.backgroundSelected : theme.backgroundElement,
        },
        pressed && styles.pressed,
      ]}>
      <ThemedText type="smallBold">{title}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary" style={styles.detail}>
        {detail}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minWidth: 120,
    gap: Spacing.half,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
  },
  detail: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
  },
  pressed: {
    opacity: 0.9,
  },
});
