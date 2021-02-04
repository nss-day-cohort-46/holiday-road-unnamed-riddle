/*
 Bizarrieres
*/

let _attractions = []

export const useAttractions = () => _attractions.slice()

export const getAttractions = () => {
 const url = "http://holidayroad.nss.team/bizarreries"
  return fetch(url)
  .then(response => response.json())
  .then(parsedAttractions => {
   _attractions = parsedAttractions
  })
}

const _render = (attractionCollection) => {
 const targetElement = document.querySelector(".mainContainer")
 const attractions = attractionCollection.map((attraction) => {
  return `
   <section class="attraction__section">
    <h2>Attractions</h2>
    <div>
     <p>${attraction.name}</p>
     <p>${attraction.city}, ${attraction.state}</p>
     <p>${attraction.description}</p>
    </div>
   </section>
  `
 }).join("")

 targetElement.innerHTML += `${attractions}`
} // _render

export const LoadAttractions = () => {
 getAttractions()
  .then(() => {
   const parsedAttractions = useAttractions()
   _render(parsedAttractions)
  })
}