const eventHub = document.querySelector('.mainContainer')

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "attraction__button") {

        const buttonText = clickEvent.target
        const attractionDetail = document.querySelector("#attractionDetail")

        attractionDetail.classList.toggle("hidden")
        buttonText.innerHTML = buttonText.innerHTML === "Hide" ? "Details" : "Hide"
    }
})

export const Attraction = (attraction) => {
 return `
 <section id=${attraction.id}>
  <h3>Attraction</h3>
  <div>
   <p>${attraction.name}</p>
   <div id="attractionDetail" class="hidden showAttractionDetail">
    <p>${attraction.city}, ${attraction.state}</p>
    <p>${attraction.description}</p>
   </div>
   <button id="attraction__button">Details</button>
  </div>
 </section>
 `
} // Attraction
