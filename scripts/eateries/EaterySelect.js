import { getEateries, useEateries } from './EateryProvider.js'

const eventHub = document.querySelector(".mainContainer")
const contentTarget = document.querySelector(".eaterySelect")

export const EateriesSelect = () => {
    getEateries()
    .then( () => {
      const eateries = useEateries()
      render(eateries)
    })
}

// Renders eatery dropdown to DOM 
const render = eateryCollection => {
    debugger
    contentTarget.innerHTML = `
        <select class="dropdown" id="eateryDropdown">
            <option value="0">Please select an eatery...</option>
            ${
                eateryCollection.map(eatery => {
                    return `<option value="${eatery.id}">${eatery.businessName}</option>`
                })
            }
        </select>
    `
}


// Listening for eatery to be selected
// eventHub.addEventListener("change", event => {
//     if (event.target.id === "eateries") {
//         const customEvent = new CustomEvent("eateryChosen", {
//             detail: {
//                 eateryThatWasChosen: event.target.value
//             }
//         })

//         // Dispatch to event hub
//         eventHub.dispatchEvent(customEvent)
//     }
// })
