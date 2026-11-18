
# WeatherNow – Weather Forecast Application

A responsive weather forecasting web application built using Angular and Django.

## Project Overview

WeatherNow allows users to search for a city and view its current weather conditions and 5-day weather forecast.

## Features

- Search weather by city name
- Current temperature display
- Weather condition and description
- Humidity information
- Wind speed information
- 5-day weather forecast
- Invalid city error handling
- Responsive desktop and mobile design

## Technologies Used

**Frontend**
- Angular 21
- TypeScript
- HTML5
- CSS3

**Backend**
- Python
- Django
- Django REST Framework

**API**
- OpenWeatherMap API

## Project Structure

```text
Weather-Application/
├── frontend/
│   ├── src/
│   │   └── app/
│   │       ├── app.ts
│   │       ├── app.html
│   │       ├── app.css
│   │       └── services/
│   │           └── weather.ts
│   └── README.md
│
└── backend/
    ├── config/
    ├── weather/
    ├── manage.py
    └── .env
```

## Installation and Setup

### Frontend Setup

```bash
cd frontend
npm install
ng serve
```

Open your browser:

http://localhost:4200/

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework django-cors-headers requests python-dotenv
python manage.py runserver
```

Backend URL:

http://127.0.0.1:8000/

## API Configuration

Create a `.env` file in the backend folder.

```env
OPENWEATHER_API_KEY=YOUR_API_KEY
```

Keep your API key private. Never upload your actual `.env` file to GitHub.

## How to Use

1. Start the Django backend.
2. Start the Angular frontend.
3. Open the application in your browser.
4. Enter a city name.
5. Click the Search button.
6. View current weather and 5-day forecast.

## Responsive Design

The application supports desktop and mobile screen sizes.

## Testing

- Tested current weather API.
- Tested 5-day forecast API.
- Tested multiple city searches.
- Tested invalid city error handling.
- Checked mobile responsive layout.

## Developer

WeatherNow – Academic Project

## License

Created for educational purposes.
```