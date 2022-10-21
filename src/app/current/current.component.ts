import { Component } from '@angular/core';
import { RaceWeekend } from '../model/rapidAPI/CurrentSeason';
import { CurrentService } from './current.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent {
  raceWeekends: RaceWeekend[] = [];
  races: RaceWeekend[] = [];

  constructor(private service: CurrentService) {
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
