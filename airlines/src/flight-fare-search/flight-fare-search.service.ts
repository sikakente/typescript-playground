import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { FFS_BASE_URL, FFS_RAPID_API_HOST } from './constants';
import { SearchFlightsDTO } from './dto/search-flights';
import { FlightResults } from './interfaces/flights-response';

@Injectable()
export class FlightFareSearchService {
  constructor(private http: HttpService) {}

  async getFlights(params: SearchFlightsDTO): Promise<FlightResults> {
    return lastValueFrom(
      this.http
        .get(`${FFS_BASE_URL}/flight/`, {
          headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': FFS_RAPID_API_HOST,
          },
          params: { ...params },
        })
        .pipe(
          map((res) => res.data?.results),
          // map((results) => {
          //   return results.map((result) => result.flight_name);
          // }),
          // distinct(),
        )
        .pipe(
          catchError(() => {
            throw new ForbiddenException(
              'Flights Fare Search API is unavailable',
            );
          }),
        ),
    );
  }

  async getFlightNames(params: SearchFlightsDTO): Promise<string[]> {
    const flights = await this.getFlights(params);

    return flights.map((flight) => flight.flight_name);
  }
}
