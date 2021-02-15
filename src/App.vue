<template>
  <div id="app">
    <img src="./assets/weather.jpg">
    <WeatherCheck/>
  </div>
</template>

<script>
import WeatherCheck from './components/WeatherCheck.vue'

export default {
  name: 'App',
  components: {
    WeatherCheck
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
}
</style>
