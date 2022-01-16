import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import SearchBar from "./search";
import { actionCreators } from "../store";
import WeatherItem from "./weatherItem";

const Weather = () => {
  const state = useSelector((state) => state);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const res = state.weatherList;

  const searchWeather = (cityName) => {
    fetchData(cityName);
  };

  const fetchData = async (cityName) => {
    const params = {
      q: cityName,
      appid: API_KEY,
    };
    const {
      data: {
        main: { temp },
      },
      data: {
        sys: { country },
      },
      data: { name },
      data: {
        main: { pressure },
      },
      data: {
        main: { humidity },
      },
    } = await axios.get(BASE_URL, { params });

    let celsius = parseFloat(temp);
    celsius = Math.round(celsius - 273.15);

    const record = {
      country: country,
      name: name,
      temp: celsius,
      pressure: pressure,
      humidity: humidity,
    };

    actionCreators.pushData(record);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Weather App
        </a>
      </nav>
      <SearchBar searchWeather={searchWeather} />

      {[...state.weatherList].reverse().map((record, index) => {
        return <WeatherItem key={index} record={record} />;
      })}
    </div>
  );
};

export default Weather;
