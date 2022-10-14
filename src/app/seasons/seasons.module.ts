import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons.component';
import { SeasonsService } from './seasons.service';

@NgModule({
  declarations: [SeasonsComponent],
  imports: [CommonModule, SeasonsRoutingModule],
  providers: [SeasonsService],
})
export class SeasonsModule {}
