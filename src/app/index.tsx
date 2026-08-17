import { Link } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { QuizScreen } from '@/components/quiz-screen';
import { ResultsScreen } from '@/components/results-screen';
import { ReviewScreen } from '@/components/review-screen';
import { StartScreen } from '@/components/start-screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { LICENSES } from '@/constants/modes';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { createSession, goToNextQuestion, scoreSession, selectAnswer } from '@/lib/quiz';
import { LicenseType, ModeId, QuizSession, ScreenId } from '@/types/quiz';

const COMPACT_LAYOUT_BREAKPOINT = 600;

export default function HomeScreen() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const compact = width <= COMPACT_LAYOUT_BREAKPOINT;
  const [screen, setScreen] = useState<ScreenId>('start');
  const [license, setLicense] = useState<LicenseType>('car');
  const [mode, setMode] = useState<ModeId>('adult');
  const [session, setSession] = useState<QuizSession | null>(null);

  function handleSelectLicense(next: LicenseType) {
    setLicense(next);
    setMode(LICENSES[next].defaultMode);
  }

  function startTest(nextLicense = license, nextMode = mode) {
    setSession(createSession(nextLicense, nextMode));
    setScreen('quiz');
  }

  function handleSelectOption(index: number) {
    setSession((current) => (current ? selectAnswer(current, index) : current));
  }

  function handleNext() {
    setSession((current) => (current ? goToNextQuestion(current) : current));
  }

  function handleFinish() {
    setScreen('results');
  }

  function handleHome() {
    setSession(null);
    setScreen('start');
  }

  const result = session ? scoreSession(session) : null;

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          {screen === 'start' ? (
            <StartScreen
              license={license}
              mode={mode}
              compact={compact}
              onSelectLicense={handleSelectLicense}
              onSelectMode={setMode}
              onStart={() => startTest()}
            />
          ) : null}

          {screen === 'quiz' && session ? (
            <QuizScreen
              session={session}
              onSelectOption={handleSelectOption}
              onNext={handleNext}
              onFinish={handleFinish}
              onEnd={handleHome}
            />
          ) : null}

          {screen === 'results' && result ? (
            <ResultsScreen
              result={result}
              compact={compact}
              onReview={() => setScreen('review')}
              onRetry={() => startTest()}
              onHome={handleHome}
            />
          ) : null}

          {screen === 'review' && session ? (
            <ReviewScreen
              session={session}
              compact={compact}
              onBack={() => setScreen('results')}
              onRetry={() => startTest()}
            />
          ) : null}

          <View style={styles.footer}>
            <Link href="/privacy">
              <ThemedText type="linkPrimary" style={{ color: theme.primary }}>
                Privacy policy
              </ThemedText>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.four,
    gap: Spacing.four,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: Spacing.four,
  },
});
