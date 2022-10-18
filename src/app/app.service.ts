import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseDrivers } from './model/ergast/drivers/ResponseDrivers';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly url = `${environment.API}/2022/drivers.json`;

  constructor(private http: HttpClient) {}

  getDriver() {
    return this.http.get<ResponseDrivers>(this.url);
  }
}
