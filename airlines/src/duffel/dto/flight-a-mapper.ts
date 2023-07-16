import { Injectable } from '@nestjs/common';
import { FlightA } from './flight-a-response-dto';
import { FlightB } from './flight-b-response-dto';
import { WodanoFlight } from './flight-dto';

export interface FlightMapper {
  toFlight(flight: FlightA | FlightB): WodanoFlight;
}

@Injectable()
export class FlightAMapper implements FlightMapper {
  toFlight(flightA: FlightA) {
    return {
      arrival: flightA.arrival,
      departure: flightA.departure,
      destination: flightA.dest,
      flightNumber: flightA.flight_number,
      id: flightA.id,
      origin: flightA.origin,
      totalAmount: flightA.price.amount,
      totalCurrency: flightA.currency,
    };
  }
}
