const items = [
  {
    photo: "sandwiches/sand1.png",
    description: "Cauliflower Pie",
    price: "26 SAR"
  },
  {
    photo: "sandwiches/sand2.png",
    description: "Falafel Pie",
    price: "19 SAR"
  },
  {
    photo: "sandwiches/sand3.png",
    description: "Halloumi Pie",
    price: "22 SAR"
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

document.getElementById("Sandwitches").innerHTML = `
${items.map(item).join("")}
`;