import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path:'', component: MainPageComponent},
  // { path: 'summary-page', component: SummaryPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
