
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl =
    'https://weathernow-5ed0.onrender.com/api/weather/';

  private forecastApiUrl =
    'https://weathernow-5ed0.onrender.com/api/forecast/';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      params: { city: city }
    });
  }

  getForecast(city: string): Observable<any> {
    return this.http.get<any>(this.forecastApiUrl, {
      params: { city: city }
    });
  }
}

