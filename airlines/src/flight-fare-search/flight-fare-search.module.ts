import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { FlightFareSearchService } from './flight-fare-search.service';

@Module({
  providers: [FlightFareSearchService],
  imports: [HttpModule],
  exports: [FlightFareSearchService],
})
export class FlightFareSearchModule {}
