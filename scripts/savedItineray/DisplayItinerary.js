import { ItineraryHTMLConverter } from "./ItineraryApiConverter.js"

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".mainContainer")

let itineraries = []

const getItineraries = () => {
    return fetch('http://localhost:8088/itineraries')
    .then(response => response.json())
    .then(parseditineraries => {
        itineraries = parseditineraries
        // console.log(itineraries)
    })
    
}

const useItineraries = () => itineraries.slice()

eventHub.addEventListener("saveClicked", customEvent => {
    // debugger
    ItineraryList()
})

const render = (itineraryArray) => {
    const itinerariesConvertedToStrings = itineraryArray.map( itineraryObject => ItineraryHTMLConverter(itineraryObject)).join("")
        // debugger
    
        // convert the iteneraries objects to HTML with NoteHTMLConverter

    

    contentTarget.innerHTML = `
    <h3>Saved Iteneraries</h3>
    <section class="itenerariesList">
    ${itinerariesConvertedToStrings}
    </section>`
}

export const ItineraryList = () => {
    getItineraries()
        .then(() => {
            const allItineraries = useItineraries()
            render(allItineraries)
            return allItineraries
        })
}