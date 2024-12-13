import { IsNotEmpty } from 'class-validator';

export class CreateSlipDto {
    @IsNotEmpty()
    order_id: number;

    @IsNotEmpty()
    order_fulfillment_order_id: number;

    @IsNotEmpty()
    is_contained_single_product: boolean;
}