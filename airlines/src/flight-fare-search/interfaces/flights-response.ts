interface BaggageAllowance {
  allowance: number;
  text: string;
}

interface Cabin extends BaggageAllowance {
  qty: number;
  unit: 'KG' | string;
}

interface CheckIn extends BaggageAllowance {
  refNumber: number;
  qty: 'N' | string;
  unit: string | null;
  quantity: number;
}

export interface Baggage {
  cabin: Cabin;
  checkIn: CheckIn;
}

type Currency = 'USD' | 'GBP' | string;

type CabinType = 'Economy' | 'Business' | string;

type Country = {
  label: string;
  code: string;
};

type Duration = {
  text: string;
  value: number;
};

type Totals = {
  currency: Currency;
  baggage: Baggage | null;
  penalty: string | null;
  total: number;
  tax: number;
  base: number;
};

type Stops = '0' | '1';
type Stop = {
  airport: string;
  stopDuration: number;
};

type StopSummary =
  | {
      [Property in Stops]?: Stop;
    };

interface Airport {
  time: string;
  code: string;
  tz: string;
  timeZone: string;
  type: string;
  label: string;
  country: Country;
  city: string;
}

export interface Flight {
  id: string;
  careerCode: string;
  flight_code: string;
  flight_name: string;
  stops: 'Direct' | '1 Stop' | string;
  cabinType: CabinType;
  baggage: Baggage;
  currency: Currency;
  departureAirport: Airport;
  arrivalAirport: Airport;
  path: string[];
  duration: Duration;
  stopSummary: StopSummary;
  totals: Totals;
}

export type FlightResults = Flight[];

type Status = 200 | 201 | 400 | 401 | 403 | 500 | number;

type SearchData = {
  from: string;
  to: string;
  date: string;
  type: CabinType;
  adult: number;
  child: number;
  infant: number;
  currency: Currency;
};

export interface FlightResponse {
  status: Status;
  searchData: SearchData;
  results: FlightResults;
}
