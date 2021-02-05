import { Attracton } from "./Attraction.js"

import { getEateries, useEateries } from "./EateryProvider.js"
import { Eatery } from './Eatery.js'


const eventHub = document.querySelector('.mainContainer')
const contentTarget = document.querySelector('.attractionPreview')


eventHub.addEventListener ("attractionsLoaded", changeEvent => {
  if(changeEvent.detail.attractionsLoaded) {
    const attractionId = changeEvent.detail.attractionId
    // const targetElement = document.querySelector(".attractionPreview")
    const attraction = useAttractions().find((attraction) => attraction.id === attractionId)
    
    targetElement.innerHTML = `${Attraction(attraction)}`
  } 
})