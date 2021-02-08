const eventHub = document.querySelector('.mainContainer')

export const Attraction = (attraction) => {
 return `
 <section id=${attraction.id}>
  <h3>Attraction</h3>
  <div>
   <p>${attraction.name}</p>
   <div id="attractionDetail" class="hidden showAttractionDetail">
    <p>${attraction.city}, ${attraction.state}</p>
    <p>${attraction.description}</p>
    <p>Restrooms: &#128701 - ${attraction.ameneties.restrooms ? "&#128516" : "&#128577" }</p>
    <p>Souvenirs: &#128717 - ${attraction.ameneties.souvenirs ? "&#128516" : "&#128577" }</p>
   </div>
   <button id="attraction__button">Details</button>
  </div>
 </section>
 `
} // Attraction


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "attraction__button") {

        const buttonText = clickEvent.target
        const attractionDetail = document.querySelector("#attractionDetail")

        attractionDetail.classList.toggle("hidden")
        buttonText.innerHTML = buttonText.innerHTML === "Hide" ? "Details" : "Hide"
    }
})