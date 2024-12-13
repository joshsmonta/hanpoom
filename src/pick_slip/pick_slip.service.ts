import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PickSlip } from './pick_slip.entity';
import { Repository } from 'typeorm';
import { CreateSlipDto } from './dto/create-slip.dto';

@Injectable()
export class PickSlipService {
    constructor(
        @InjectRepository(PickSlip) private pickSlipRepo: Repository<PickSlip>,
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
}
