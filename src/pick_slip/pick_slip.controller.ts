import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get(':id')
    async getSlip(@Param('id') id: number) {
        return this.pickSlipService.findOne(id)
    }
}
