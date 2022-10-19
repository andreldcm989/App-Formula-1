import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { currentSeason, RaceWeekend } from '../model/rapidAPI/currentSeason';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API = environment.RAPIDAPI_F1;
  private readonly HEADERS = environment.RAPIDAPI_F1_HEADERS;
  private params: HttpParams = new HttpParams();

  raceWeekend: RaceWeekend[] = [];

  constructor(private http: HttpClient) {}

  getCurrentSeason() {
    if (this.raceWeekend.length == 0) {
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
          });
        });
    }
    return;
  }
}
