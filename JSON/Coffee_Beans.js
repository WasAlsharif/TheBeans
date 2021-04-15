const coffeebeans = [
  {
    photo: "Beans/beans1.png",
    description: "Lavazza Tierra Coffee beans",
    price: "161 SAR"
  },
  {
    photo: "Beans/beans2.png",
    description: "Profiling Roastery Burundi Agahore 250g",
    price: "70 SAR"
  },
  {
    photo: "Beans/beans3.png",
    description: "Robica Coffee Bundle",
    price: "186 SAR"
  }
];
function item(items) {
  return `
  <div class="column2"> 
   <img src="${items.photo}" width="250px">  
   <h3>(${items.description})</h3>
   <p>(${items.price})</p>
  </div>
  `
}

document.getElementById("Coffeebeans").innerHTML = `
${coffeebeans.map(item).join("")}
`;