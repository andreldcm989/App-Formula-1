interface SeasonTable {
  Seasons: Season[];
}

interface Season {
  season: string;
  url: string;
}

export interface customTable {
  season: number;
  schedule: number;
  drivers: string;
  constructors: string;
  driverWinnerId: string;
  driverWinner: string;
}
