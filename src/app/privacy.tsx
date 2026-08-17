import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { AppButton } from '@/components/app-button';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {
  APP_NAME,
  DEVELOPER_NAME,
  PRIVACY_POLICY_EFFECTIVE_DATE,
  SUPPORT_EMAIL,
} from '@/constants/app-info';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const POLICY_SECTIONS = [
  {
    title: 'Information the app stores',
    body: [
      `${APP_NAME} does not save quizzes, scores, license choices, or settings between sessions. Each launch starts a fresh practice test.`,
      'Nothing is written to device storage by the current release.',
    ],
  },
  {
    title: 'Information the app does not collect',
    body: [
      `${APP_NAME} does not require an account and does not intentionally collect personal information such as your name, email address, location, contacts, photos, microphone input, or payment details.`,
      'The app does not include advertising, analytics, cloud sync, or social features in the current release.',
    ],
  },
  {
    title: 'How your data is used',
    body: [
      'Question answers exist only in memory while a practice test is open. Closing the app discards that session.',
      'Data is not sold or shared with third parties by the app in its current version.',
    ],
  },
  {
    title: 'Official source of truth',
    body: [
      'This app is a study aid only and is not affiliated with the California DMV. Confirm current rules in the official California Driver Handbook and Motorcycle Handbook.',
    ],
  },
  {
    title: 'Children',
    body: [
      `${APP_NAME} is a general-audience study aid and is not designed to knowingly collect personal information from children.`,
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'If the app later adds analytics, ads, accounts, cloud features, or any new data collection, this privacy policy should be updated before that release goes live.',
    ],
  },
  {
    title: 'Contact',
    body: [
      `For privacy questions or support requests, contact ${SUPPORT_EMAIL}.`,
      `Developer name for publication: ${DEVELOPER_NAME}.`,
    ],
  },
];

export default function PrivacyPolicyScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <AppButton label="Back" variant="text" onPress={() => router.back()} />
          <View style={styles.hero}>
            <ThemedText type="subtitle">Privacy Policy</ThemedText>
            <ThemedText themeColor="textSecondary">
              Effective date: {PRIVACY_POLICY_EFFECTIVE_DATE}
            </ThemedText>
            <ThemedText>
              This privacy policy explains how {APP_NAME} handles information for the current release.
            </ThemedText>
          </View>

          {POLICY_SECTIONS.map((section) => (
            <View key={section.title} style={styles.section}>
              <ThemedText type="smallBold">{section.title}</ThemedText>
              {section.body.map((paragraph) => (
                <ThemedText key={paragraph} themeColor="textSecondary">
                  {paragraph}
                </ThemedText>
              ))}
            </View>
          ))}
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
  hero: {
    gap: Spacing.two,
  },
  section: {
    gap: Spacing.two,
    padding: Spacing.three,
    borderRadius: 20,
    backgroundColor: 'rgba(127, 127, 127, 0.08)',
  },
});
