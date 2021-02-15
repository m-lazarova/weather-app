<template>
  <div class="weather-check">
    <h1>Weather App</h1>
    <button @click="weatherPicker">Check the temperature</button>
    <div class="weather-check__description" v-if="visible">
      <p class="weather-check__paragraph--general">
        The temperature in {{ currentWeather.location }} is
        {{ currentWeather.temperature }}
      </p>
      <p class="weather-check__paragraph--glasgow-specific"
        v-show="clothesAdvice" >
          You should wear a {{ clothesAdvice }}
      </p>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      weatherData: [
        {
          "location" : "Edinburgh",
          "temperature" : 10
        },
        {
          "location" : "Glasgow",
          "temperature" : 15
        },
        {
          "location" : "Edinburgh",
          "temperature" : 20
        },
        {
          "location" : "Glasgow",
          "temperature" : 10
        },
        {
          "location" : "London",
          "temperature" : 10
        },
        {
          "location" : "Glasgow",
          "temperature" : 25
        }
      ],
      currentWeather: '',
      visible: false
    }
  },

  methods: {
    weatherPicker(){
      let weatherEntry = Math.floor(Math.random() * this.weatherData.length);
      this.currentWeather = this.weatherData[weatherEntry];
      this.visible = true;
    }
  },

  computed: {
    clothesAdvice(){
      if (this.currentWeather.location === 'Glasgow'){
        return this.currentWeather.temperature >= 15 ? 't-shirt' :  'jumper';
      }
      return '';
    }
  }
}
</script>
