// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import forecastReducer from './forecastSlice'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    forecast: forecastReducer,
  },
})

export default store
