import { Constructor } from '../constructors/Constructors';
import { Driver } from '../drivers/Driver';
import { MRData } from '../MRData';
import { Race, RaceTable } from '../races/Races';

export interface RaceResultsFinish {
  MRData: ResultApi;
}

interface ResultApi extends MRData {
  RaceTable: ResultRaceTable;
}

export interface ResultRaceTable extends RaceTable {
  Races: RaceFinish[];
}

interface RaceFinish extends Race {
  Results: ResultRace[];
}

export interface ResultRace {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
  AverageSpeed: AverageSpeed;
}

interface AverageSpeed {
  units: string;
  speed: string;
}

interface FastestLap {
  rank: string;
  lap: string;
  Time: Time;
}

interface Time {
  milis?: string;
  time: string;
}
