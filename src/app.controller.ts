import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { REPORT_TYPE } from './enum';
import { AppService } from './app.service';
import {
  CreateReportDTO,
  ReportResponse,
  UpdateReportDTO,
} from './dtos/report.dto';
@Controller('/report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
  ): ReportResponse[] {
    return this.appService.getAllReports(type);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponse {
    return this.appService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Body() { amount, source }: CreateReportDTO,
  ): ReportResponse {
    return this.appService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDTO,
  ): ReportResponse {
    return this.appService.updateReportById(type, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.appService.deleteReportById(type, id);
  }
}
