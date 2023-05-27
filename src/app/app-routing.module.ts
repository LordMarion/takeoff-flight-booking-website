import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlightConfigurationPageComponent } from './components/flight-configuration-page/flight-configuration-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path:'', component: MainPageComponent},
  { path: 'flight-configuration', component: FlightConfigurationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
