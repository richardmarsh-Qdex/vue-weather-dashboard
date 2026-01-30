<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <h1>Weather Dashboard</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/forecast">Forecast</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
