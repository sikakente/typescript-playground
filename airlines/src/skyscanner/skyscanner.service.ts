import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { SKYSCANNER_BASE_URL, SKYSCANNER_RAPID_API_HOST } from './constants';

@Injectable()
export class SkyscannerService {
  constructor(private http: HttpService) {}

  async getCarriers() {
    return lastValueFrom(
      this.http
        .get(`${SKYSCANNER_BASE_URL}/flights/carriers`, {
          headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': SKYSCANNER_RAPID_API_HOST,
          },
        })
        .pipe(map((res) => res.data?.carriers))
        .pipe(
          catchError(() => {
            throw new ForbiddenException(`Skyscanner API is not available`);
          }),
        ),
    );
  }
}