import { Driver } from './Driver';

export interface DriverTable {
  season?: string;
  driverId?: string;
  circuitId?: string;
  constructorId?: string;
  driverStandings?: string;
  Drivers: Driver[];
}
