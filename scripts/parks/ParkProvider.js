import { settings } from '../Settings.js'

let parks = []


export const useParks = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}&limit=500&start=0`)
    .then(response => response.json())
    .then(
        parsedParks => {
            parks = parsedParks.data
        }
    )
}