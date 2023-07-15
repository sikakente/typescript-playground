import { Module } from '@nestjs/common';
import { FlightFareSearchModule } from 'src/flight-fare-search/flight-fare-search.module';
import { SkyscannerModule } from 'src/skyscanner/skyscanner.module';
import { FlightsController } from './flights.controller';
import { FlightsService } from './flights.service';

@Module({
  providers: [FlightsService],
  controllers: [FlightsController],
  imports: [SkyscannerModule, FlightFareSearchModule],
})
export class FlightsModule {}
