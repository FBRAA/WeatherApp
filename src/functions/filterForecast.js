const filterForecast = (data) => {
  const weekData = data.daily.map((elem) => ({
    dt: elem.dt,
    maxTemp: elem.temp.max,
    minTemp: elem.temp.min,
    mainWeather: elem.weather[0].main,
    pressure: elem.pressure,
    sunrise: elem.sunrise,
    sunset: elem.sunset,
    humidity: elem.humidity,
    uvi: elem.uvi,
    windSpeed: elem.wind_speed,
    feels_like: elem.feels_like.day,
    wind_deg: elem.wind_deg,
  }))
  return weekData
}

export default filterForecast
