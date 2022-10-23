import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import {
  CurrentDriversStanding,
  DriverStanding,
} from 'src/app/model/ergast/standings/CurrentDriverStandings';
import { StandingsLists } from 'src/app/model/ergast/standings/StandingsSeasons';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private readonly API = environment.ERGAST_API;
  private readonly TYPE = environment.FORMAT;

  driversStandings: DriverStanding[] = [];

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
}
