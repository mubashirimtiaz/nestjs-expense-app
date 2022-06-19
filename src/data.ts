import { REPORT_TYPE } from './enum';

export interface Report {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: REPORT_TYPE;
}

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
