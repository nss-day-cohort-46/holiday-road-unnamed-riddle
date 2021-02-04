import { settings } from "/scripts/Settings.js"
// import { parkObj } from ".js"
// *!*!*!*!*!*!*!*!*!

let thisWeather = []
let weather = []
export const useWeather = () => {
  return weather.slice()
}

export const getWeather = () => {
  /*
      Load database state into application state with a fetch().
      Make sure the last then() updates the weather array
      */
// *!*!*!*!*!*!*!*!*!
  // This will evetually be set to take lat and long from park data
  // !*!*!*!*!*!*!*!*!
    let parkObj = {
    latitude: 42.2553961,
    longitude: -71.01160356,
    }
//  the dot notation will be parkObject.data.latitude
return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${parkObj.latitude}&lon=${parkObj.longitude}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${settings.weatherKey}`)
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    .then(response => response.json())
    .then(parsedResponse => {
      thisWeather = parsedResponse.daily
      weather = thisWeather.splice(0, 5)
      console.table(weather)
    })

}