import { REPORT_TYPE } from './enum';
import { data } from './data';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Report, Reportable } from './interface';

@Injectable()
export class AppService {
  getAllReports(type: REPORT_TYPE) {
    return data.reports.filter((elem) => elem.type === type);
  }

  getReportById(type: REPORT_TYPE, id: string) {
    return data.reports
      .filter((elem) => elem.type === type)
      .find((elem) => elem.id === id);
  }

  createReport(type: REPORT_TYPE, { amount, source }: Reportable) {
    const newReport: Report = {
      id: uuid(),
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };

    data.reports = [...data.reports, newReport];
    return newReport;
  }

  updateReportById(type: REPORT_TYPE, id: string, body: Reportable) {
    const findIndexOfElem = data.reports
      .filter((elem) => elem.type === type)
      .findIndex((elem) => elem.id === id);

    if (findIndexOfElem === -1) return 'No such record found!';
    data.reports[findIndexOfElem] = {
      ...data.reports[findIndexOfElem],
      ...body,
      updated_at: new Date(),
    };
  }

  deleteReportById(type: REPORT_TYPE, id: string) {
    data.reports = data.reports
      .filter((elem) => elem.type === type)
      .filter((elem) => elem.id !== id);
    return;
  }
}
