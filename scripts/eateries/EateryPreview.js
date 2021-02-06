import { getEateries, useEateries } from "./EateryProvider.js"
import { Eatery } from './Eatery.js'


const eventHub = document.querySelector('.mainContainer')
const contentTarget = document.querySelector('.eateryPreview')

// export const EateryPreview = () => {
//     getEateries()
//       .then(() => {
//         const eatery = useEateries()
//         renderPreview(eatery)
        
//       })
// }
       
const renderPreview = eateryObj => {
  // let eateryHTML = ""
  // for (const eatery in eateryObj) {
  //         eateryHTML += Eatery(eatery)
  //         }
        contentTarget.innerHTML = 
        `
        <h3 class=eateryPreview_Name>Eatery Selected: ${eateryObj.businessName}</h3>
        <div id="eateryDetail" class="hidden">
          
          <h4 class="eateryLocation">${eateryObj.city}, ${eateryObj.state}</h4>
          <h4 class="eateryWifi">Has Wifi: ${eateryObj.ameneties.wifi}</h4>
          <h4 class="eateryRestrooms">Has restroom: ${eateryObj.ameneties.restrooms}</h4>
          <p class="eateryDescription">${eateryObj.description}</p>
        </div>
        <button id ="eateryDetailsButton">Details</button>
            `
          
}
  
// Listening for eatery to be selected 
eventHub.addEventListener("eateryChosen", event => {
    // const contentTarget = document.querySelector('.eateryPreview')
    if (event.detail.eateryThatWasChosen !== "0") {
        const eateries = useEateries()
        const eateryId = event.detail.eateryThatWasChosen
        const selectedEatery = eateries.find((eateryObj) => eateryObj.id === eateryId)

       renderPreview(selectedEatery)
    }
})

// Listening for eateryDetails button to be clicked
eventHub.addEventListener("click", event => {
  if (event.target.id === "eateryDetailsButton"){
    const buttonText = event.target
    const eateryDetail = document.querySelector("#eateryDetail")
    eateryDetail.classList.toggle("showEateryDetail")

    if(buttonText.innerHTML === "Details"){
      buttonText.innerHTML = "Hide Details"
    } else {
      buttonText.innerHTML = "Details"
    }
}
})