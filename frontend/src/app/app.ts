
import {
  Component,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { WeatherService } from './services/weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  weather: any = null;
  forecast: any[] = [];

  errorMessage = '';
  loading = false;

  constructor(
    private weatherService: WeatherService,
    private cdr: ChangeDetectorRef
  ) {}

  searchWeather(city: string) {

    const cityName = city.trim();

    if (!cityName) {
      this.errorMessage = 'Please enter a city name';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.weather = null;
    this.forecast = [];

    this.cdr.detectChanges();

    forkJoin({
      weather: this.weatherService.getWeather(cityName),
      forecast: this.weatherService.getForecast(cityName)
    }).subscribe({

      next: (data) => {

        this.weather = data.weather;

        this.forecast = data.forecast.list.filter(
          (item: any) => item.dt_txt.includes('12:00:00')
        );

        this.loading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('Weather Error:', error);

        this.errorMessage =
          error.error?.error || 'Unable to load weather data';

        this.loading = false;

        this.cdr.detectChanges();

      }

    });
  }
}
