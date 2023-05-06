import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey = '77454f3af1727156ffe470764aba2180';
  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=metric`);
  }
}
