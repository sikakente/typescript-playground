import { Test, TestingModule } from '@nestjs/testing';
import { FlightAMapper } from './dto/flight-a-mapper';
import { FlightBMapper } from './dto/flight-b-mapper';
import { DuffelService } from './duffel.service';

describe('DuffelService', () => {
  let service: DuffelService;
  let flightAMapper: FlightAMapper;
  let flightBMapper: FlightBMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuffelService, FlightAMapper, FlightBMapper],
    }).compile();

    service = module.get<DuffelService>(DuffelService);
    flightAMapper = new FlightAMapper();
    flightBMapper = new FlightBMapper();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getFlightsFromAllSources', () => {
    it('should get all Flights from Flight A as WodanoFlights', () => {
      const searchBody = {
        origin: 'LHR',
        destination: 'JFK',
        departure_date: '2019-10-21',
      };

      jest.spyOn(service, 'getFlightsFromA').mockReturnValue(
        new Promise((resolve, reject) =>
          resolve([
            {
              arrival: '2019-10-22T02:00:00Z',
              departure: '2019-10-21T20:00:00Z',
              destination: 'JFK',
              flightNumber: 'B1',
              id: 'b-4d386e9f-0ec1-4839-aac2-59e6983f594a',
              origin: 'LHR',
              totalAmount: 304.27,
              totalCurrency: 'GBP',
            },
          ]),
        ),
      );

      jest.spyOn(service, 'getFlightsFromB').mockReturnValue(
        new Promise((resolve, reject) =>
          resolve([
            {
              arrival: '2019-10-22T01:00:00Z',
              departure: '2019-10-21T19:00:00Z',
              destination: 'JFK',
              flightNumber: 'B2',
              id: 'b-9f0b6369-f82e-4a5c-aeba-b3b977871a35',
              origin: 'LHR',
              totalAmount: 272.06,
              totalCurrency: 'GBP',
            },
          ]),
        ),
      );

      service.getFlightsFromAllSources(searchBody).then((res) =>
        expect(res).toStrictEqual({
          data: [
            {
              arrival: '2019-10-22T02:00:00Z',
              departure: '2019-10-21T20:00:00Z',
              destination: 'JFK',
              flightNumber: 'B1',
              id: 'b-4d386e9f-0ec1-4839-aac2-59e6983f594a',
              origin: 'LHR',
              totalAmount: 304.27,
              totalCurrency: 'GBP',
            },
            {
              arrival: '2019-10-22T01:00:00Z',
              departure: '2019-10-21T19:00:00Z',
              destination: 'JFK',
              flightNumber: 'B2',
              id: 'b-9f0b6369-f82e-4a5c-aeba-b3b977871a35',
              origin: 'LHR',
              totalAmount: 272.06,
              totalCurrency: 'GBP',
            },
          ],
        }),
      );
    });
  });
});
