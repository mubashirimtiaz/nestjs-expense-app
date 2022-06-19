import { REPORT_TYPE } from './enum';
import { Report } from './interface';

export type Data = {
  reports: Report[];
};

export const data: Data = {
  reports: [
    {
      id: '1',
      source: 'Youtube',
      amount: 10000,
      created_at: new Date(),
      updated_at: new Date(),
      type: REPORT_TYPE.EXPENSE,
    },
    {
      id: '2',
      source: 'Food',
      amount: 30000,
      created_at: new Date(),
      updated_at: new Date(),
      type: REPORT_TYPE.INCOME,
    },
  ],
};
