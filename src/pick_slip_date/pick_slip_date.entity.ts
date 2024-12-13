import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('hanpoom_picking_slip_dates') // Replace 'your_entity_name' with the actual table name
export class PickSlipDate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    picking_slip_id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    printed_username: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    inspected_username: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    packed_username: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    shipped_username: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    held_username: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    cancelled_username: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    refunded_username: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    confirmed_username: string;

    @Column({ type: 'timestamp', nullable: true })
    printed_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    inspected_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    packed_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    shipped_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    delivered_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    returned_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    cancelled_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    refunded_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    held_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    confirmed_at: Date;

    @Column({ type: 'text', nullable: true })
    held_reason: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
