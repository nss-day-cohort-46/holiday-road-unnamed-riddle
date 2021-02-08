const targetElement = document.querySelector(".forSaveBtn")

export const Save = () => {


 return `
  <button class="saveBtn">Save</button>
 `
}

targetElement.innerHTML += `${Save()}`