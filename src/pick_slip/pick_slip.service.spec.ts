import { Test, TestingModule } from '@nestjs/testing';
import { PickSlipService } from './pick_slip.service';

describe('PickSlipService', () => {
  let service: PickSlipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PickSlipService],
    }).compile();

    service = module.get<PickSlipService>(PickSlipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
