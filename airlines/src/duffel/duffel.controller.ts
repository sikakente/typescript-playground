import { Body, Controller, Post } from '@nestjs/common';
import { SearchDuffelFlightDTO } from './dto/search-duffel-flight-dto';
import { DuffelService } from './duffel.service';

@Controller('duffel')
export class DuffelController {
  constructor(private duffelService: DuffelService) {}

  @Post()
  getFlights(@Body() searchBody: SearchDuffelFlightDTO) {
    return this.duffelService.getFlightsFromAllSources(searchBody);
  }
}
