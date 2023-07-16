export type CarrierDTO = {
  name: string;
  iata: string;
};

export type CarrierResponseDTO = {
  [key: string]: CarrierDTO;
};

export type CarrierResponse = {
  status: string;
  carriers: {
    [key: string]: CarrierDTO;
  };
};
