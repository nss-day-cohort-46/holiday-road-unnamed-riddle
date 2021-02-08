import { Attraction } from "./Attraction.js"

let _attractions = []
const _url = "http://holidayroad.nss.team/bizarreries"
const eventHub = document.querySelector(".mainContainer")
const targetElement = document.querySelector(".attractionSelect")


export const useAttractions = () => _attractions.slice()


export const getAttractions = () => {
  return fetch(_url)
  .then(response => response.json())
  .then(parsedAttractions => {
   _attractions = parsedAttractions
  })
} // getAttractions


export const LoadAttractions = () => {
 getAttractions()
  .then(() => { 
   const parsedAttractions = useAttractions()
   _render(parsedAttractions)
  })
} // LoadAttractions


const _render = (attractionCollection) => {
 
 let attractions = attractionCollection.map((attraction) => `<option value=${attraction.id}>${attraction.name}</option>`).join("")

  targetElement.innerHTML += `
    <label for="attractionSelect">Bizzararies:</label>
    <select name="attractions" id="attractionSelect" class="selectAttraction">
      <option value="0" class="test">Please select an attraction</option>
      ${attractions}
    </select>
    `
} // _render


eventHub.addEventListener("change", changeEvent => {

  if(changeEvent.target.id === "attractionSelect") {
    const customEvent = new CustomEvent("attractionsLoaded", {
      detail: {
        attractionsLoaded: true,
        attractionId: parseInt(changeEvent.target.value)
      }
    })
    eventHub.dispatchEvent(customEvent)
  } // if

}) // eventHub


eventHub.addEventListener ("attractionsLoaded", changeEvent => {
  if(changeEvent.detail.attractionsLoaded) {
  
    const targetElement = document.querySelector(".attractionPreview")
    const attractionId = changeEvent.detail.attractionId
    const attraction = useAttractions().find((attraction) => attraction.id === attractionId)

    // remove attraction if user selects 'Please select an attraction'
    targetElement.innerHTML = !attractionId ? `` : `${Attraction(attraction)}`
  } 
})