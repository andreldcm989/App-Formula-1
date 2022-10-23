import { MRData } from '../MRData';

export interface Standings {
  MRData: DriversWinnerSeason;
}

interface DriversWinnerSeason extends MRData {
  StandingsTable: StandingsTable;
}

export interface StandingsTable {
  driverStandings?: string;
  season?: string;
}

export interface StandingsLists {
  season: string;
  round: string;
}
