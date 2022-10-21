export interface ResponseApi {
  get: string;
  parameters: Parameters;
  errors: Error[];
  results: number;
}

interface Parameters {
  season?: string;
  timezone?: string;
}

interface Error {
  error: string;
}
