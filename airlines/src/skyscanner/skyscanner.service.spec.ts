import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { SkyscannerService } from './skyscanner.service';

describe('SkyscannerService', () => {
  let service: SkyscannerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkyscannerService],
      imports: [HttpModule],
    }).compile();

    service = module.get<SkyscannerService>(SkyscannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
