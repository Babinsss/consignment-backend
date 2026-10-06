import { Test, TestingModule } from '@nestjs/testing';
import { ConsignorService } from './consignor.service';

describe('ConsignorService', () => {
  let service: ConsignorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsignorService],
    }).compile();

    service = module.get<ConsignorService>(ConsignorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
