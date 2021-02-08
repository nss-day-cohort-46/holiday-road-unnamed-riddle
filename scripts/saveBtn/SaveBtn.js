/*
  Rendering Save button to .mainContainer causes parkSelector to not load.
  Possibly due to lag?

  const targetElement = document.querySelector(".mainContainer")
*/

const targetElement = document.querySelector(".forSaveBtn")
const eventHub = document.querySelector(".mainContainer")

export const Save = () => {
  /*
    @params - itineryObj - values are user selections
  */

 return `
  <button class="saveBtn" type="submit" style="background-color:red;text-align:center;" disable>Save</button>
 `
} // Save

targetElement.innerHTML += `${Save()}`


eventHub.addEventListener("change", changeEvent => {

 const _attractionsSelector = document.querySelector("#attraction-select")
 const _eateriesSelector = document.querySelector("#eateryDropdown")
 const _parksSelector = document.querySelector("#parkSelect")
 const saveBtn = document.querySelector(".saveBtn")

 // only allow save if all three selectors have chosen and revert if one is changed back to default
  if(_parksSelector.value !== "0" && _eateriesSelector.value !== "0" && _attractionsSelector.value !== "0") {
   const attractionName = _attractionsSelector.options[_attractionsSelector.selectedIndex].text
   const eateryName = _eateriesSelector.options[_eateriesSelector.selectedIndex].text
   const parkName = _parksSelector.options[_parksSelector.selectedIndex].text

    const itinery = {
      attractionName,
      eateryName,
      parkName
    }

  /*
    Only allow submission if all all selected.
  */
  eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()

    if (clickEvent.target.type === "submit") {
      const customEvent = new CustomEvent("saveClicked", {
        detail: {
          readyToSave: true,
          selections: itinery
        }
      }) // customEvent
      eventHub.dispatchEvent(customEvent)
    } // if
  }) // eventHub


  /*
    Move inline CSS to file.
  */
   saveBtn.innerHTML = `
    <button class="saveBtn" type="submit" style="background-color:green;text-align:center;" >Save</button>
   `

   } else {
    /*
      Disable save if user deselects one of the options.
    */
    saveBtn.innerHTML = `
    <button class="saveBtn" type="submit" style="background-color:red;text-align:center;" disable>Save</button>
    `
  }
}) // eventHub


/*
  Save to json
*/
eventHub.addEventListener("saveClicked", clickEvent => {

  /*
    json-server -p 8088 -w db.json
    http://localhost:8088/itineraries
  */

  if (clickEvent.detail.readyToSave) {

  return fetch("http://localhost:8088/itineraries", {
    method: "POST",
      headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clickEvent.detail.selections)
  }) // fetch
  } // if
}) // eventHub