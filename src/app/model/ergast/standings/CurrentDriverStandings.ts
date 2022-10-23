import { Constructor } from '../constructors/Constructors';
import { Driver } from '../drivers/Driver';
import { MRData } from '../MRData';
import { StandingsLists, StandingsTable } from './StandingsSeasons';

export interface CurrentDriversStanding {
  MRData: DriversStandings;
}

export interface DriversStandings extends MRData {
  StandingsTable: DriverStandingsTable;
}

interface DriverStandingsTable extends StandingsTable {
  StandingsLists: DriverStandingsLists[];
}

interface DriverStandingsLists extends StandingsLists {
  DriverStandings: DriverStanding[];
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}
