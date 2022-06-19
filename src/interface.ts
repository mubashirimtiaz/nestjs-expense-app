import { REPORT_TYPE } from './enum';

export interface Reportable {
  amount: number;
  source: string;
}

export interface OptionalReportable {
  amount?: number;
  source?: string;
}

export interface Report {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: REPORT_TYPE;
}
