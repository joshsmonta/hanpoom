import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickSlipModule } from './pick_slip/pick_slip.module';
import { PickSlip } from './pick_slip/pick_slip.entity';
import { PickSlipItemModule } from './pick_slip_item/pick_slip_item.module';
import { PickSlipItem } from './pick_slip_item/pick_slip_item.entity';
import { PickSlipDateService } from './pick_slip_date/pick_slip_date.service';
import { PickSlipDateModule } from './pick_slip_date/pick_slip_date.module';
import { PickSlipDate } from './pick_slip_date/pick_slip_date.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres-db',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'hanpoom',
      entities: [PickSlip, PickSlipItem, PickSlipDate],
      synchronize: true,
    }),
    PickSlipModule,
    PickSlipItemModule,
    PickSlipDateModule,
  ],
})
export class AppModule { }
