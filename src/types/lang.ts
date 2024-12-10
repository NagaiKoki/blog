export type Lang = 'ja' | 'en';

export const lang = {
  ja: 'ja',
  en: 'en'
} as const satisfies Record<Lang, string>;
