import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import {
  RaceResultsFinish,
  ResultRace,
  ResultRaceTable,
} from 'src/app/model/ergast/results/ResultRace';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RaceWeekendService {
  private readonly API: string = environment.ERGAST_API;
  private readonly FORMAT: string = environment.FORMAT;

  resultApi!: ResultRaceTable;

  constructor(private http: HttpClient) {}

  getResultsRaces() {
    if (this.resultApi == undefined) {
      let params = new HttpParams();
      params = params.set('limit', '500');

      return this.http
        .get<RaceResultsFinish>(`${this.API}/current/results${this.FORMAT}`, {
          params,
        })
        .subscribe((res) => {
          this.resultApi = res.MRData.RaceTable;
        });
    }
    return;
  }
}
