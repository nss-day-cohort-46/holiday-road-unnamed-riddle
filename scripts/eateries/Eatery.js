export const Eatery = (eateryObj) => {
     `
    <div class=eateryPreview_Name>Eatery Selected: ${eateryObj.businessName}</div>
    <button id ="eateryDetailsButton">Details</button>
    <div id="eateryDetail" class="hidden">
      <p class="eateryLocation">${eateryObj.city}, ${eateryObj.state}</p>
      <p class="eateryWifi">Has Wifi: ${eateryObj.ameneties.wifi}</p>
      <p class="eateryRestrooms">Has restroom: ${eateryObj.ameneties.restrooms}</p>
      <p class="eateryDescription">${eateryObj.description}</p>
    </div>
        `
}


