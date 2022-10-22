import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIData, Race } from '../model/ergast/seasons/CurrentSeason';

@Injectable({
  providedIn: 'root',
})
export class CurrentService {
  private readonly API = environment.ERGAST_API;
  private readonly FORMAT = environment.FORMAT;

  raceWeekend: Race[] = [];

  constructor(private http: HttpClient) {}

  getCurrentSeason() {
    let table = localStorage.getItem('raceWeekends');
    console.log(this.raceWeekend.length);
    if (table == null) {
      return this.http
        .get<APIData>(`${this.API}/current${this.FORMAT}`)
        .subscribe((res) => {
          res.MRData.RaceTable.Races.forEach((race) => {
            this.raceWeekend.push(race);
            localStorage.setItem(
              'raceWeekends',
              JSON.stringify(this.raceWeekend)
            );
          });
        });
    } else {
      this.raceWeekend = JSON.parse(table);
    }
    return;
  }
}