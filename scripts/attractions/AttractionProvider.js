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
} // getAttractions

const _render = (attractionCollection) => {
 const targetElement = document.querySelector(".mainContainer")
 
 let attractions = attractionCollection.map((attraction) => {
   return `<option value=${attraction.id}>${attraction.name}</option>`    
  }).join("")

  targetElement.innerHTML += `
    <label for="attraction-select">Choose attraction:</label>
    <select name="attractions" id="attraction-select">
      <option value="0">--Please select an attractoin--</option>
      ${attractions}
    </select>
  `
} // _render

export const LoadAttractions = () => {
 getAttractions()
  .then(() => {
   const parsedAttractions = useAttractions()
   _render(parsedAttractions)
  })
} // LoadAttractions