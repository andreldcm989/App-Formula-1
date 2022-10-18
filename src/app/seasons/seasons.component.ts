import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { table } from '../model/ergast/seasons/seasons';
import { SeasonsService } from './seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent {
  displayedColumns: string[] = [
    'season',
    'standings',
    'drivers',
    'driverWinner',
    'constructorWinner',
  ];
  dataSource!: MatTableDataSource<table>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  seasons: number[] = [];
  seasonsPageable: number[] = [];
  @ViewChild('order', { static: true }) order!: ElementRef;

  constructor(private service: SeasonsService) {
    this.getSeasons();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getSeasons() {
    this.service.seasonsList().subscribe((response) => {
      response.MRData.SeasonTable.Seasons.forEach((season) => {
        this.seasons.push(Number.parseInt(season.season));
      });
    });
  }
}
