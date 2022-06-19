import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/report/:type')
export class AppController {
  @Get()
  getAllReports() {
    return [];
  }

  @Get(':id')
  getReportById() {
    return 'Hello single';
  }

  @Post()
  createReport() {
    return 'new record added';
  }

  @Put(':id')
  updateReportById() {
    return 'updated record';
  }

  @Delete(':id')
  deleteReportById() {
    return 'deleted record';
  }
}
