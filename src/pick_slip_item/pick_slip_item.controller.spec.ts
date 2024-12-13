import { Test, TestingModule } from '@nestjs/testing';
import { PickSlipItemController } from './pick_slip_item.controller';

describe('PickSlipItemController', () => {
  let controller: PickSlipItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PickSlipItemController],
    }).compile();

    controller = module.get<PickSlipItemController>(PickSlipItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
