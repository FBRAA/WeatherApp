const key = process.env.REACT_APP_API_KEY
const defaultURL = `https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&APPID=${key}&units=metric`

const fetchData = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) throw new Error()
    if (response.ok) {
      const data = await response.json();
      return data
    }
  } catch (error) {
    console.log(error)
    fetchData(defaultURL)

    // нужно сделать другой хендлер ошибок, а не дефолт
  }
};

export default fetchData
