import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seasons } from '../model/rapidAPI/seasons';

@Injectable({
  providedIn: 'root',
})
export class SeasonsService {
  private readonly API: string = environment.RAPIDAPI_F1;
  private readonly headers = environment.HEADERS;
  constructor(private http: HttpClient) {}

  seasonsList() {
    console.log(this.headers);
    return this.http.get<Seasons>(`${this.API}/seasons`, {
      headers: this.headers,
    });
  }
}
