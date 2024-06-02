import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/planet-list', pathMatch: 'full' },
  { path: 'planet-list', component: PlanetListComponent },
  { path: 'planet-details', component: PlanetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
