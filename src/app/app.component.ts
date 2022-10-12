import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, tap } from 'rxjs';
import { AppService } from './app.service';

export interface result {
  MRData: MRData;
}

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  DriverTable: DriverTable;
}

export interface DriverTable {
  driverId: string;
  Drivers: Driver[];
}

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formula1';

  res!: MRData;

  constructor(private service: AppService, private route: ActivatedRoute) {
    this.getDriver();
  }

  getDriver() {
    return this.service.getDriver().subscribe((res) => (this.res = res.MRData));
  }
}
