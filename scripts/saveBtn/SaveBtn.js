/*
  Rendering Save button to .mainContainer causes parkSelector to not load.
  Possibly due to lag?

  const targetElement = document.querySelector(".mainContainer")
*/

const targetElement = document.querySelector(".forSaveBtn")
const eventHub = document.querySelector(".mainContainer")

export const Save = () => {
  return `<button id="saveBtn" class="saveBtn--disabled" type="submit" disabled>Save</button>`
}

targetElement.innerHTML += `${Save()}`

eventHub.addEventListener("change", changeEvent => {
  /*
    Save button disbled by default.
    Enable save if all 3 selections are made.
    Save button turns green when enable to save.
  */
  const attractionsSelector = document.querySelector("#attractionSelect")
  const eateriesSelector = document.querySelector("#eateryDropdown")
  const parksSelector = document.querySelector("#parkSelect")
  const saveBtn = document.querySelector("#saveBtn")

  if(parksSelector.value !== "0" && eateriesSelector.value !== "0" && attractionsSelector.value !== "0") {
    saveBtn.disabled = false
    const buttonEnableEvent = new CustomEvent("saveBtnEnabled", {
      detail: {
        saveBtnEnabled: true
      }
    }) // customEvent - saveBtnEnabled
    eventHub.dispatchEvent(buttonEnableEvent)
    saveBtn.classList.add("saveBtn--enabled")
  } else {
    targetElement.innerHTML = `${Save()}`
  }
}) // eventHub - changeEvent


eventHub.addEventListener("click", clickEvent => {
  /*
    Only save if there are selections and save button enabled.
    Button turns blue after saving.
  */
 const saveBtn = document.querySelector("#saveBtn")

 if(clickEvent.target.id === "saveBtn" && !saveBtn.disabled) {
  const attractionsSelector = document.querySelector("#attractionSelect")
  const eateriesSelector = document.querySelector("#eateryDropdown")
  const parksSelector = document.querySelector("#parkSelect")
  const attractionName = attractionsSelector.options[attractionsSelector.selectedIndex].text
  const eateryName = eateriesSelector.options[eateriesSelector.selectedIndex].text
  const parkName = parksSelector.options[parksSelector.selectedIndex].text

  const itinery = {
    attractionName,
    eateryName,
    parkName
  }

  const saveItineryEvent = new CustomEvent("clickSaveBtn", {
    detail: {
      readyToSave: true,
      itinery: itinery
    }
  })
  eventHub.dispatchEvent(saveItineryEvent)
  saveBtn.classList.add("saveBtn--saved")
 } // if
}) // eventHub - clickEvent


eventHub.addEventListener("clickSaveBtn", clickEvent => {
  /*
    json-server -p 8088 -w db.json
    http://localhost:8088/itineraries
  */
  const saveBtn = document.querySelector("#saveBtn")

  if (clickEvent.detail.readyToSave) {
    /*
      TODO: SAVE BUTTON SHOULD CHANGE BACK TO GREEN IF 
        1. Current selections saved.
        2. User picks a new option from one of the dropdowns.
        3. There are still 3 selections active. 
    */
    saveBtn.classList.add("saveBtn--enabled")

    return fetch("http://localhost:8088/itineraries", {
      method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(clickEvent.detail.itinery)
    }) // fetch
  } // if
}) // eventHub
