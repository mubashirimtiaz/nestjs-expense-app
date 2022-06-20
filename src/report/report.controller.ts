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
import { REPORT_TYPE } from '../enum';
import {
  CreateReportDTO,
  ReportResponse,
  UpdateReportDTO,
} from '../dtos/report.dto';
import { ReportService } from './report.service';

@Controller('/report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
  ): ReportResponse[] {
    return this.reportService.getAllReports(type);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponse {
    return this.reportService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Body() { amount, source }: CreateReportDTO,
  ): ReportResponse {
    return this.reportService.createReport(type, { amount, source });
  }

  @Put(':id')
  updateReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDTO,
  ): ReportResponse {
    return this.reportService.updateReportById(type, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReportById(
    @Param('type', new ParseEnumPipe(REPORT_TYPE)) type: REPORT_TYPE,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.reportService.deleteReportById(type, id);
  }
}
