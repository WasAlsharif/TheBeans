const items = [
  {
    photo: "desserts/desserts1.png",
    description: "Cookies",
    price: "4 SAR"
  },
  {
    photo: "desserts/desserts2.png",
    description: "French Toast",
    price: "16 SAR"
  },
  {
    photo: "desserts/desserts3.png",
    description: "Chocolate Muffin",
    price: "6 SAR"
  },
  {
    photo: "desserts/desserts4.png",
    description: "Blueberry Muffin",
    price: "7 SAR"
  },
  {
    photo: "desserts/desserts5.png",
    description: "Pancake",
    price: "20 SAR"
  },
  {
    photo: "desserts/desserts6.png",
    description: "Waffle",
    price: "20 SAR"
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

document.getElementById("Desserts").innerHTML = `
${items.map(item).join("")}
`;