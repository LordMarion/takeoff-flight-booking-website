import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})

export class WeatherWidgetComponent implements OnInit {
  currentWeather$: Observable<WeatherData>
  currentDate: Date = new Date();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.currentWeather$ = this.weatherService.getWeather('Lodz');
  }
}
