import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../current.service';
import { StandingsService } from './standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent {
  constructor(private service: StandingsService) {
    this.getDriversStandings();
  }

  getDriversStandings() {
    return this.service.getDriverStandings();
  }
}
