import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '../functions/fetchData'
import filterForecast from '../functions/filterForecast'
// import routes from '../constants/routes'

export const getForecast = createAsyncThunk(
  'forecast/getForecast',
  async (inputCityURL, callback) => {
    const response = await fetchData(inputCityURL)
    // console.log(routes.city)
    return filterForecast(response, callback)
  },
)

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    isLoading: false,
    weekData: null,
  },
  extraReducers: {
    [getForecast.pending]: (state) => {
      state.isLoading = true
    },
    [getForecast.fulfilled]: (state, action) => {
      state.isLoading = false
      state.weekData = action.payload
      // action.callback && action.callback()
    },
    [getForecast.rejected]: (state, action) => {
      state.isLoading = false
      state.weekData = action.payload
    },
  },

})
export default forecastSlice.reducer;
