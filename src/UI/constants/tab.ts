import { TabDataProps } from '../interfaces/Tab/TabInterface';
import { DAILY, FORTNIGHTLY, MONTHLY, WEEKLY } from './transaction';

/* #CONSTANTS - TABS
    1. Tabs invest frequency
*/

// 1. Tabs invest frequency
export const INVEST_FREQUENCY_TABS: TabDataProps[] = [
  { title: DAILY, id: DAILY },
  { title: WEEKLY, id: WEEKLY },
  { title: FORTNIGHTLY, id: FORTNIGHTLY },
  { title: MONTHLY, id: MONTHLY },
];
