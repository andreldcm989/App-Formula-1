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

export interface table {
  season: number;
  standings: number;
  drivers: number;
  driverWinner: string;
  constructorWinner: string;
}
