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
  },
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.isLoading = true
    },
    [getWeather.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    [getWeather.rejected]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
  },

})
export default weatherSlice.reducer;
