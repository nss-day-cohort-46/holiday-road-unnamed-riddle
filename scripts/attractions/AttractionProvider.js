import "./AttractionSelect.js"
import "./AttractionPreview.js"

let _attractions = []
const _url = "http://holidayroad.nss.team/bizarreries"
const eventHub = document.querySelector(".mainContainer")

/*
  No need to have useAttractions function as data is only
  fetched once and passed through custom event objects.
*/
export const getAttractions = () => {
  return fetch(_url)
    .then(response => response.json())
    .then(parsedAttractions => {
      const loadEvent = new CustomEvent("attractionsLoaded", {
        detail: {
          attractionsObjsList: parsedAttractions
        }
      }) // customEvent
      eventHub.dispatchEvent(loadEvent)
    }) // then - parsedAttractions
} // getAttractions

/*
  Automatically call on import of file.
*/
getAttractions()
