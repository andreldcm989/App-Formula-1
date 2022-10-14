import { Driver } from './Driver';

export interface DriverTable {
  driverId?: string;
  circuitId?: string;
  constructorId?: string;
  driverStandings?: string;
  Drivers: Driver[];
}
