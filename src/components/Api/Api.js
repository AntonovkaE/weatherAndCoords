import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const WEATHER_API = 'https://api.weatherbit.io/v2.0';
const WEATHER_KEY = '2bed74261c134e5daa728d60d7473405';
const GEOCODIFY_API = 'https://api.geocodify.com/v2/geocode';
const GEOCODIFY_KEY = 'aaf64b131532d9f33080988c6bd48df655a77998';

export const fetchCityCoords = createAsyncThunk('cityData/fetchCityData', (city) => axios
  .get(`${GEOCODIFY_API}?api_key=${GEOCODIFY_KEY}&q=${city}`)
  .then((response) => response.data.response.features[0]));

export const fetchForecast = createAsyncThunk('forecast/fetchForecast', ([lon = 0, lat = 0]) => axios
  .get(`${WEATHER_API}/forecast/daily?lat=${lat}&lon=${[lon]}&key=${WEATHER_KEY}&include=minutely&`)
  .then((response) => response.data.data));

export const fetchCitiesWeather = createAsyncThunk('forecastCities/fetchCitiesWeather', (cities) => axios
  .get(`${WEATHER_API}/current?cities=${cities}&key=${WEATHER_KEY}`)
  .then((response) => response.data.data));
