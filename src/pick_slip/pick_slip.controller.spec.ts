import { Test, TestingModule } from '@nestjs/testing';
import { PickSlipController } from './pick_slip.controller';

describe('PickSlipController', () => {
  let controller: PickSlipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PickSlipController],
    }).compile();

    controller = module.get<PickSlipController>(PickSlipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
