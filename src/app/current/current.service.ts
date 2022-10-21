import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { currentSeason, RaceWeekend } from '../model/rapidAPI/CurrentSeason';

@Injectable({
  providedIn: 'root',
})
export class CurrentService {
  private readonly API = environment.RAPIDAPI_F1;
  private readonly HEADERS = environment.RAPIDAPI_F1_HEADERS;
  private params: HttpParams = new HttpParams();

  raceWeekend: RaceWeekend[] = [];

  constructor(private http: HttpClient) {}

  getCurrentSeason() {
    let table = localStorage.getItem('raceWeekends');
    console.log(this.raceWeekend.length);
    if (table == null) {
      this.params = this.params.set(
        'season',
        new Date(Date.now()).getFullYear()
      );
      this.params = this.params.set('timezone', 'America/Sao_Paulo');
      return this.http
        .get<currentSeason>(`${this.API}/races`, {
          headers: this.HEADERS,
          params: this.params,
        })
        .subscribe((res) => {
          res.response.forEach((race) => {
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
