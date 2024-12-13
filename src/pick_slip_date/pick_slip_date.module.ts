import { Module } from '@nestjs/common';
import { PickSlipDateController } from './pick_slip_date.controller';
import { PickSlipDateService } from './pick_slip_date.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickSlipDate } from './pick_slip_date.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickSlipDate])],
  controllers: [PickSlipDateController],
  providers: [PickSlipDateService]
})
export class PickSlipDateModule { }
