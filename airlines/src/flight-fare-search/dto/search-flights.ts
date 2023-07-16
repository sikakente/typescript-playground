import { IsCurrency, IsDate } from 'class-validator';

export class SearchFlights {
  from?: string;
  to?: string;

  @IsDate()
  date: string;

  adult?: number;

  type?: string;

  @IsCurrency()
  currency?: 'USD' | 'GBP';
}
