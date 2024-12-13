import { Test, TestingModule } from '@nestjs/testing';
import { PickSlipItemService } from './pick_slip_item.service';

describe('PickSlipItemService', () => {
  let service: PickSlipItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PickSlipItemService],
    }).compile();

    service = module.get<PickSlipItemService>(PickSlipItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
