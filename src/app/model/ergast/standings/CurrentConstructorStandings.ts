import { Constructor } from '../constructors/Constructors';
import { MRData } from '../MRData';
import { StandingsLists, StandingsTable } from './StandingsSeasons';

export interface CurrentConstructorStanding {
  MRData: ConstructorsStandings;
}

export interface ConstructorsStandings extends MRData {
  StandingsTable: ConstructorStandingsTable;
}

interface ConstructorStandingsTable extends StandingsTable {
  StandingsLists: ConstructorStandingList[];
}

interface ConstructorStandingList extends StandingsLists {
  ConstructorStandings: ConstructorStanding[];
}

export interface ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}
