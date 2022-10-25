import { Circuit } from '../circuits/Circuits';

export interface RaceTable {
  season: string;
  round?: string;
}
export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice?: DateTime;
  SecondPractice?: DateTime;
  ThirdPractice?: DateTime;
  Qualifying?: DateTime;
}

interface DateTime {
  date: string;
  time: string;
}
