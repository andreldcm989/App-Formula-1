import { MRData } from '../MRData';
import { DriverTable } from './DriverTable';

export interface ResponseDrivers {
  MRData: Drivers;
}

interface Drivers extends MRData {
  DriverTable: DriverTable;
}
