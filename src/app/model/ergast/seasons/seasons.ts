import { MRData } from '../MRData';

export interface Response {
  MRData: SeasonsList;
}

interface SeasonsList extends MRData {
  SeasonTable: SeasonTable;
}

interface SeasonTable {
  Seasons: Season[];
}

interface Season {
  season: string;
  url: string;
}

export interface customTable {
  season: number;
  schedule: number;
  drivers: string;
  constructors: string;
  driverWinnerId: string;
  driverWinner: string;
}
