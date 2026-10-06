import { Test, TestingModule } from '@nestjs/testing';
import { ConsignorController } from './consignor.controller';
import { ConsignorService } from './consignor.service';

describe('ConsignorController', () => {
  let controller: ConsignorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsignorController],
      providers: [ConsignorService],
    }).compile();

    controller = module.get<ConsignorController>(ConsignorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
