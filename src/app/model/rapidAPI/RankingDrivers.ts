import { ResponseApi } from './ResponseApi';

export interface Results extends ResponseApi {
  response: SeasonRankingDrivers[];
}

export interface SeasonRankingDrivers {
  position: number;
  driver: Driver;
  team: Team;
  points: number;
  wins: number;
  behind: number;
  season: number;
}

interface Driver {
  id: number;
  name: string;
  abbr: string;
  number: number;
  image: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}
