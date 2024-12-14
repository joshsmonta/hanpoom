export class PickingSlipPreOrderDto {
    id: number;
    created_at: string;
    order_fulfillment_order_id: number;
    count_of_pre_order_items: number;

    printed_username: string | null;

    inspected_username: string | null;

    packed_username: string | null;

    shipped_username: string | null;

    held_username: string | null;
    cancelled_username: string | null;

    refunded_username: string | null;

    confirmed_username: string | null;


    printed_at: string | null;


    inspected_at: string | null;


    packed_at: string | null;


    shipped_at: string | null;


    delivered_at: string | null;


    returned_at: string | null;


    cancelled_at: string | null;


    refunded_at: string | null;


    held_at: string | null;


    confirmed_at: string | null;


    held_reason: string | null;
}
