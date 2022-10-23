import { Component } from '@angular/core';
import { DriverStanding } from 'src/app/model/ergast/standings/CurrentDriverStandings';
import { StandingsService } from './standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent {
  driversStandings: DriverStanding[] = [];

  constructor(private service: StandingsService) {
    this.getDriversStandings();
  }

  getDriversStandings() {
    this.service.getDriverStandings().subscribe((res) => {
      this.driversStandings = this.service.driversStandings;
      console.log(this.driversStandings);
    });
  }
}
