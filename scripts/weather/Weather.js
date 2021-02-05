
export const Weather = (weatherObj) => {

    return `
    <div class="weather">
        <p class="day">Day: ${new Date(weatherObj.dt * 1000).toLocaleDateString('en-US')}</P>
        <p class="min/max">Min: ${weatherObj.temp.min} / Max: ${weatherObj.temp.max}</P>
        <p class="weatherDetail"> ${weatherObj.weather[0].description}</P>
        <img src="http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png" alt=""
        </div>
        `
}