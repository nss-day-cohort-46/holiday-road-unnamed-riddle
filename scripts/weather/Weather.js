
export const Weather = (weatherObj) => {
    return `
    <div class="weather">
        <p class="day">Day: ${new Date(weatherObj.dt * 1000).toLocaleDateString('en-US')}</P>
        <p class="min">Min: ${weatherObj.temp.min}</P>
        <p class="max">Max: ${weatherObj.temp.max}</P>
        <p class="weather">Weather: ${weatherObj.weather[0].main}</P>
        <p class="weatherDetail">Detail: ${weatherObj.weather[0].description}</P>
        </div>
        `
}