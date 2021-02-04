let eateries = []

export const useEateries = () => eateries.slice()

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(
        parsedEateries => {
            // console.log(parsedEateries)
            eateries = parsedEateries
        })
}