import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '../functions/fetchData'
import filterData from '../functions/filterData'

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (inputCityURL) => {
    const response = await fetchData(inputCityURL)
    return filterData(response)
  },
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isLoading: false,
    data: [],
    city: '',
    currentTemp: '',
    main: '',
    weatherType: '',
    humidity: '',
    pressure: '',
    windSpeed: '',
    lon: '30.2642',
    lat: '59.8944',
    feelsLike: '',
    sunrise: '',
    sunset: '',
    windDir: '',
  },
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.isLoading = true
    },
    [getWeather.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.city = action.payload.city
      state.weatherType = action.payload.weatherType
      state.currentTemp = action.payload.temp
      state.humidity = action.payload.humidity
      state.pressure = action.payload.pressure
      state.windSpeed = action.payload.windSpeed
      state.lon = action.payload.lon
      state.lat = action.payload.lat
      state.main = action.payload.main
      state.feelsLike = action.payload.feelsLike
      state.sunrise = action.payload.sunrise
      state.sunset = action.payload.sunset
      state.windDir = action.payload.windDir
    },
    [getWeather.rejected]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
      state.city = action.payload.city
      state.weatherType = action.payload.weatherType
      state.currentTemp = action.payload.temp
      state.humidity = action.payload.humidity
      state.pressure = action.payload.pressure
      state.windSpeed = action.payload.windSpeed
      state.lon = action.payload.lon
      state.lat = action.payload.lat
      state.main = action.payload.main
      state.feelsLike = action.payload.feelsLike
      state.sunrise = action.payload.sunrise
      state.sunset = action.payload.sunset
      state.windDir = action.payload.windDir
    },
  },

})
export default weatherSlice.reducer;
