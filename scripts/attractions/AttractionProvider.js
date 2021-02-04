import { Attraction } from "./Attraction.js"
/*
 Bizarrieres
*/

let _attractions = []
const _url = "http://holidayroad.nss.team/bizarreries"
const eventHub = document.querySelector(".mainContainer")


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
 const targetElement = document.querySelector(".attractionSelect")
 
 let attractions = attractionCollection.map((attraction) => `<option value=${attraction.id}>${attraction.name}</option>`).join("")

  targetElement.innerHTML += `
    <label for="attraction-select">Choose attraction:</label>
    <select name="attractions" id="attraction-select" class="selectAttraction">
      <option value="0" class="test">--Please select an attractoin--</option>
      ${attractions}
    </select>
    <div class="attractionPreview"></div>
  `

  // only fire after options loaded
  eventHub.addEventListener("change", changeEvent => {
    
    // selecting by target.id results
    if(changeEvent.target.value !== "0") { //"attraction-select") {
      const customEvent = new CustomEvent("attractionsLoaded", {
        detail: {
          attractionsLoaded: true,
          attractionId: parseInt(changeEvent.target.value)
        }
      })
      eventHub.dispatchEvent(customEvent)
    } // if
  }) // eventHub
} // _render


eventHub.addEventListener ("attractionsLoaded", changeEvent => {
  if(changeEvent.detail.attractionsLoaded) {
    const attractionId = changeEvent.detail.attractionId
    const targetElement = document.querySelector(".attractionPreview")
    const attraction = useAttractions().find((attraction) => attraction.id === attractionId)
    
    targetElement.innerHTML = `${Attraction(attraction)}`
  } 
})