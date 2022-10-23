import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import {
  ConstructorStanding,
  CurrentConstructorStanding,
} from 'src/app/model/ergast/standings/CurrentConstructorStandings';
import {
  CurrentDriversStanding,
  DriverStanding,
} from 'src/app/model/ergast/standings/CurrentDriverStandings';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private readonly API = environment.ERGAST_API;
  private readonly TYPE = environment.FORMAT;

  driversStandings: DriverStanding[] = [];
  constructorsStandings: ConstructorStanding[] = [];

  constructor(private http: HttpClient) {}

  getDriverStandings() {
    return this.http
      .get<CurrentDriversStanding>(
        `${this.API}/current/driverStandings${this.TYPE}`
      )
      .pipe(
        tap((res) => {
          this.driversStandings =
            res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        })
      );
  }

  getConstructorStandings() {
    return this.http
      .get<CurrentConstructorStanding>(
        `${this.API}/current/constructorStandings${this.TYPE}`
      )
      .pipe(
        tap((res) => {
          this.constructorsStandings =
            res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        })
      );
  }
}
