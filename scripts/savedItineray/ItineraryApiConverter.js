export const ItineraryHTMLConverter = (itineraryObject) => {
    return `
        <section class="itineraryList">
        <div class="parkName">${itineraryObject.parkName}</div>
        <div class="eateryName">${itineraryObject.eateryName}</div>
        <div class="attractionName">${itineraryObject.attractionName}</div>
        </section>
        `
}