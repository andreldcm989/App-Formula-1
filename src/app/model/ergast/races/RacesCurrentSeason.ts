import { MRData } from '../MRData';
import { Race, RaceTable } from './Races';

export interface APIData {
  MRData: CurrentSeason;
}

export interface CurrentSeason extends MRData {
  RaceTable: CurrentRaceTable;
}

export interface CurrentRaceTable extends RaceTable {
  season: string;
  round?: string;
  Races: Race[];
}
