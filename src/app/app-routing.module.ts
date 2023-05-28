import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightConfigurationPageComponent } from './components/flight-configuration-page/flight-configuration-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'', component: MainPageComponent },
  { path: 'flight-configuration', component: FlightConfigurationPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
