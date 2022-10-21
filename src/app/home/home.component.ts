import { Component } from '@angular/core';
import { RaceWeekend } from '../model/rapidAPI/CurrentSeason';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  raceWeekends: RaceWeekend[] = [];
  races: RaceWeekend[] = [];

  constructor(private service: HomeService) {
    this.getCurrentSeason();
  }

  getCurrentSeason() {
    this.service.getCurrentSeason();
    this.raceWeekends = this.service.raceWeekend;
    setTimeout(() => {
      this.races = this.raceWeekends.filter((race) => race.type == 'Race');
    }, 1000);
  }
}
