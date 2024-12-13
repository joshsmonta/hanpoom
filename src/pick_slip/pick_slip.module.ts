import { Module } from '@nestjs/common';
import { PickSlipController } from './pick_slip.controller';
import { PickSlipService } from './pick_slip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickSlip } from './pick_slip.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PickSlip])],
    controllers: [PickSlipController],
    providers: [PickSlipService],
})
export class PickSlipModule { }
