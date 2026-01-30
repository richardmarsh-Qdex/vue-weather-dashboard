<template>
  <div class="forecast">
    <div class="container">
      <h1>5-Day Forecast</h1>
      <SearchBar @search="handleSearch" />
      <div v-if="forecast" class="forecast-list">
        <div v-for="day in forecast" :key="day.date" class="forecast-item">
          <div class="date">{{ day.date }}</div>
          <div class="temp">{{ day.temperature }}°C</div>
          <div class="desc">{{ day.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import { fetchForecast } from '../services/weatherApi'

export default {
  name: 'Forecast',
  components: {
    SearchBar
  },
  setup() {
    const forecast = ref(null)

    const handleSearch = async (city) => {
      try {
        const data = await fetchForecast(city)
        forecast.value = data
      } catch (error) {
        console.error('Error fetching forecast:', error)
      }
    }

    return {
      forecast,
      handleSearch
    }
  }
}
</script>

<style scoped>
.forecast {
  padding: 2rem;
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.forecast-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.date {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.temp {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.desc {
  color: #666;
}
</style>
