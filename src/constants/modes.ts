import { LicenseConfig, LicenseType, ModeConfig, ModeId } from '@/types/quiz';

export const LICENSES: Record<LicenseType, LicenseConfig> = {
  car: {
    title: 'Car (Class C)',
    subtitle:
      'Study for the Class C knowledge test with questions based on the California Driver Handbook.',
    handbookHref: 'https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/',
    handbookLabel: 'official handbook',
    passRate: '~83%',
    defaultMode: 'adult',
  },
  motorcycle: {
    title: 'Motorcycle (M1/M2)',
    subtitle:
      'Study for the M1/M2 motorcycle knowledge test with questions based on the California Motorcycle Handbook.',
    handbookHref: 'https://www.dmv.ca.gov/portal/handbook/motorcycle-handbook/',
    handbookLabel: 'motorcycle handbook',
    passRate: '80%',
    defaultMode: 'moto',
  },
};

export const MODES: Record<ModeId, ModeConfig> = {
  adult: {
    id: 'adult',
    title: 'Adult knowledge test',
    shortTitle: 'Adult test',
    detail: '36 questions · 30 to pass',
    count: 36,
    passCount: 30,
  },
  teen: {
    id: 'teen',
    title: 'Permit test (under 18)',
    shortTitle: 'Under 18',
    detail: '46 questions · 38 to pass',
    count: 46,
    passCount: 38,
  },
  quick: {
    id: 'quick',
    title: 'Quick practice',
    shortTitle: 'Quick practice',
    detail: '20 questions · 16 to pass',
    count: 20,
    passCount: 16,
  },
  moto: {
    id: 'moto',
    title: 'Motorcycle knowledge test',
    shortTitle: 'Knowledge test',
    detail: '30 questions · 24 to pass',
    count: 30,
    passCount: 24,
  },
  motoQuick: {
    id: 'motoQuick',
    title: 'Quick motorcycle practice',
    shortTitle: 'Quick practice',
    detail: '15 questions · 12 to pass',
    count: 15,
    passCount: 12,
  },
};

export const CAR_MODE_IDS: ModeId[] = ['adult', 'teen', 'quick'];
export const MOTORCYCLE_MODE_IDS: ModeId[] = ['moto', 'motoQuick'];
