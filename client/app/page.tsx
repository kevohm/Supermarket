"use client";
import { ForecastList } from "@/components/ForecastList";
import { SearchControls } from "@/components/SearchControls";
import { WeatherSidebar } from "@/components/WeatherSidebar";
import { WeatherStats } from "@/components/WeatherStats";
import { Forecast, Unit } from "@/types/home";
import axios from "axios";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useEffect, useState } from "react";

dayjs.extend(advancedFormat);

const convertTemperatureToF = (temp: number): number => {
  return Math.round((temp * 9) / 5 + 32);
};

const convertTemperatureToC = (temp: number): number => {
  return Math.round(((temp - 32) * 5) / 9);
};
const formatTemperature = (temp: number, unit: string): string => {
  return unit === "imperial" ? `${convertTemperatureToF(temp)}°F` : `${temp}°C`;
};
const formatLinkedTemp = (tempRang: string, unit: Unit): string => {
  const [min, max] = tempRang
    .split("-")
    .map((t) =>
      unit === "imperial" ? convertTemperatureToF(parseInt(t)) : parseInt(t)
    );
  return `${min}-${max}`;
};

export default function Home() {
  const [city, setCity] = useState("Nairobi");
  const [unit, setUnit] = useState<Unit>("metric");
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentWeather, setCurrentWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("🌤️");
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirection, setWindDirection] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [forecast, setForecast] = useState<Forecast[]>([]);
  const [location, setLocation] = useState("Nairobi");
  const [date, setDate] = useState("");
  const [input, setInput] = useState("");

  const API_KEY = "5f6420eb0428a793647bb832132e51ae";

  const convertWindDirection = (deg: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(deg / 45) % 8];
  };

  const getWeatherIcon = (main: string): string => {
    switch (main.toLowerCase()) {
      case "clear":
        return "☀️";
      case "clouds":
        return "☁️";
      case "rain":
        return "🌧️";
      case "snow":
        return "❄️";
      case "thunderstorm":
        return "⛈️";
      case "drizzle":
        return "🌦️";
      case "mist":
      case "fog":
        return "🌫️";
      default:
        return "🌤️";
    }
  };

  const fetchWeather = async (cityName: string) => {
    try {
      const geoRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      );
      const { lat, lon, name } = geoRes.data[0];
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly,alerts&appid=${API_KEY}`
      );

      const data = weatherRes.data;
      setCurrentTemp(Math.round(data.current.temp));
      setCurrentWeather(data.current.weather[0].main);
      setWeatherIcon(getWeatherIcon(data.current.weather[0].main));
      setWindSpeed(data.current.wind_speed);
      setWindDirection(convertWindDirection(data.current.wind_deg));
      setHumidity(data.current.humidity);
      setLocation(name);

      const future = data.daily.slice(1, 4).map((d: any) => {
        return {
          date: dayjs.unix(d.dt).format("D MMM"),
          icon: getWeatherIcon(d.weather[0].main),
          temperature: `${Math.round(d.temp.min)}-${Math.round(d.temp.max)}°${
            unit === "metric" ? "C" : "F"
          }`,
        };
      });
      setForecast(future);

      const today = dayjs().format("Do MMMM YYYY");
      setDate(today);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setCurrentTemp(26);
      setCurrentWeather("Clear");
      setWeatherIcon(getWeatherIcon("Clear"));
      setWindSpeed(10);
      setWindDirection("NE");
      setHumidity(60);
      setLocation(cityName);

      const today = dayjs().format("Do MMMM YYYY");
      setDate(today);

      setForecast([
        {
          date: dayjs().add(1, "day").format("D MMM"),
          icon: getWeatherIcon("Clouds"),
          temperature: `${formatLinkedTemp("20-28", unit)}°${
            unit === "metric" ? "C" : "F"
          }`,
        },
        {
          date: dayjs().add(2, "day").format("D MMM"),
          icon: getWeatherIcon("Rain"),
          temperature: `${formatLinkedTemp(`18-25`, unit)}°${
            unit === "metric" ? "C" : "F"
          }`,
        },
        {
          date: dayjs().add(3, "day").format("D MMM"),
          icon: getWeatherIcon("Clear"),
          temperature: `${formatLinkedTemp("22-30", unit)}°${
            unit === "metric" ? "C" : "F"
          }`,
        },
      ]);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [unit]);

  return (
    <div className="h-screen w-full bg-white">
      <div className="h-full w-full grid grid-cols-12">
        {/* Sidebar */}
        <div className="p-5 col-span-3 pt-10 bg-muted border-r border-gray-200 flex flex-col justify-between items-center space-y-4">
         <WeatherSidebar weatherIcon={weatherIcon} date={date} location={location} temperature={formatTemperature(currentTemp, unit)}  weatherType={currentWeather}/>
        </div>

        {/* Main Content */}
        <div className="p-5 col-span-9 bg-base-100 grid grid-rows-[180px,_repeat(2,_minmax(0,_1fr))] gap-5">
          {/* Search and Unit Toggle */}
          <SearchControls
            input={input}
            unit={unit}
            setInput={setInput}
            setUnit={setUnit}
            onSearch={() => {
              setCity(input);
              fetchWeather(input);
              setInput("");
            }}
          />

          {/* Forecast Cards */}
          <ForecastList forecast={forecast} />

          {/* Weather Stats */}
          <WeatherStats
            windDirection={windDirection}
            windSpeed={windSpeed}
            humidity={humidity}
            unit={unit}
          />
        </div>
      </div>
    </div>
  );
}
