const items = [
  {
    photo: "drinks/drink1.png",
    description: "Espresso",
    price: "6 SAR"
  },
  {
    photo: "drinks/drink2.png",
    description: "Black Coffee",
    price: "7 SAR"
  },
  {
    photo: "drinks/drink3.png",
    description: "Coffee Latte",
    price: "12 SAR"
  },
  {
    photo: "drinks/drink4.png",
    description: "Hot Chocolate",
    price: "12 SAR"
  },
  {
    photo: "drinks/drink5.png",
    description: "Spanish Latte",
    price: "18 SAR"
  },
  {
    photo: "drinks/drink6.png",
    description: "Iced Coffee",
    price: "17 SAR"
  },
  {
    photo: "drinks/drink7.png",
    description: "Orange Juice",
    price: "12 SAR"
  },
  {
    photo: "drinks/drink8.png",
    description: "Water",
    price: "1 SAR"
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

document.getElementById("Drinks").innerHTML = `
${items.map(item).join("")}
`;