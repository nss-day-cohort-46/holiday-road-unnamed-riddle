export const Eatery = (eateryObj) => {
    return `
    <div class="eatery">
        <p class="eateryName">${eateryObj.businessName}</p>
        <p class="eateryLocation">${eateryObj.city}, ${eateryObj.state}</p>
        <p class="eateryWifi">Has Wifi: ${eateryObj.ameneties.wifi}</p>
        <p class="eateryRestrooms">Has restroom: ${eateryObj.ameneties.restrooms}</p>
        <p class="eateryDescription">${eateryObj.description}</p>
    </div>
        `
}