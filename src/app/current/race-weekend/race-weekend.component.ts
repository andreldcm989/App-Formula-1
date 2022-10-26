import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {
  RaceFinish,
  RaceResultsFinish,
  ResultRace,
} from 'src/app/model/ergast/results/ResultRace';
import { RaceWeekendService } from './race-weekend.service';

@Component({
  selector: 'app-race-weekend',
  templateUrl: './race-weekend.component.html',
  styleUrls: ['./race-weekend.component.css'],
})
export class RaceWeekendComponent implements OnInit {
  @ViewChild('resultType', { static: false }) resultType!: ElementRef;
  resultAPI: Observable<RaceResultsFinish> | undefined;
  resultsRound: RaceFinish[] = [];
  round!: number;
  resultTableRoundType!: string;

  constructor(
    private route: ActivatedRoute,
    private service: RaceWeekendService
  ) {
    this.resultAPI = this.service.getResultsRaces();
    setTimeout(() => {
      this.resultTableRoundType = this.resultType.nativeElement.value;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.round = Number.parseInt(param['round']);
      this.resultsRound.pop();
      setTimeout(() => {
        this.resultAPI?.subscribe((res) => {
          this.resultsRound = res.MRData.RaceTable.Races.filter(
            (r) => Number.parseInt(r.round) == this.round
          );
          console.log(this.resultsRound);
        });
      }, 1000);
    });
  }

  getResultType() {
    this.resultTableRoundType = this.resultType.nativeElement.value;
  }
}
