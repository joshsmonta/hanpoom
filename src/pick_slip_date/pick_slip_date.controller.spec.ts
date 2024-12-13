import { Test, TestingModule } from '@nestjs/testing';
import { PickSlipDateController } from './pick_slip_date.controller';

describe('PickSlipDateController', () => {
  let controller: PickSlipDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PickSlipDateController],
    }).compile();

    controller = module.get<PickSlipDateController>(PickSlipDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
