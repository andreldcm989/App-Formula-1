import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DriverTable, MRData, result } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly url = 'http://ergast.com/api/f1/2022/drivers.json';

  constructor(private http: HttpClient) {}

  getDriver() {
    return this.http.get<result>(this.url);
  }
}
