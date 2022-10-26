import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ConstructorStanding } from 'src/app/model/ergast/standings/CurrentConstructorStandings';
import { DriverStanding } from 'src/app/model/ergast/standings/CurrentDriverStandings';
import { RaceWeekendService } from '../race-weekend/race-weekend.service';
import { StandingsService } from './standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  @ViewChild('resultType', { static: false }) resultType!: ElementRef;
  driversStandings: DriverStanding[] = [];
  constructorsStandings: ConstructorStanding[] = [];
  resultTableSeasonType!: string;
  round: string = '';

  constructor(private service: StandingsService) {
    this.getDriversStandings();
    setTimeout(() => {
      this.resultTableSeasonType = this.resultType.nativeElement.value;
    });
    this.getConstructorsStandings();
  }

  ngOnInit() {
    this.driversStandings = this.service.driversStandings;
  }

  getResultType() {
    this.resultTableSeasonType = this.resultType.nativeElement.value;
  }

  getDriversStandings() {
    this.service.getDriverStandings()?.subscribe((res) => {
      this.driversStandings = this.service.driversStandings;
      this.round = res.MRData.StandingsTable.StandingsLists[0].round;
    });
  }

  getConstructorsStandings() {
    this.service.getConstructorStandings()?.subscribe((res) => {
      this.constructorsStandings = this.service.constructorsStandings;
    });
  }
}
