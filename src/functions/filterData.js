const filterData = (data) => {
  const necessaryData = {

    mainWeather: data.weather[0].main,
    currentTemp: data.main.temp,
    weatherType: data.weather[0].description,
    fetchedCity: data.name,
    cityLon: data.coord.lon,
    cityLat: data.coord.lat,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    windDir: data.wind.deg,
  }

  return necessaryData
}

export default filterData
