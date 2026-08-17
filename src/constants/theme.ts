/**
 * Theme tokens for the DMV practice app. Colors follow the original site in light mode.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#202124',
    background: '#f0f4f8',
    backgroundElement: '#ffffff',
    backgroundSelected: '#e8f0fe',
    textSecondary: '#5f6368',
    primary: '#1a73e8',
    primaryDark: '#1557b0',
    success: '#34a853',
    error: '#ea4335',
    border: '#dadce0',
    correctBg: '#e6f4ea',
    incorrectBg: '#fce8e6',
    onPrimary: '#ffffff',
  },
  dark: {
    text: '#e8eaed',
    background: '#121418',
    backgroundElement: '#1e2128',
    backgroundSelected: '#1a365d',
    textSecondary: '#9aa0a6',
    primary: '#8ab4f8',
    primaryDark: '#8ab4f8',
    success: '#81c995',
    error: '#f28b82',
    border: '#3c4043',
    correctBg: '#15351f',
    incorrectBg: '#3d1c1a',
    onPrimary: '#0b1b33',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const MaxContentWidth = 800;
