import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('hanpoom_picking_slip_items') // Replace 'your_entity_name' with the actual table name
export class PickSlipItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    picking_slip_id: number;

    @Column({ type: 'int' })
    item_id: number;

    @Column({ type: 'int', nullable: true })
    stock_id: number;

    @Column({ type: 'int' })
    order_fulfillment_product_id: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'int', nullable: true })
    refunded_quantity: number;

    @Column({ type: 'int', nullable: true })
    location_id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    location_code: string;

    @Column({ type: 'boolean', default: false })
    is_pre_order: boolean;

    @Column({ type: 'boolean', default: false })
    is_sales_only: boolean;

    @Column({ type: 'timestamp', nullable: true })
    pre_order_shipping_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    pre_order_deadline_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
