import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConstructorStanding } from 'src/app/model/ergast/standings/CurrentConstructorStandings';
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
  constructorsStandings: ConstructorStanding[] = [];
  resultTableSeasonType!: string;
  round: string = '';

  constructor(private service: StandingsService) {
    this.getDriversStandings();
    setTimeout(() => {
      this.resultTableSeasonType = this.resultType.nativeElement.value;
      console.log(this.resultTableSeasonType);
    });
    this.getConstructorsStandings();
  }

  getResultType() {
    this.resultTableSeasonType = this.resultType.nativeElement.value;
  }

  getDriversStandings() {
    this.service.getDriverStandings().subscribe((res) => {
      this.driversStandings = this.service.driversStandings;
      this.round = res.MRData.StandingsTable.StandingsLists[0].round;
    });
  }

  getConstructorsStandings() {
    this.service.getConstructorStandings().subscribe((res) => {
      this.constructorsStandings = this.service.constructorsStandings;
      console.log(this.constructorsStandings);
    });
  }
}
