import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { customTable } from '../model/ergast/seasons/seasons';
import { SeasonsService } from './seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent {
  displayedColumns: string[] = [
    'season',
    'schedule',
    'drivers',
    'constructors',
    'driverId',
    'driverWinner',
  ];
  dataSource!: MatTableDataSource<customTable>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  seasons: customTable[] = [];
  seasonsPageable: number[] = [];
  @ViewChild('order', { static: true }) order!: ElementRef;

  constructor(private service: SeasonsService) {
    this.getSeasons();
    this.dataSource = new MatTableDataSource(this.seasons);
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
    this.service.getSeasons();
    this.seasons = this.service.seasonsList;
  }
}
