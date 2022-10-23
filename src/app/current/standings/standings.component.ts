import { Component, ElementRef, ViewChild } from '@angular/core';
import { DriverStanding } from 'src/app/model/ergast/standings/CurrentDriverStandings';
import { StandingsService } from './standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent {
  @ViewChild('resultType', { static: false }) resultType!: ElementRef;
  driversStandings: DriverStanding[] = [];
  resultTableSeasonType!: string;

  constructor(private service: StandingsService) {
    this.getDriversStandings();
    setTimeout(() => {
      this.resultTableSeasonType = this.resultType.nativeElement.value;
      console.log(this.resultTableSeasonType);
    });
  }

  getResultType() {
    this.resultTableSeasonType = this.resultType.nativeElement.value;
  }

  getDriversStandings() {
    this.service.getDriverStandings().subscribe((res) => {
      this.driversStandings = this.service.driversStandings;
    });
  }
}
