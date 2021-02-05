export const Attraction = (attraction) => {
 return `
 <section id=${attraction.id}>
  <h3>Attraction<h3>
  <div>
   <p>${attraction.name}</p>
  </div>
 </section>
 `
}
  // <h2>${attraction.name}<h2>
  // <div>
  //  <p>${attraction.city}, ${attraction.state}</p>
  //  <p>${attraction.description}</p>
  // </div>