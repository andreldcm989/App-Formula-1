import { MRData } from '../MRData';
import { DriverStanding } from './CurrentDriverStandings';

export interface Standings {
  MRData: DriversWinnerSeason;
}

interface DriversWinnerSeason extends MRData {
  StandingsTable: StandingsTable;
}

export interface StandingsTable {
  driverStandings?: string;
  season?: string;
  StandingsLists: StandingsLists[];
}

export interface StandingsLists {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}
