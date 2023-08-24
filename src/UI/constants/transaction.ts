import { InvestmentSummaryItemProps } from '../interfaces/UI/UiInterface';

/* #CONSTANTS - TRANSACTION
    1. Investment summary
    2. Investment frequency
*/

// 1. Investment summary
export const INVESTMENT_SUMMARY: InvestmentSummaryItemProps[] = [
  { label: 'Total invested daily for ETH', value: '3,000 USDT' },
  { label: 'Starts', value: 'Today' },
  { label: 'Finishes', value: '11/02/2023' },
  { label: 'Fees', value: '$5.321' },
  { label: 'Total Amount', value: '3,005.32 USDT' },
];

// 2. Investment frequency
export const DAILY: string = 'Daily';
export const WEEKLY: string = 'Weekly';
export const FORTNIGHTLY: string = 'Fortnightly';
export const MONTHLY: string = 'Monthly';
export const DAYS: string = 'Days';
export const WEEKS: string = 'Weeks';
export const FORTNIGHTS: string = 'Fortnights';
export const MONTHS: string = 'Months';
export const FREQUENCY_MS: { [key: string]: number } = {
  [DAILY]: 86400000,
  [WEEKLY]: 604800000,
  [FORTNIGHTLY]: 1209600000,
  [MONTHLY]: 2592000000,
};
