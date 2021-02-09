export const ItineraryHTMLConverter = (itineraryObject) => {
    return `
        <section class="itinerary">
        <div class="parkName">Visit:   ${itineraryObject.parkName}</div>
        <div class="eateryName">Dine:   ${itineraryObject.eateryName}</div>
        <div class="attractionName">Gawk:   ${itineraryObject.attractionName}</div>
        </section>
        `
}