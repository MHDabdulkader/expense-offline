/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#60646C',

    // brand / actions
    primary: '#1FA463',        // main green — buttons, active tab, balance card
    primaryLight: '#E4F5EC',   // selected chip bg (e.g. "Month" tab, category selected)

    // finance semantics
    income: '#1FA463',
    incomeLight: '#E4F5EC',
    expense: '#E5484D',
    expenseLight: '#FBE4E4',

    // category accent set (donut/bar chart + category icons)
    categoryFood: '#EF7A85',
    categoryTransport: '#4C8DFF',
    categoryShopping: '#9B7EDE',
    categoryBills: '#F5A623',
    categoryEntertainment: '#F2C94C',
    categoryOthers: '#9AA0A6',

    border: '#E5E6EA',
    danger: '#E5484D',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',

    primary: '#2ECC81',
    primaryLight: '#1B3A2A',

    income: '#2ECC81',
    incomeLight: '#1B3A2A',
    expense: '#F16064',
    expenseLight: '#3A2223',

    categoryFood: '#F08C96',
    categoryTransport: '#6FA2FF',
    categoryShopping: '#AE93E8',
    categoryBills: '#F7B84D',
    categoryEntertainment: '#F5D66B',
    categoryOthers: '#8E949B',

    border: '#2E3135',
    danger: '#F16064',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
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

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
