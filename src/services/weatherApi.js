import axios from 'axios'

const API_KEY = 'your-api-key'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric'
    }
  })
  return {
    city: response.data.name,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed
  }
}

export const fetchForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric'
    }
  })
  return response.data.list.slice(0, 5).map(item => ({
    date: new Date(item.dt * 1000).toLocaleDateString(),
    temperature: Math.round(item.main.temp),
    description: item.weather[0].description
  }))
}
