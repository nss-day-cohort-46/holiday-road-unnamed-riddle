import { Weather } from "./Weather.js"
import { getWeather, useWeather } from "./WeatherProvider.js"

const npsWeatherTarget = document.querySelector(".mainContainer")

export const WeatherList = () => {
  getWeather()
    .then(() => {
      const weatherArray = useWeather()
      render(weatherArray)
      
    })
}
      /*
            Now that you have the data, what
            component should be rendered?
        */
  // will make render function to keep code dry
const render = weatherCollection => {

      let weatherHTMLRep = ""

      for (const weather of weatherCollection) {
        weatherHTMLRep += Weather(weather)
        // debugger
      }
      
      npsWeatherTarget.innerHTML = `
        <h3>Weather</h3>
        <section class="weatherList">
        ${weatherHTMLRep}
        </section>`
    }
