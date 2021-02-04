import { useParks } from './ParkProvider.js'
import { WeatherList } from '../weather/WeatherList.js'

const eventHub = document.querySelector('.mainContainer')

//listens for a park selection, then finds the correct park 
// and runs additional functions to render park info in preview section
eventHub.addEventListener("parkSelected", parkPreviewEvent => {
    const previewTarget = document.querySelector('.parkPreview')
    if (parkPreviewEvent.detail.chosenPark !== "0") {
        const parksArray = useParks()
        const parkID = parkPreviewEvent.detail.chosenPark
        const selectedPark = parksArray.find(parkObject => {
            return parkObject.id === parkID
        })

        previewPark(selectedPark, previewTarget)
    }
})

// previewPark generates html for the preview card
const previewPark = (park, targetHTML) => {
    let parkActivitiesString = ''
    
    // iterate of array of park activities and generate html to append to dom
    for (const activity of park.activities) {
        parkActivitiesString +=`
        ${activity.name} `
    }
    
    // add html to dom for the preview card
    targetHTML.innerHTML =`
    <div class="parkPreview__name">Park Selected ${park.fullName}</div>
    <div>State: ${park.states}</div>
    <div>Activities:
    ${parkActivitiesString}
    </div>
    <div>Entrance Fee:$${park.entranceFees[0].cost}</div>
    <div class="parkWeather"></div>
    
    <img src="${park.images[0].url}" alt="${park.images[0].altText}" title="${park.images[0].caption}" class="parkPreview__image">
    `
    // invoke WeatherList with the park object to render the weather data to the preview card
    WeatherList(park)
}