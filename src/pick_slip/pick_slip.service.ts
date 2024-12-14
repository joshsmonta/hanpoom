import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PickSlip } from './pick_slip.entity';
import { Repository, DataSource } from 'typeorm';
import { CreateSlipDto } from './dto/create-slip.dto';
import { PickingSlipPreOrderDto } from './dto/pre-order-response.dto';
import { PickSlipItem } from 'src/pick_slip_item/pick_slip_item.entity';
import { PickSlipDate } from 'src/pick_slip_date/pick_slip_date.entity';

@Injectable()
export class PickSlipService {
    constructor(
        @InjectRepository(PickSlip) private pickSlipRepo: Repository<PickSlip>,
        private readonly dataSource: DataSource
    ) { }

    findAll(): Promise<PickSlip[]> {
        return this.pickSlipRepo.find();
    }

    create(pickSlipDto: CreateSlipDto): Promise<PickSlip> {
        const slip = this.pickSlipRepo.create(pickSlipDto);
        return this.pickSlipRepo.save(slip);
    }

    findOne(id: number): Promise<PickSlip> {
        const slip = this.pickSlipRepo.findOneBy({ id });
        if (!slip) {
            throw new NotFoundException("Slip not found")
        }
        return slip;
    }

    async getPreOrderPickingSlips(shippingDate: string, status: string, limit: number, offset: number): Promise<any[]> {
        const query = this.dataSource
            .getRepository(PickSlip)
            .createQueryBuilder('ps')
            .leftJoin(PickSlipItem, 'psi', 'ps.id = psi.picking_slip_id')
            .leftJoin(PickSlipDate, 'psd', 'ps.id = psd.picking_slip_id')
            .select([
                'ps.id AS id',
                'ps.created_at AS created_at',
                'ps.order_fulfillment_order_id AS order_fulfillment_order_id',
                'COUNT(CASE WHEN psi.is_pre_order = TRUE THEN 1 END) AS count_of_pre_order_items',
                "CASE WHEN psd.printed_at IS NULL AND psd.inspected_at IS NULL AND psd.shipped_at IS NULL AND psd.held_at IS NULL THEN 'not printed' WHEN psd.printed_at IS NOT NULL AND psd.inspected_at IS NULL AND psd.shipped_at IS NULL AND psd.held_at IS NULL THEN 'printed' WHEN psd.held_at IS NOT NULL THEN 'held' END AS picking_slip_status",
                "EXISTS (SELECT 1 FROM hanpoom_picking_slip_items psi WHERE psi.picking_slip_id = ps.id AND psi.is_pre_order = TRUE) AS has_pre_order_item",
                'psd.printed_username AS printed_username',
                'psd.inspected_username AS inspected_username',
                'psd.packed_username AS packed_username',
                'psd.shipped_username AS shipped_username',
                'psd.held_username AS held_username',
                'psd.cancelled_username AS cancelled_username',
                'psd.refunded_username AS refunded_username',
                'psd.confirmed_username AS confirmed_username',
                'psd.printed_at AS printed_at',
                'psd.inspected_at AS inspected_at',
                'psd.packed_at AS packed_at',
                'psd.shipped_at AS shipped_at',
                'psd.delivered_at AS delivered_at',
                'psd.returned_at AS returned_at',
                'psd.cancelled_at AS cancelled_at',
                'psd.refunded_at AS refunded_at',
                'psd.held_at AS held_at',
                'psd.confirmed_at AS confirmed_at',
                'psd.held_reason AS held_reason',
            ])
            .where('psi.is_pre_order IS TRUE')
            .andWhere('psi.pre_order_shipping_at = :shippingDate', { shippingDate })
            .andWhere("(CASE WHEN psd.printed_at IS NULL AND psd.inspected_at IS NULL AND psd.shipped_at IS NULL AND psd.held_at IS NULL THEN 'not printed' WHEN psd.printed_at IS NOT NULL AND psd.inspected_at IS NULL AND psd.shipped_at IS NULL AND psd.held_at IS NULL THEN 'printed' WHEN psd.held_at IS NOT NULL THEN 'held' END = :status)", { status })
            .groupBy('ps.id')
            .addGroupBy('ps.created_at')
            .addGroupBy('ps.order_fulfillment_order_id')
            .addGroupBy('psd.printed_username')
            .addGroupBy('psd.inspected_username')
            .addGroupBy('psd.packed_username')
            .addGroupBy('psd.shipped_username')
            .addGroupBy('psd.held_username')
            .addGroupBy('psd.cancelled_username')
            .addGroupBy('psd.refunded_username')
            .addGroupBy('psd.confirmed_username')
            .addGroupBy('psd.printed_at')
            .addGroupBy('psd.inspected_at')
            .addGroupBy('psd.packed_at')
            .addGroupBy('psd.shipped_at')
            .addGroupBy('psd.delivered_at')
            .addGroupBy('psd.returned_at')
            .addGroupBy('psd.cancelled_at')
            .addGroupBy('psd.refunded_at')
            .addGroupBy('psd.held_at')
            .addGroupBy('psd.confirmed_at')
            .addGroupBy('psd.held_reason')
            .orderBy('ps.created_at', 'ASC')
            .limit(limit).offset(offset);

        const results = await query.getRawMany();
        return results;
    }
}
