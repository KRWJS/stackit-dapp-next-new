import { InputNumberProps } from '../interfaces/Input/InputInterface';
import {
  DAILY,
  DAYS,
  FORTNIGHTLY,
  FORTNIGHTS,
  MONTHLY,
  MONTHS,
  WEEKLY,
  WEEKS,
} from './transaction';

/* #CONSTANTS - INPUT
    1. Input invest frequency input
*/

// 1. Input invest frequency input
export const INVEST_FREQUENCY_INPUTS: InputNumberProps[] = [
  { id: DAILY, label: DAYS },
  { id: WEEKLY, label: WEEKS },
  { id: FORTNIGHTLY, label: FORTNIGHTS },
  { id: MONTHLY, label: MONTHS },
];
