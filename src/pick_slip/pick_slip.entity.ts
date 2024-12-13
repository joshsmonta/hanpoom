import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity("hanpoom_picking_slips")
export class PickSlip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order_id: number;

    @Column()
    order_fulfillment_order_id: number;

    @Column({ default: false })
    is_contained_single_product: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;
}