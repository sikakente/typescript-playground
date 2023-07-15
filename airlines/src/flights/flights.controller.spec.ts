import { Test, TestingModule } from '@nestjs/testing';
import { FlightFareSearchModule } from '../flight-fare-search/flight-fare-search.module';
import { SkyscannerModule } from '../skyscanner/skyscanner.module';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';

describe('FlightsController', () => {
  let controller: FlightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightsController],
      providers: [FlightsService],
      imports: [SkyscannerModule, FlightFareSearchModule],
    }).compile();

    controller = module.get<FlightsController>(FlightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
