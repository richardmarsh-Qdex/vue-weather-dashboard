<template>
  <div class="search-bar">
    <input
      v-model="city"
      type="text"
      placeholder="Enter city name"
      @keyup.enter="search"
    />
    <button @click="search">Search</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SearchBar',
  emits: ['search'],
  setup(props, { emit }) {
    const city = ref('')

    const search = () => {
      if (city.value.trim()) {
        emit('search', city.value.trim())
      }
    }

    return {
      city,
      search
    }
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
}

input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 0.75rem 2rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background: #35a372;
}
</style>
