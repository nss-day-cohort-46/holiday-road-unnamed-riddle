export const parkHTML = (park, targetHTML) => {
    let parkActivitiesHTMLString = ''
    let parkEntranceFeeHTMLString = ''

    // iterate of array of park activities and generate html to append to dom
    if (park.activities.length === 0) {
        parkActivitiesHTMLString = "No Activites Available"
    } else {
        for (const activity of park.activities) {
            parkActivitiesHTMLString += `
            <li class="park__activity">${activity.name}</li>`
        }
    }

    if (park.entranceFees.length === 0) {
        parkEntranceFeeHTMLString = "0.00"
    } else {
        parkEntranceFeeHTMLString = `${park.entranceFees[0].cost}`
    }

    // add html to dom for the preview card
    targetHTML.innerHTML = `
    <h3>Park Selected:</h3>
    <div class="parkPreview__name">${park.fullName}</div>
    <div class="parkWeather"></div>
    
    <div id="parkDetail" class="hidden">
        <div class="park__info">
            <div class="park__state"><b>State: </b>${park.states}</div>
            <div class="park__fee"><b>Entrance Fee: </b>$${parkEntranceFeeHTMLString}</div>
            <div class="activityTitle"><b>Activities: </b></div>
            <div class="park__activitiesContainer">
                <ul class="park_activitiesList">${parkActivitiesHTMLString}</ul>
            </div>
        </div>
        <div class="park__imageContainer">
            <img src="${park.images[0].url}" alt="${park.images[0].altText}" class="park__image">
            <div class="park__imageDescription"><b>Photo description: </b>${park.images[0].caption}</div>
        </div>

        
    </div>
    <button id="parkDetail__Button">Park Details</button>
    `
}