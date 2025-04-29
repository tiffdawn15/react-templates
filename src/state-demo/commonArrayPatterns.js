const shoppingCart = [
  { id: 1, name: "Apple", price: 1.2 },
  { id: 2, name: "Banana", price: 0.8 },
  { id: 3, name: "Cherry", price: 2.5 },
  { id: 4, name: "Date", price: 3.0 },
  { id: 5, name: "Elderberry", price: 1.5 },
];

// Adds a new item to the end of the array
const updatedCart = [...shoppingCart, { id: 6, name: "Fig", price: 2.0 }];

// Remove an element
shoppingCart.filter((item) => item.id !== 2);

// Update an element
shoppingCart.map((item) => {
  return {
    ...item,
    price: item.product.toLowerCase(),
  };
});

shoppingCart.map((item) => {
  if (item.id === 3) {
    return {
      ...item,
      price: item.price * 2,
    };
  } else {
    return item;
  }
});
