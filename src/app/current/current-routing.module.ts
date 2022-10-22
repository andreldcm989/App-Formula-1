import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  {
    path: 'current',
    component: CurrentComponent,
    children: [{ path: 'standings', component: StandingsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentRoutingModule {}
