import { MRData } from '../MRData';

export interface Response {
  MRData: SeasonsList;
}

interface SeasonsList extends MRData {
  SeasonTable: SeasonTable;
}

interface SeasonTable {
  Seasons: Season[];
}

interface Season {
  season: string;
  url: string;
}
