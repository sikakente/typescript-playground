export interface SearchFlights {
  from?: string;
  to?: string;
  date: string;
  adult?: number;
  type?: string;
  currency?: 'USD' | 'GBP';
}
