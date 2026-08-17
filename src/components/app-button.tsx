import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  style?: ViewStyle;
};

export function AppButton({ label, onPress, variant = 'primary', style }: AppButtonProps) {
  const theme = useTheme();
  const isPrimary = variant === 'primary';
  const isText = variant === 'text';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        isText && styles.textButton,
        !isText && {
          backgroundColor: isPrimary ? theme.primary : theme.background,
          borderWidth: isPrimary ? 0 : 1,
          borderColor: theme.border,
        },
        pressed && styles.pressed,
        style,
      ]}>
      <ThemedText
        type="smallBold"
        style={{
          color: isPrimary ? theme.onPrimary : isText ? theme.textSecondary : theme.text,
          textAlign: 'center',
        }}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: Spacing.four,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    paddingVertical: Spacing.one,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.85,
  },
});
