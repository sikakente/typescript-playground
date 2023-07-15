import { Injectable } from '@nestjs/common';
import { SearchFlights } from '../flight-fare-search/dto/search-flights';
import { FlightFareSearchService } from '../flight-fare-search/flight-fare-search.service';
import { SkyscannerService } from '../skyscanner/skyscanner.service';

@Injectable()
export class FlightsService {
  constructor(
    private skyscanner: SkyscannerService,
    private ffs: FlightFareSearchService,
  ) {}

  getCarriers() {
    return this.skyscanner.getCarriers();
  }

  getFlights(params: SearchFlights) {
    return this.ffs.getFlights(params);
  }
}
