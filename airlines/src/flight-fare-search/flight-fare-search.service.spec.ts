import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import {
  AxiosHeaders,
  AxiosRequestHeaders,
  AxiosResponse,
  RawAxiosRequestConfig,
} from 'axios';
import { format } from 'date-fns';
import { of } from 'rxjs';
import flights from './__test__/search/flights.json';
import { FlightFareSearchService } from './flight-fare-search.service';
import { FlightResponse } from './interfaces/flights-response';

describe('FlightFareSearchService', () => {
  let flightFareService: FlightFareSearchService;
  let httpService: HttpService;
  const searchDate = format(new Date(), 'yyyy-MM-dd');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [FlightFareSearchService],
    }).compile();

    flightFareService = module.get<FlightFareSearchService>(
      FlightFareSearchService,
    );
    httpService = module.get<HttpService>(HttpService);
  });

  describe('getFlights', () => {
    it('should return a list of flights', async () => {
      const headers = AxiosHeaders.from({
        'Content-Type': 'application/json',
      }) as AxiosRequestHeaders;

      const searchResult: AxiosResponse<FlightResponse, RawAxiosRequestConfig> =
        {
          data: flights,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: { headers: headers },
        };

      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(searchResult));

      flightFareService
        .getFlights({ date: searchDate })
        .then((res) => expect(res).toBe(flights.results));
    });
  });

  describe('getFlightNames', () => {
    it('should return a list of flights names', async () => {
      jest
        .spyOn(flightFareService, 'getFlights')
        .mockReturnValue(
          new Promise((resolve, reject) => resolve(flights.results)),
        );

      const flightNames = flights.results.map((flight) => flight.flight_name);

      flightFareService
        .getFlightNames({ date: searchDate })
        .then((res) => expect(res).toStrictEqual(flightNames));
    });
  });
});
