import { Module } from '@nestjs/common';
import { FlightFareSearchModule } from 'src/flight-fare-search/flight-fare-search.module';
import { AirportsController } from './airports.controller';
import { AirportsService } from './airports.service';

@Module({
  providers: [AirportsService],
  controllers: [AirportsController],
  imports: [FlightFareSearchModule],
})
export class AirportsModule {}
