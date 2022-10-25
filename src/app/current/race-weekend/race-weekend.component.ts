import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceTable } from 'src/app/model/ergast/races/Races';
import {
  RaceResultsFinish,
  ResultRace,
  ResultRaceTable,
} from 'src/app/model/ergast/results/ResultRace';
import { RaceWeekendService } from './race-weekend.service';

@Component({
  selector: 'app-race-weekend',
  templateUrl: './race-weekend.component.html',
  styleUrls: ['./race-weekend.component.css'],
})
export class RaceWeekendComponent implements OnInit {
  @ViewChild('resultType', { static: false }) resultType!: ElementRef;
  resultAPI!: ResultRaceTable;
  resultRaces: ResultRace[] = [];
  round!: number;
  resultTableRoundType!: string;

  constructor(
    private route: ActivatedRoute,
    private service: RaceWeekendService
  ) {
    setTimeout(() => {
      this.resultTableRoundType = this.resultType.nativeElement.value;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.round = Number.parseInt(param['round']);
      console.log(this.round);
      setTimeout(() => {
        this.getResultRace(this.round);
      });
    });
  }

  getResultType() {
    this.resultTableRoundType = this.resultType.nativeElement.value;
  }

  getResultRace(round: number) {
    let race = this.resultAPI.Races.filter(
      (r) => Number.parseInt(r.round) == round
    );
    this.resultRaces = race[0].Results;
    console.log(this.resultRaces);
  }
}
