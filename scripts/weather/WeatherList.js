import { Weather } from "./Weather.js"
import { getWeather, useWeather } from "./WeatherProvider.js"


export const WeatherList = (park, weatherTarget) => {
  getWeather(park)
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
  
  const weatherTarget = document.querySelector(".parkWeather")
      weatherTarget.innerHTML = `
        <h3>Weather</h3>
        <section class="weatherList">
        ${weatherHTMLRep}
        </section>`
    }
