import { useParks } from './ParkProvider.js'

const eventHub = document.querySelector('.mainContainer')

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


const previewPark = (park, targetHTML) => {
    let parkActivitiesString = ''
    
    for (const activity of park.activities) {
        parkActivitiesString +=`
        ${activity.name} `
    }
    
    targetHTML.innerHTML =`
    <div class="parkPreview__name">Park Selected ${park.fullName}</div>
    <div>State: ${park.states}</div>
    <div>Activities:
    ${parkActivitiesString}
    </div>
    <div>Entrance Fee:$${park.entranceFees[0].cost}</div>
    <img src="${park.images[0].url}" alt="${park.images[0].altText}">
    <div class="parkWeather">CALL PARK WEATHER FUNCTION HERE</div>
    `
}