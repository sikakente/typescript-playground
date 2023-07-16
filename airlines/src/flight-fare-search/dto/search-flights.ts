import { IsCurrency, IsDate } from 'class-validator';

export class SearchFlightsDTO {
  from?: string;
  to?: string;

  @IsDate()
  date: string;

  adult?: number;

  type?: string;

  @IsCurrency()
  currency?: 'USD' | 'GBP';
}
