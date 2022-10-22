import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentRoutingModule } from './current-routing.module';
import { CurrentComponent } from './current.component';
import { StandingsComponent } from './standings/standings.component';

@NgModule({
  declarations: [CurrentComponent, StandingsComponent],
  imports: [CommonModule, CurrentRoutingModule],
})
export class CurrentModule {}
