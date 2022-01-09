import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '../functions/fetchData'
import filterData from '../functions/filterData'
import filterForecast from '../functions/filterForecast';

const key = process.env.REACT_APP_API_KEY

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async ({ inputCity, units }) => {
    const weatherResponse = await fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity || 'Saint Petersburg'}&units=${units}&APPID=${key}`)
    const weatherData = filterData(weatherResponse)
    // forecast section
    const { cityLat, cityLon } = weatherData
    const forecastResponse = await fetchData(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat || '59.8944'}&lon=${cityLon || '30.2642'}&units=${units}&exclude=minutely,hourly,alerts&appid=${key}`)
    const forecastData = filterForecast(forecastResponse)
    return { weatherData, forecastData }
  },
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isLoading: false,
    weatherData: [],
    forecastData: null,
  },
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.isLoading = true
    },
    [getWeather.fulfilled]: (state, action) => {
      state.isLoading = false
      state.weatherData = action.payload.weatherData
      state.forecastData = action.payload.forecastData
    },
    [getWeather.rejected]: (state) => {
      state.isLoading = false
    },
  },

})
export default weatherSlice.reducer;
