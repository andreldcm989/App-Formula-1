import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { customTable } from '../model/ergast/seasons/seasons';
import { Standings } from '../model/ergast/standings/standings';

@Injectable({
  providedIn: 'root',
})
export class SeasonsService {
  private readonly API: string = environment.ERGAST_API;
  private readonly FORMAT: string = environment.FORMAT;
  private readonly headers = environment.HEADERS;

  seasonsList: customTable[] = [];

  constructor(private http: HttpClient) {}

  getSeasons() {
    return this.http
      .get<Standings>(`${this.API}/driverStandings/1${this.FORMAT}?limit=100`)
      .subscribe((res) => {
        res.MRData.StandingsTable.StandingsLists.forEach((st, i) => {
          console.log(st.DriverStandings[i]);
          // let table: customTable = {
          //   season: Number.parseInt(st.season),
          //   schedule: Number.parseInt(st.round),
          //   drivers: 'Ver Pilotos',
          //   constructors: 'Ver Equipes',
          //   driverWinnerId: st.DriverStandings[i].Driver.driverId,
          //   driverWinner: `${st.DriverStandings[i].Driver.givenName} ${st.DriverStandings[i].Driver.familyName}`,
          // };
          // this.seasonsList.push(table);
        });
      });
  }
}
