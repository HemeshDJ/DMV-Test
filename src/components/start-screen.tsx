import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppButton } from '@/components/app-button';
import { ChoiceButton } from '@/components/choice-button';
import { ExternalLink } from '@/components/external-link';
import { StatChip } from '@/components/stat-chip';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { HOSTED_PROJECTS_URL } from '@/constants/app-info';
import { CAR_MODE_IDS, LICENSES, MODES, MOTORCYCLE_MODE_IDS } from '@/constants/modes';
import { Spacing } from '@/constants/theme';
import { bankForLicense } from '@/lib/quiz';
import { useTheme } from '@/hooks/use-theme';
import { LicenseType, ModeId } from '@/types/quiz';

type StartScreenProps = {
  license: LicenseType;
  mode: ModeId;
  compact: boolean;
  onSelectLicense: (license: LicenseType) => void;
  onSelectMode: (mode: ModeId) => void;
  onStart: () => void;
};

export function StartScreen({
  license,
  mode,
  compact,
  onSelectLicense,
  onSelectMode,
  onStart,
}: StartScreenProps) {
  const theme = useTheme();
  const licenseConfig = LICENSES[license];
  const modeIds = license === 'motorcycle' ? MOTORCYCLE_MODE_IDS : CAR_MODE_IDS;
  const bankCount = bankForLicense(license).length;

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <View style={[styles.logo, { backgroundColor: theme.primary }]}>
        <View style={[styles.logoRing, { borderColor: theme.onPrimary }]} />
        <View style={[styles.logoDot, { backgroundColor: theme.onPrimary }]} />
      </View>
      <ThemedText type="title" style={styles.heading}>
        California DMV Practice Test
      </ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>
        {licenseConfig.subtitle}
      </ThemedText>

      <ThemedText type="smallBold" themeColor="textSecondary" style={styles.choiceLabel}>
        License
      </ThemedText>
      <View style={[styles.row, compact && styles.stack]}>
        <ChoiceButton
          title="Car (Class C)"
          detail="Driver’s license / permit"
          selected={license === 'car'}
          onPress={() => onSelectLicense('car')}
        />
        <ChoiceButton
          title="Motorcycle (M1/M2)"
          detail="Bike knowledge test"
          selected={license === 'motorcycle'}
          onPress={() => onSelectLicense('motorcycle')}
        />
      </View>

      <ThemedText type="smallBold" themeColor="textSecondary" style={styles.choiceLabel}>
        Test length
      </ThemedText>
      <View style={[styles.row, compact && styles.stack]}>
        {modeIds.map((id) => (
          <ChoiceButton
            key={id}
            title={MODES[id].shortTitle}
            detail={MODES[id].detail}
            selected={mode === id}
            onPress={() => onSelectMode(id)}
          />
        ))}
      </View>

      <View style={[styles.infoRow, { backgroundColor: theme.background }]}>
        <StatChip label="Question bank" value={bankCount} tone="primary" />
        <StatChip label="Passing score" value={licenseConfig.passRate} tone="primary" />
        <StatChip label="Time limit" value="None" />
      </View>

      <AppButton label="Start practice test" onPress={onStart} style={styles.startButton} />
      <ThemedText type="small" themeColor="textSecondary" style={styles.hint}>
        Questions are shuffled each time. You’ll see the explanation after every answer.
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary" style={styles.disclaimer}>
        Study aid only — not affiliated with the California DMV. Confirm current rules in the{' '}
        <ExternalLink href={licenseConfig.handbookHref}>
          <ThemedText type="linkPrimary" style={{ color: theme.primary }}>
            {licenseConfig.handbookLabel}
          </ThemedText>
        </ExternalLink>
        .{' '}
        <ExternalLink href={HOSTED_PROJECTS_URL}>
          <ThemedText type="linkPrimary" style={{ color: theme.primary }}>
            Hosted projects
          </ThemedText>
        </ExternalLink>
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.two,
    position: 'relative',
  },
  logoRing: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
  },
  logoDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: Spacing.two,
  },
  choiceLabel: {
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginTop: Spacing.two,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: Spacing.two,
  },
  stack: {
    flexDirection: 'column',
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 8,
    padding: Spacing.two,
    marginBottom: Spacing.two,
  },
  startButton: {
    marginTop: Spacing.two,
  },
  hint: {
    textAlign: 'center',
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
  },
});
