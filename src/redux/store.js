// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
})

export default store
