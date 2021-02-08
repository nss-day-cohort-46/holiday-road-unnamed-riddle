import { useParks } from './ParkProvider.js'
import { WeatherList } from '../weather/WeatherList.js'
import { parkHTML } from './Park.js'

const eventHub = document.querySelector('.mainContainer')

//listens for a park selection, then finds the correct park 
// and runs additional functions to render park info in preview section
eventHub.addEventListener("parkSelected", parkPreviewEvent => {
    const previewTarget = document.querySelector('.parkPreview')
    if (parkPreviewEvent.detail.chosenPark !== "0") {
        const parksArray = useParks()
        const parkID = parkPreviewEvent.detail.chosenParkId
        const selectedPark = parksArray.find(parkObject => {
            return parkObject.id === parkID
        })
        previewPark(selectedPark, previewTarget)
    }
})

// previewPark generates html for the selected park and gets weather for that park
const previewPark = (park, targetHTML) => {
    parkHTML(park, targetHTML)
    WeatherList(park)
}

// event listner for displaying park details
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "parkDetail__Button") {
        const buttonText = clickEvent.target
        const parkDetailSection = document.querySelector("#parkDetail")
        parkDetailSection.classList.toggle("parkDetail")

        if (buttonText.innerHTML === "Park Details") {
            buttonText.innerHTML = "Hide Details"
        } else {
            buttonText.innerHTML = "Park Details"
        }
    }
})