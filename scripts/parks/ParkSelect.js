import { getParks, useParks } from './ParkProvider.js'

const eventHub = document.querySelector('.contentContainer')
const contentTarget = document.querySelector('.contentContainer')

export const parkSelect = () => {
    getParks()
    .then(() => {
        const parks = useParks()
        render(parks)
    })
}

const render = (parksArray) => {
    contentTarget.innerHTML = 
}