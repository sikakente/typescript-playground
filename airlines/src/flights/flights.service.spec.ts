import { Test, TestingModule } from '@nestjs/testing';
import { FlightFareSearchModule } from '../flight-fare-search/flight-fare-search.module';
import { SkyscannerModule } from '../skyscanner/skyscanner.module';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';

describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightsService],
      controllers: [FlightsController],
      imports: [SkyscannerModule, FlightFareSearchModule],
    }).compile();

    service = module.get<FlightsService>(FlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
