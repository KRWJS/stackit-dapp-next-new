import { NavigationLinkProps } from '../interfaces/General/GeneralInterface';

/* #CONSTANTS - NAVIGATION
    1. Main navigation
    2. Social navigation
*/

// 1. Main navigation
export const MAIN_NAVIGATION: NavigationLinkProps[] = [
  { label: 'invest', route: '/' },
  //{ label: 'dashboard', route: '/dashboard' },
  { label: 'Docs', route: 'https://docs.stackit.finance/' },
];

// 2. Social navigation
export const SOCIAL_NAVIGATION: NavigationLinkProps[] = [
  { label: 'Twitter', route: 'https://twitter.com/Stackit_Finance' },
  {
    label: 'GitHub',
    route:
      'https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Stackit-v1.0.pdf',
  },
  { label: 'Discord', route: 'https://discord.gg/SatCHSMP' },
  { label: 'Telegram', route: 'https://t.me/stackit_finance' },
];
