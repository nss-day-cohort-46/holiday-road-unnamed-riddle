import { getParks, useParks } from './ParkProvider.js'

const eventHub = document.querySelector('.mainContainer')
const contentTarget = document.querySelector('.parkSelect')

export const parkSelect = () => {
    getParks()
    .then(() => {
        const parks = useParks()
        render(parks)
    })
}

const render = (parksArray) => {
    contentTarget.innerHTML = `
    <label for="parkSelect">National Parks</label>
    <select name="parkSelect" class="dropDown" id="parkSelect">
    <option value="0">Select a Park...</option>
    ${parksArray.map(parkObject => `<option value="${parkObject.id}">${parkObject.fullName}</option>`)} 
    </select>
    <div class="parkPreview"></div>`
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "parkSelect") {
        const selection = changeEvent.target
        const parkSelected = new CustomEvent("parkSelected", {
            detail: { 
                chosenParkId: selection.value,
                chosenParkName: selection.options[selection.selectedIndex].text
            }
        })   
        eventHub.dispatchEvent(parkSelected)
    }
})

