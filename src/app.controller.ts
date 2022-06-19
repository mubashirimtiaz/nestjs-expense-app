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
import { AppService } from './app.service';
import { Reportable } from './interface';
@Controller('/report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: REPORT_TYPE) {
    return this.appService.getAllReports(type);
  }

  @Get(':id')
  getReportById(@Param('type') type: REPORT_TYPE, @Param('id') id: string) {
    return this.appService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Param('type') type: REPORT_TYPE,
    @Body() { amount, source }: Reportable,
  ) {
    return this.appService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReportById(
    @Param('type') type: REPORT_TYPE,
    @Param('id') id: string,
    @Body() body: Reportable,
  ) {
    return this.appService.updateReportById(type, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReportById(@Param('type') type: REPORT_TYPE, @Param('id') id: string) {
    return this.appService.deleteReportById(type, id);
  }
}
