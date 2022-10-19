import { Component, ViewChild } from '@angular/core';
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
    'driverWinner',
  ];
  dataSource!: MatTableDataSource<customTable>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  seasons: customTable[] = [];
  seasonsPageable: number[] = [];

  constructor(private service: SeasonsService) {
    this.getSeasons();
    this.dataSource = new MatTableDataSource(this.seasons);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Itens por página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.nextPageLabel = 'Próxima página';
    }, 200);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getSeasons() {
    console.log(this.service.seasonsList);
    if (this.seasons.length == 0) {
      this.service.getSeasons();
      this.seasons = this.service.seasonsList;
      return;
    }
  }
}
