import { Controller, Get, Query } from '@nestjs/common';
import { SearchFlights } from '@root/flight-fare-search/dto/search-flights';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private flightsService: FlightsService) {}

  @Get('carriers')
  async carriers() {
    const carriers = await this.flightsService.getCarriers();

    return {
      data: carriers,
    };
  }

  @Get()
  async getFlights(@Query() searchFlights: SearchFlights) {
    const flights = await this.flightsService.getFlights(searchFlights);
    return {
      data: flights,
    };
  }
}
