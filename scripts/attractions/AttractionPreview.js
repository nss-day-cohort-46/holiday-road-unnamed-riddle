// import { Attraction } from "./Attraction.js"

// const eventHub = document.querySelector('.mainContainer')
// const targetElement = document.querySelector('.attractionPreview')

// eventHub.addEventListener ("attractionsLoaded", changeEvent => {
//   console.log('in evenhubt')
//   if(changeEvent.detail.attractionsLoaded) {
//     console.log("in attracions loaded")
//     // const targetElement = document.querySelector(".attractionPreview")
//     const attractionId = changeEvent.detail.attractionId
//     const attraction = useAttractions().find((attraction) => attraction.id === attractionId)

//     targetElement.innerHTML = !attractionId ? `` : `${Attraction(attraction)}`
//   } 
// })
// eventHub.addEventListener ("attractionsLoaded", changeEvent => {
//   if(changeEvent.detail.attractionsLoaded) {
//     const attractionId = changeEvent.detail.attractionId
//     // const targetElement = document.querySelector(".attractionPreview")
//     const attraction = useAttractions().find((attraction) => attraction.id === attractionId)
    
//     contentTarget.innerHTML = `${Attraction(attraction)}`
//   } 
// })

// eventHub.addEventListener ("attractionsLoaded", changeEvent => {
//   if(changeEvent.detail.attractionsLoaded) {
//     const attractionId = changeEvent.detail.attractionId
//     const targetElement = document.querySelector(".attractionPreview")
//     const attraction = useAttractions().find((attraction) => attraction.id === attractionId)
    
//     targetElement.innerHTML = `${Attraction(attraction)}`
//   } 
// })
