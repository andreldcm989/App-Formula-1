import { MRData } from '../MRData';
import { StandingsTable } from './StandingsSeasons';

export interface CurrentConstructorStanding {
  MRData: ConstructorsStandings;
}

export interface ConstructorsStandings extends MRData {
  StandingsTable: StandingsTable;
}
