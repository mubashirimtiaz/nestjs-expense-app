import { REPORT_TYPE } from './enum';
import { data } from './data';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getAllReports(type: REPORT_TYPE) {
    return data.reports.filter((elem) => elem.type === type);
  }
}
