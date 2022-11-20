import { CountryListComponent } from './components/country-list/country-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './components/country-details/country-details.component';


const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: 'country/:name', component: CountryDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'countries' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
