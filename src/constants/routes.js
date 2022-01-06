const key = process.env.REACT_APP_API_KEY

const routes = {
  weather: 'http://api.openweathermap.org/data/2.5/weather?q=',
  forecast: 'https://api.openweathermap.org/data/2.5/onecall?lat=',
}

export default new Proxy(routes, {
  get(target, prop) {
    return `${target[prop]}APPID=${key}`
  },
})
