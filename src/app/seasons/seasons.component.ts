import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SeasonsService } from './seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent {
  seasons: number[] = [];
  @ViewChild('order', { static: true }) order!: ElementRef;

  constructor(private service: SeasonsService) {
    this.getSeasons();
  }

  getSeasons() {
    this.service.seasonsList().subscribe((response) => {
      response.MRData.SeasonTable.Seasons.forEach((season) => {
        this.seasons.push(Number.parseInt(season.season));
      });
      this.orderSeasonsBy(this.order.nativeElement.value);
    });
  }

  orderSeasonsBy(order: string) {
    if (order === 'desc') {
      this.seasons = this.seasons.sort((a, b) => {
        return b - a;
      });
    } else {
      this.seasons = this.seasons.sort((a, b) => {
        return a - b;
      });
    }
  }
}
