import { getParks, useParks } from './ParkProvider.js'

const eventHub = document.querySelector('.mainContainer')
const contentTarget = document.querySelector('.mainContainer')

export const parkSelect = () => {
    getParks()
    .then(() => {
        const parks = useParks()
        render(parks)
    })
}

const render = (parksArray) => {
    contentTarget.innerHTML = `
    <select name="class="dropDown" id="parkSelect">
    <option value="0">Select a Park</option>
    ${parksArray.map(parkObject => `<option value="${parkObject.id}">${parkObject.fullName}</option>`)} 
</select>`
}
