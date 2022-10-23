import { Component } from '@angular/core';
import { Race } from '../model/ergast/races/Races';
import { CurrentService } from './current.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent {
  raceWeekends: Race[] = [];

  constructor(private service: CurrentService) {
    this.getCurrentSeason();
  }

  getCurrentSeason() {
    this.service.getCurrentSeason();
    this.raceWeekends = this.service.raceWeekend;
  }
}
