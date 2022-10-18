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
  Constructors: Constructors[];
}

interface Constructors {
  Contructors: Constructor[];
}

interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
