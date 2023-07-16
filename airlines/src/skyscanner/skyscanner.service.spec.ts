import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import {
  AxiosHeaders,
  AxiosRequestHeaders,
  AxiosResponse,
  RawAxiosRequestConfig,
} from 'axios';
import { of } from 'rxjs';
import carriers from './__test__/carriers/carriers.json';
import { CarrierDTO, CarrierResponse } from './dto/carriers-response';
import { SkyscannerService } from './skyscanner.service';

describe('SkyscannerService', () => {
  let service: SkyscannerService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkyscannerService],
      imports: [HttpModule],
    }).compile();

    service = module.get<SkyscannerService>(SkyscannerService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCarriers', () => {
    it('should get all carriers', () => {
      const headers = AxiosHeaders.from({
        'Content-Type': 'application/json',
      }) as AxiosRequestHeaders;

      const skyScannerResponse: AxiosResponse<
        CarrierResponse,
        RawAxiosRequestConfig
      > = {
        data: carriers,
        headers: {},
        config: { headers: headers },
        status: 200,
        statusText: 'OK',
      };

      const expected = Object.values<CarrierDTO>(carriers.carriers);

      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(skyScannerResponse));

      service.getCarriers().then((res) => {
        return expect(res).toStrictEqual(expected);
      });
    });
  });

  describe('getCarrierNames', () => {
    it('should get all carrierNames', () => {
      const response = Object.values<CarrierDTO>(carriers.carriers).map(
        (carrier) => carrier.name,
      );
      jest
        .spyOn(service, 'getCarriers')
        .mockReturnValue(
          new Promise((resolve, reject) =>
            resolve(Object.values(carriers.carriers)),
          ),
        );

      service.getCarrierNames().then((res) => {
        return expect(res).toStrictEqual(response);
      });
    });
  });
});
