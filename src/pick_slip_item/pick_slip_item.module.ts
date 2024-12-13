import { Module } from '@nestjs/common';
import { PickSlipItemController } from './pick_slip_item.controller';
import { PickSlipItemService } from './pick_slip_item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickSlipItem } from './pick_slip_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PickSlipItem])],
  controllers: [PickSlipItemController],
  providers: [PickSlipItemService]
})
export class PickSlipItemModule { }
