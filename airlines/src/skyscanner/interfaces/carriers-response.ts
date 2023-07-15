type Carrier = {
  name: string;
  iata: string;
};

export type CarrierResponse = {
  status: string;
  carriers: {
    [key: string]: Carrier;
  };
};
