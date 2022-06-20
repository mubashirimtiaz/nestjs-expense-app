import { Injectable } from '@nestjs/common';
import { REPORT_TYPE } from 'src/enum';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  getSummary(): {
    totalIncome: number;
    totalExpense: number;
    netIncome: number;
  } {
    const totalExpense = this.reportService
      .getAllReports(REPORT_TYPE.EXPENSE)
      .reduce((acc, { amount }) => (acc += amount), 0);
    const totalIncome = this.reportService
      .getAllReports(REPORT_TYPE.INCOME)
      .reduce((acc, { amount }) => (acc += amount), 0);

    return {
      totalIncome,
      totalExpense,
      netIncome: totalIncome - totalExpense,
    };
  }
}
