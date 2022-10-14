import { Component, OnInit } from '@angular/core';
import { SeasonsService } from './seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent {
  seasons: number[] = [];

  constructor(private service: SeasonsService) {
    this.getSeasons();
  }

  getSeasons() {
    this.service.seasonsList().subscribe((response) => {
      this.seasons = response.response;
    });
  }
}
