import { MRData } from '../MRData';
import { Race } from '../races/Races';

export interface APIData {
  MRData: CurrentSeason;
}

export interface CurrentSeason extends MRData {
  RaceTable: RaceTable;
}

interface RaceTable {
  season: string;
  Races: Race[];
}
