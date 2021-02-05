import { Attracton } from "./Attraction.js"

const eventHub = document.querySelector('.mainContainer')
const contentTarget = document.querySelector('.attractionPreview')


// eventHub.addEventListener ("attractionsLoaded", changeEvent => {
//   if(changeEvent.detail.attractionsLoaded) {
//     const attractionId = changeEvent.detail.attractionId
//     // const targetElement = document.querySelector(".attractionPreview")
//     const attraction = useAttractions().find((attraction) => attraction.id === attractionId)
    
//     contentTarget.innerHTML = `${Attraction(attraction)}`
//   } 
// })

eventHub.addEventListener ("attractionsLoaded", changeEvent => {
  if(changeEvent.detail.attractionsLoaded) {
    const attractionId = changeEvent.detail.attractionId
    const targetElement = document.querySelector(".attractionPreview")
    const attraction = useAttractions().find((attraction) => attraction.id === attractionId)
    
    targetElement.innerHTML = `${Attraction(attraction)}`
  } 
})