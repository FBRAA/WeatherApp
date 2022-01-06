const filterData = (data) => {
  const necessaryData = {

    city: data.name,
    weatherType: data.weather[0].description,
    temp: data.main.temp,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    windDir: data.wind.deg,
    lon: data.coord.lon,
    lat: data.coord.lat,
    main: data.weather[0].main,
    feelsLike: data.main.feels_like,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  }

  return necessaryData
}

export default filterData
