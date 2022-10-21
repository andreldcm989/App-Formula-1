import { ResponseApi } from './ResponseApi';

export interface currentSeason extends ResponseApi {
  response: RaceWeekend[];
}

export interface RaceWeekend {
  id: number;
  competition: Competition;
  circuit: Circuit;
  season: number;
  type: string;
  laps: Laps;
  fastest_lap: FastestLap;
  distance: string | null;
  timezone: string;
  date: string;
  weather: string | null;
  status: string;
}

interface Competition {
  id: number;
  name: string;
  location: LocationRace;
}

interface LocationRace {
  country: string;
  city: string;
}

interface Circuit {
  id: string;
  name: string;
  image: string;
}

interface Laps {
  current: string | null;
  total: number | null;
}

interface FastestLap {
  driver: Driver;
  time: string | null;
}

interface Driver {
  id: number | null;
}
