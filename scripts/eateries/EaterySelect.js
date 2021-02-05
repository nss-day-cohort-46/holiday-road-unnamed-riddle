import { getEateries, useEateries } from './EateryProvider.js'

const eventHub = document.querySelector(".mainContainer")
// const contentTarget = document.querySelector(".eaterySelect")

// Renders eatery dropdown to DOM 
const render = eateryCollection => {
    // debugger
    const contentTarget = document.querySelector(".eaterySelect")
      let eats =  eateryCollection.map(eatery => { 
          return `<option value="${eatery.id}">${eatery.businessName}</option>`
        }).join("")
    // console.log(eats)
    contentTarget.innerHTML = `
        <label for="eaterySelect">Eateries</label>
        <select class="dropdown" id="eateryDropdown">
            <option value="0">Please select an eatery...</option>
            ${eats}
        </select>
    `
}

export const EateriesSelect = () => {
    getEateries()
    .then( () => {
      const eateries = useEateries()
      render(eateries)
    })
}






// Listening for eatery to be selected
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "eateryDropdown") {
        const selectedEatery = changeEvent.target.value
        const customEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryChosen: true,
                eateryThatWasChosen: parseInt(selectedEatery)
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

