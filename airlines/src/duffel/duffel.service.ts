import { Injectable } from '@nestjs/common';
import { lastValueFrom, map, of } from 'rxjs';
import flightAResponse from './__test__/search/flight-a.json';
import flightBResponse from './__test__/search/flight-b.json';
import { FlightAMapper } from './dto/flight-a-mapper';
import { FlightBMapper } from './dto/flight-b-mapper';
import { WodanoFlight } from './dto/flight-dto';
import { SearchDuffelFlightDTO } from './dto/search-duffel-flight-dto';

@Injectable()
export class DuffelService {
  flightBMapper: FlightBMapper;
  flightAMapper: FlightAMapper;
  constructor() {
    this.flightAMapper = new FlightAMapper();
    this.flightBMapper = new FlightBMapper();
  }

  async getFlightsFromAllSources(searchBody: SearchDuffelFlightDTO) {
    const flightsFromA = await this.getFlightsFromA();
    const flightsFromB = await this.getFlightsFromB();
    return { data: [...flightsFromA, ...flightsFromB] };
  }

  getFlightsFromA(): Promise<WodanoFlight[]> {
    return lastValueFrom(
      of(flightAResponse).pipe(
        map((response) => response.flights),
        map((flights) => flights.map(this.flightAMapper.toFlight)),
      ),
    );
  }

  getFlightsFromB() {
    return lastValueFrom(
      of(flightBResponse).pipe(
        map((response) => response.data.offers),
        map((offers) => offers.map(this.flightBMapper.toFlight)),
      ),
    );
  }
}
