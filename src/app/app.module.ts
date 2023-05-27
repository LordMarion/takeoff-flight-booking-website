import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { WeatherService } from './services/weather.service';
import { UserService } from './services/user.service';
import { SharedService } from './services/shared.service';
import { FormDataService } from './services/form-data.service';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageFormComponent } from './components/main-page/main-page-form/main-page-form.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { FlightConfigurationPageComponent } from './components/flight-configuration-page/flight-configuration-page.component';
import { FlightConfigurationPageFormComponent } from './components/flight-configuration-page/flight-configuration-page-form/flight-configuration-page-form.component';
import { SeatingPlanComponent } from './components/flight-configuration-page/seating-plan/seating-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    HeaderComponent,
    MainPageFormComponent,
    MainPageComponent,
    LoginComponent,
    FlightConfigurationPageComponent,
    FlightConfigurationPageFormComponent,
    SeatingPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [WeatherService, UserService, SharedService, FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
