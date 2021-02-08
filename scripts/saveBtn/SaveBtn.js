const targetElement = document.querySelector(".forSaveBtn")
const eventHub = document.querySelector(".mainContainer")
/*
 Rendering Save button to .mainContainer causes parkSelector to not load.
 Possibly due to lag?
*/
// const targetElement = document.querySelector(".mainContainer")

export const Save = () => {

 return `
  <button class="saveBtn" type="submit" style="background-color:red;text-align:center;" disable>Save</button>
 `
}

targetElement.innerHTML += `${Save()}`


eventHub.addEventListener("change", changeEvent => {



 const _attractionsSelector = document.querySelector("#attraction-select")
 const _eateriesSelector = document.querySelector("#eateryDropdown")
 const _parksSelector = document.querySelector("#parkSelect")
 const saveBtn = document.querySelector(".saveBtn")


 // only allow save if all three selectors have chosen and revert if one is changed back to default
  if(_parksSelector.value !== "0" && _eateriesSelector.value !== "0" && _attractionsSelector.value !== "0") {
   const attractionName = _attractionsSelector.options[_attractionsSelector.selectedIndex].innerHTML
   const eateryName = _eateriesSelector.options[_eateriesSelector.selectedIndex].innerHTML
   const parkName = _parksSelector.options[_parksSelector.selectedIndex].innerHTML // [_parksSelector.value].innerHTML

   saveBtn.innerHTML = `
    <button class="saveBtn" type="submit" style="background-color:green;text-align:center;" >Save</button>
   `

   } else {
    saveBtn.innerHTML = `
    <button class="saveBtn" type="submit" style="background-color:red;text-align:center;" disable>Save</button>
    `
  }

})



// import { Attraction } from "./Attraction.js"
// /*
//  Bizarrieres
// */

// let _attractions = []
// const _url = "http://holidayroad.nss.team/bizarreries"
// const eventHub = document.querySelector(".mainContainer")


// export const useAttractions = () => _attractions.slice()


// export const getAttractions = () => {
//   return fetch(_url)
//   .then(response => response.json())
//   .then(parsedAttractions => {
//    _attractions = parsedAttractions
//   })
// } // getAttractions


// export const LoadAttractions = () => {
//  getAttractions()
//   .then(() => { 
//    const parsedAttractions = useAttractions()
//    _render(parsedAttractions)
//   })
// } // LoadAttractions


// const _render = (attractionCollection) => {
//   const targetElement = document.querySelector(".attractionSelect")
//   let attractions = attractionCollection.map((attraction) => `<option value=${attraction.id}>${attraction.name}</option>`).join("")

//   targetElement.innerHTML += `
//     <label for="attraction-select">Bizzararies:</label>
//     <select name="attractions" id="attraction-select" class="selectAttraction">
//       <option value="0" >Select an attraction</option>
//       ${attractions}
//     </select>
//     <div class="attractionPreview"></div>
//   `
// } // _render


//   eventHub.addEventListener("change", changeEvent => {

//     if(changeEvent.target.value !== "0" && changeEvent.target.id === "attraction-select") {
//       const customEvent = new CustomEvent("attractionsLoaded", {
//         detail: {
//           attractionsLoaded: true,
//           attractionId: parseInt(changeEvent.target.value)
//         }
//       })

//       eventHub.dispatchEvent(customEvent)

//     } // if

//     if(changeEvent.target.value === "0" && changeEvent.target.id === "attraction-select") {
//       const customEvent = new CustomEvent("attractionsLoaded", {
//         detail: {
//           attractionsLoaded: false,
//           attractionId: parseInt(changeEvent.target.value)
//         }
//       })
//       eventHub.dispatchEvent(customEvent)
//     } // if
//   }) // _eventHub


// // eventHub.addEventListener ("attractionsLoaded", changeEvent => {

// //   const targetElement = document.querySelector(".attractionPreview")

// //   if(changeEvent.detail.attractionsLoaded) {
// //     const attractionId = changeEvent.detail.attractionId
// //     const attraction = useAttractions().find((attraction) => attraction.id === attractionId)
// //     targetElement.innerHTML = `${Attraction(attraction)}`
// //   } else {
// //     targetElement.innerHTML = ``
// //   }
// // }) // eventHub


// // index.html

// //         <div class="submitBtn">
// //             <button type="submit" style="background-color:red;text-align:center;" disable>Submit</button>
// //         </div>
        

// // Itinery.js

// // const submitElement = document.querySelector(".submitBtn")

// // eventHub.addEventListener("change", changeEvent => {

// //  const _attractionsSelector = document.querySelector("#attraction-select")
// //  const _eateriesSelector = document.querySelector("#eateryDropdown")
// //  const _parksSelector = document.querySelector("#parkSelect")

// //   if(_parksSelector.value !== "0" && _eateriesSelector.value !== "0" && _attractionsSelector.value !== "0") {
// //     const attractionName = _attractionsSelector.options[_attractionsSelector.selectedIndex].innerHTML
// //     const eateryName = _eateriesSelector.options[_eateriesSelector.selectedIndex].innerHTML
// //     const parkName = _parksSelector.options[_parksSelector.selectedIndex].innerHTML // [_parksSelector.value].innerHTML

// //   targetElement.innerHTML = `
// //     <li>${parkName}</li>
// //     <li>${eateryName}</li>
// //     <li>${attractionName}</li>
// //   `

// //  submitElement.innerHTML = `
// //     <button type="submit" style="background-color:green;text-align:center;">Submit</button>
// //  `

// //   } else {
// //   targetElement.innerHTML = ``
// //   submitElement.innerHTML = `
// //     <button type="submit" style="background-color:red;text-align:center;" disable>Submit</button>
// //   `
// //   }
// // })
