import { Test, TestingModule } from '@nestjs/testing';
import { DuffelController } from './duffel.controller';
import { DuffelService } from './duffel.service';

describe('DuffelController', () => {
  let controller: DuffelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuffelController],
      providers: [DuffelService],
    }).compile();

    controller = module.get<DuffelController>(DuffelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
