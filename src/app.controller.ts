import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { REPORT_TYPE } from './enum';
import { data, Report } from './data';
import { v4 as uuid } from 'uuid';
@Controller('/report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: REPORT_TYPE) {
    return data.reports.filter((elem) => elem.type === type);
  }

  @Get(':id')
  getReportById(@Param('type') type: REPORT_TYPE, @Param('id') id: string) {
    return data.reports
      .filter((elem) => elem.type === type)
      .find((elem) => elem.id === id);
  }

  @Post()
  createReport(
    @Param('type') type: REPORT_TYPE,
    @Body() { amount, source }: { amount: number; source: string },
  ) {
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

  @Put(':id')
  updateReportById(
    @Param('type') type: REPORT_TYPE,
    @Param('id') id: string,
    @Body() body: { amount?: number; source?: string },
  ) {
    const findIndexOfElem = data.reports
      .filter((elem) => elem.type === type)
      .findIndex((elem) => elem.id === id);

    if (findIndexOfElem === -1) return 'No such record found!';
    data.reports[findIndexOfElem] = {
      ...data.reports[findIndexOfElem],
      ...body,
    };
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReportById(@Param('type') type: REPORT_TYPE, @Param('id') id: string) {
    data.reports = data.reports
      .filter((elem) => elem.type === type)
      .filter((elem) => elem.id !== id);
    return;
  }
}
