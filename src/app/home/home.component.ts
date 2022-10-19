import { Component } from '@angular/core';
import { RaceWeekend } from '../model/rapidAPI/currentSeason';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  raceWeekend: RaceWeekend[] = [];

  constructor(private service: HomeService) {
    this.getCurrentSeason();
  }

  getCurrentSeason() {
    this.service.getCurrentSeason();
    this.raceWeekend = this.service.raceWeekend;
  }
}
