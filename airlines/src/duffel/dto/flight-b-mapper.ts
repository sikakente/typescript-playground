import { Injectable } from '@nestjs/common';
import { FlightMapper } from './flight-a-mapper';
import { FlightB } from './flight-b-response-dto';

@Injectable()
export class FlightBMapper implements FlightMapper {
  toFlight(flightB: FlightB) {
    return {
      arrival: flightB.arrival,
      departure: flightB.departure,
      destination: flightB.destination,
      flightNumber: flightB.flight_number,
      id: flightB.id,
      origin: flightB.origin,
      totalAmount: flightB.total_amount,
      totalCurrency: flightB.total_currency,
    };
  }
}
