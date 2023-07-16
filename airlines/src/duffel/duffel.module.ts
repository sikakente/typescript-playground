import { Module } from '@nestjs/common';
import { FlightAMapper } from './dto/flight-a-mapper';
import { FlightBMapper } from './dto/flight-b-mapper';
import { DuffelController } from './duffel.controller';
import { DuffelService } from './duffel.service';

@Module({
  providers: [DuffelService, FlightAMapper, FlightBMapper],
  controllers: [DuffelController],
})
export class DuffelModule {}
