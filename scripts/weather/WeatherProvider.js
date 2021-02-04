import { settings } from "/scripts/Settings.js"
// potentially nps -lat- and -lon- imported for weath to update for each park

let weather = []

export const useWeather = () => {
  return weather.slice()
}

export const getWeather = () => {
  /*
      Load database state into application state with a fetch().
      Make sure the last then() updates the weather array
  */
return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
      console.table(parsedResponse)
    //   weather = parsedResponse
    })

}