import { Constructor } from '../constructors/Constructors';
import { Driver } from '../drivers/Driver';
import { MRData } from '../MRData';

export interface Standings {
  MRData: DriversWinnerSeason;
}

interface DriversWinnerSeason extends MRData {
  StandingsTable: StandingsTable;
}

interface StandingsTable {
  driverStandings: string;
  StandingsLists: StandingsLists[];
}

interface StandingsLists {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}
