/*
  Rendering Save button to .mainContainer causes parkSelector to not load.
  Possibly due to lag?

  const targetElement = document.querySelector(".mainContainer")
*/

const targetElement = document.querySelector(".previewSaveButton")
const eventHub = document.querySelector(".mainContainer")

export const Save = () => {
  return `<button id="saveBtn" class="saveBtn--disabled" type="submit" disabled>Save</button>`
}

targetElement.innerHTML += `${Save()}`

eventHub.addEventListener("change", changeEvent => {
  /*
    Save button disbled by default.
    Enable save if all 3 selections are made.
    Save button turns green when enable to save, else remains red.
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

    saveBtn.classList.remove("saveBtn--disabled")
    saveBtn.classList.remove("saveBtn--saved")
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
    parkName,
    eateryName,
    attractionName
  }

  const saveItineryEvent = new CustomEvent("clickSaveBtn", {
    detail: {
      readyToSave: true,
      itinery: itinery
    }
  })
  eventHub.dispatchEvent(saveItineryEvent)
 } // if
}) // eventHub - clickEvent


eventHub.addEventListener("clickSaveBtn", clickEvent => {
  /*
    json-server -p 8088 -w db.json
    http://localhost:8088/itineraries
  */
  const saveBtn = document.querySelector("#saveBtn")

  if (clickEvent.detail.readyToSave) {

    saveBtn.classList.remove("saveBtn--disabled")
    saveBtn.classList.remove("saveBtn--enabled")
    saveBtn.classList.add("saveBtn--saved")

    return fetch("http://localhost:8088/itineraries", {
      method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(clickEvent.detail.itinery)
    }) // fetch
  } // if
}) // eventHub
