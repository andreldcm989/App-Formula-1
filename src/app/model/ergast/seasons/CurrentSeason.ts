import { Circuit } from '../circuits/Circuits';
import { MRData } from '../MRData';

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

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: DateTime;
  SecondPractice: DateTime;
  ThirdPractice: DateTime;
  Qualifying: DateTime;
}

interface DateTime {
  date: string;
  time: string;
}
