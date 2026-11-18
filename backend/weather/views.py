import os
from pathlib import Path

import requests
from dotenv import load_dotenv
from django.http import JsonResponse
from django.views.decorators.http import require_GET

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")


@require_GET
def get_weather(request):

    city = request.GET.get("city", "").strip()

    if not city:
        return JsonResponse(
            {"error": "Please enter a city name"},
            status=400
        )

    api_key = os.getenv("OPENWEATHER_API_KEY")

    if not api_key:
        return JsonResponse(
            {"error": "Weather API key is not configured"},
            status=500
        )

    try:
        response = requests.get(
            "https://api.openweathermap.org/data/2.5/weather",
            params={
                "q": city,
                "appid": api_key,
                "units": "metric"
            },
            timeout=10
        )

        data = response.json()

        if response.status_code != 200:
            return JsonResponse(
                {"error": data.get("message", "Weather API error")},
                status=response.status_code
            )

        return JsonResponse(data)

    except requests.RequestException:
        return JsonResponse(
            {"error": "Unable to connect to weather service"},
            status=503
        )
    
@require_GET
def get_forecast(request):

    city = request.GET.get("city", "").strip()

    if not city:
        return JsonResponse(
            {"error": "Please enter a city name"},
            status=400
        )

    api_key = os.getenv("OPENWEATHER_API_KEY")

    if not api_key:
        return JsonResponse(
            {"error": "API key not configured"},
            status=500
        )

    try:
        response = requests.get(
            "https://api.openweathermap.org/data/2.5/forecast",
            params={
                "q": city,
                "appid": api_key,
                "units": "metric"
            },
            timeout=10
        )

        data = response.json()

        if response.status_code != 200:
            return JsonResponse(
                {"error": data.get("message", "Forecast error")},
                status=response.status_code
            )

        return JsonResponse(data)

    except requests.RequestException:
        return JsonResponse(
            {"error": "Unable to connect to weather service"},
            status=503
        )
