import { Test, TestingModule } from '@nestjs/testing';
import { PickSlipDateService } from './pick_slip_date.service';

describe('PickSlipDateService', () => {
  let service: PickSlipDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PickSlipDateService],
    }).compile();

    service = module.get<PickSlipDateService>(PickSlipDateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
