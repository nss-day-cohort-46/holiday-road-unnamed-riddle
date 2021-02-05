import { Weather } from "./Weather.js"
import { getWeather, useWeather } from "./WeatherProvider.js"

// WeatherList takes a parameters of a park object. 
export const WeatherList = (park) => {
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
  }
  
  const weatherTarget = document.querySelector(".parkWeather")
      weatherTarget.innerHTML = `
        <h3>5 Day Forecast</h3>
        <section class="weatherList">
        ${weatherHTMLRep}
        </section>`
    }


    // add event listener that listens for previewDetailsLoaded then runs a check on the selected park
    // and uses that object as a parameter for WeatherList