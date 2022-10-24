import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current.component';
import { RaceWeekendComponent } from './race-weekend/race-weekend.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  {
    path: 'current',
    component: CurrentComponent,
    children: [
      { path: 'standings', component: StandingsComponent },
      { path: ':round', component: RaceWeekendComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentRoutingModule {}
