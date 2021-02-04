export const Attraction = (attraction) => {
 return `
 <section id=${attraction.id}>
  <h2>${attraction.name}<h2>
  <div>
   <p>${attraction.city}, ${attraction.state}</p>
   <p>${attraction.description}</p>
  </div>
 </section>
 `
}
