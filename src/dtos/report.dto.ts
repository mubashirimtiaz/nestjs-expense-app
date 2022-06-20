import {
  IsPositive,
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { REPORT_TYPE } from 'src/enum';

export class CreateReportDTO {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDTO {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  source: string;
}

export class ReportResponse {
  id: string;
  source: string;
  amount: number;
  @Expose({ name: 'createdAt' })
  transformer() {
    return this.created_at;
  }
  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;
  type: REPORT_TYPE;

  constructor(partial: Partial<ReportResponse>) {
    Object.assign(this, partial);
  }
}
