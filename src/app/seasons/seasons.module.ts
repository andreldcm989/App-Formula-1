import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons.component';
import { SeasonsService } from './seasons.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SeasonsComponent],
  imports: [
    CommonModule,
    SeasonsRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
  ],
  providers: [SeasonsService],
})
export class SeasonsModule {}
