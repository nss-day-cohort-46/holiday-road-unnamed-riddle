const eventHub = document.querySelector(".mainContainer")
let attractionsObjsList = []

/*
After recieving attractions, populate and load select element only once.
*/
eventHub.addEventListener("attractionsLoaded", loadEvent => {

 const targetElement = document.querySelector(".attractionSelect")
 attractionsObjsList = loadEvent.detail.attractionsObjsList
 const attractions = attractionsObjsList.map((attraction) => `<option value=${attraction.id}>${attraction.name}</option>`).join("")

 targetElement.innerHTML += `
  <label for="attractionSelect">Bizzararies:</label>
  <select name="attractions" id="attractionSelect" class="selectAttraction dropdown">
  <option value="0" class="test">Select an attraction</option>
   ${attractions}
  </select>
 `

 const selectorLoadedEvent = new CustomEvent("selectorLoaded", {
  detail: {
     attractionsObjsList: attractionsObjsList
   }
  }) // customEvent
  eventHub.dispatchEvent(selectorLoadedEvent)
}) // eventHub - attractionsLoaded


eventHub.addEventListener("change", changeEvent => {

 if(changeEvent.target.id === "attractionSelect") {
  const userSelection = parseInt(changeEvent.target.value);
  const attraction = attractionsObjsList.find((attraction) => attraction.id === userSelection)

  const attractionSelectionEvent = new CustomEvent("attractionSelectionEvent", {
   detail: {
    isNotDefault: userSelection,
    attractionObj: attraction
   }
  }) // CustomEvent - attractionSelectionEvent
  eventHub.dispatchEvent(attractionSelectionEvent)
 } // if
}) // eventHub - change
