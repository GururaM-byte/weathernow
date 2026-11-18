
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl =
    'http://127.0.0.1:8000/api/weather/';

  private forecastApiUrl =
    'http://127.0.0.1:8000/api/forecast/';

  constructor(private http: HttpClient) {}

  // Get current weather
  getWeather(city: string): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      params: {
        city: city
      }
    });
  }

  // Get 5-day weather forecast
  getForecast(city: string): Observable<any> {
    return this.http.get<any>(this.forecastApiUrl, {
      params: {
        city: city
      }
    });
  }
}
