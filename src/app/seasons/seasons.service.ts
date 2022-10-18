import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../model/ergast/seasons/seasons';

@Injectable({
  providedIn: 'root',
})
export class SeasonsService {
  private readonly API: string = environment.ERGAST_API;
  private readonly FORMAT: string = environment.FORMAT;
  private readonly headers = environment.HEADERS;

  constructor(private http: HttpClient) {}

  seasonsList() {
    return this.http.get<Response>(`${this.API}/seasons${this.FORMAT}`);
  }
}
