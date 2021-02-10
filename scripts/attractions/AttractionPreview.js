import { Attraction } from "./Attraction.js"

const eventHub = document.querySelector(".mainContainer")

eventHub.addEventListener("attractionSelectionEvent", selectEvent => {
 /*
  Only add detail card if selection is not 0 - default value.
 */
 const targetEvent = document.querySelector(".attractionPreview")
 const attraction = selectEvent.detail.attractionObj
 const isNotDefaultSelection = selectEvent.detail.isNotDefault
 
 targetEvent.innerHTML = isNotDefaultSelection ? `${Attraction(attraction)}` : ``

}) // eventHub - attractionSelectionEvent
