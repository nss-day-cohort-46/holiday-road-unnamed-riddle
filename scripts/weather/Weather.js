export const Weather = (weatherObj) => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    return `
    <section class="weather">
        <div class="day">${months[new Date(weatherObj.dt * 1000).getMonth('en-US')]} ${new Date(weatherObj.dt * 1000).getDate('en-US')}
        <div><img class="wicon" src="http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png" alt=""</div>
        <div class="weatherDetail"> ${weatherObj.weather[0].description}</div>
        <div class="temp max">${weatherObj.temp.max}°F</div>
        <div class="temp min">${weatherObj.temp.min}°F</div>
        </div>
    </section>
        `
}