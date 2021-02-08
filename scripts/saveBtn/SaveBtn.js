const targetElement = document.querySelector(".forSaveBtn")
const eventHub = document.querySelector(".mainContainer")

/*
 Rendering Save button to .mainContainer causes parkSelector to not load.
 Possibly due to lag?
*/
// const targetElement = document.querySelector(".mainContainer")

export const Save = () => {


 return `
  <button class="saveBtn">Save</button>
 `
}

targetElement.innerHTML += `${Save()}`

// eventHub.addEventListener("parkSelected", changeEvent => {
//  console.log("park selected")
//  console.log(changeEvent.detail.chosenParkName)
//  // when you have all three values
//  // save
// })

eventHub.addEventListener("change", changeEvent => {
 const parkSelector = document.querySelector("#parkSelect")
 const park = parkSelector.options[parkSelector.selectedIndex].text

 const eaterySelector = document.querySelector("#eateryDropdown")
 const eatery = eaterySelector.options[eaterySelector.selectedIndex].text

 const attractionSelector = document.querySelector("#attraction-select")
 const attraction = attractionSelector.options[attractionSelector.selectedIndex].text

 console.log("secltor")
 console.log(changeEvent.target.)

 // console.log(parks)
})