import { REPORT_TYPE } from '../enum';
import { data } from '../data';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { OptionalReportable, Report, Reportable } from '../interface';
import { ReportResponse } from '../dtos/report.dto';

@Injectable()
export class ReportService {
  getAllReports(type: REPORT_TYPE): ReportResponse[] {
    return data.reports
      .filter((elem) => elem.type === type)
      .map((elem) => new ReportResponse(elem));
  }

  getReportById(type: REPORT_TYPE, id: string): ReportResponse {
    const report = data.reports
      .filter((elem) => elem.type === type)
      .find((elem) => elem.id === id);

    return new ReportResponse(report);
  }

  createReport(
    type: REPORT_TYPE,
    { amount, source }: Reportable,
  ): ReportResponse {
    const newReport: Report = {
      id: uuid(),
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };

    data.reports = [...data.reports, newReport];
    return new ReportResponse(newReport);
  }

  updateReportById(
    type: REPORT_TYPE,
    id: string,
    body: OptionalReportable,
  ): ReportResponse {
    const findIndexOfElem = data.reports
      .filter((elem) => elem.type === type)
      .findIndex((elem) => elem.id === id);

    if (findIndexOfElem === -1) return;
    data.reports[findIndexOfElem] = {
      ...data.reports[findIndexOfElem],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponse(data.reports[findIndexOfElem]);
  }

  deleteReportById(type: REPORT_TYPE, id: string) {
    data.reports = data.reports
      .filter((elem) => elem.type === type)
      .filter((elem) => elem.id !== id);
    return;
  }
}
