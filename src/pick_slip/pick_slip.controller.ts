import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PickSlipService } from './pick_slip.service';
import { CreateSlipDto } from './dto/create-slip.dto';

@Controller('pick-slips')
export class PickSlipController {
    constructor(private pickSlipService: PickSlipService) { }

    @Get()
    async getAllSlips() {
        return this.pickSlipService.findAll();
    }

    @Post()
    async createSlip(@Body() body: CreateSlipDto) {
        return this.pickSlipService.create(body);
    }

    // @Get(':id')
    // async getSlip(@Param('id') id: number) {
    //     return this.pickSlipService.findOne(id)
    // }

    @Get('pre-orders')
    async getPreOrderPickingSlips(
        @Query('shippingDate') shippingDate: string,
        @Query('status') status: string,
        @Query('limit') limit: number,
        @Query('offset') offset: number
    ) {
        return this.pickSlipService.getPreOrderPickingSlips(shippingDate, status, limit, offset);
    }
}
