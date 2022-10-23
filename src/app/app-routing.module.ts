import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';

const routes: Routes = [
  {
    path: 'seasons',
    loadChildren: () =>
      import('./seasons/seasons.module').then((m) => m.SeasonsModule),
  },
  { path: '', redirectTo: 'current/standings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
