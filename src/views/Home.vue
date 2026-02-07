<template>
  <div class="home">
    <div class="container">
      <SearchBar @search="handleSearch" />
      <div v-if="currentWeather" class="weather-card">
        <h2>{{ currentWeather.city }}</h2>
        <div class="temperature">{{ currentWeather.temperature }}°C</div>
        <div class="description">{{ currentWeather.description }}</div>
        <div class="details">
          <div>Humidity: {{ currentWeather.humidity }}%</div>
          <div>Wind: {{ currentWeather.windSpeed }} km/h</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import { fetchWeather } from '../services/weatherApi'

export default {
  name: 'Home',
  components: {
    SearchBar
  },
  setup() {
    const currentWeather = ref(null)

    const handleSearch = async (city) => {
      try {
        const data = await fetchWeather(city)
        currentWeather.value = data
      } catch (error) {
        console.error('Error fetching weather:', error)
      }
    }

    return {
      currentWeather,
      handleSearch
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem;
}

.weather-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.temperature {
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

.details {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}
</style>
