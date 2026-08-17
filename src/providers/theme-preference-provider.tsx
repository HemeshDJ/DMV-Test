import React, { createContext, PropsWithChildren, useContext } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { ThemePreference } from '@/types/quiz';

type ThemePreferenceContextValue = {
  themePreference: ThemePreference | null;
  setThemePreference: (preference: ThemePreference) => void;
  ready: boolean;
};

const ThemePreferenceContext = createContext<ThemePreferenceContextValue | null>(null);

export function ThemePreferenceProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const themePreference: ThemePreference = colorScheme === 'dark' ? 'dark' : 'light';
  const navigationTheme = themePreference === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemePreferenceContext.Provider
      value={{
        themePreference,
        setThemePreference: () => undefined,
        ready: true,
      }}>
      <ThemeProvider value={navigationTheme}>{children}</ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export function useThemePreference() {
  const context = useContext(ThemePreferenceContext);
  if (!context) {
    throw new Error('useThemePreference must be used inside ThemePreferenceProvider');
  }

  return context;
}
