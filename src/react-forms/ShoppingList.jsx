import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {

  const [item, setItems] = useState([
    { id: 1, product: "Fish", quantity: 8 },
    { id: 2, product: "Chicken", quantity: 4 },
    { id: 3, product: "Beef", quantity: 2 },
  ]);

  const addItem = (newItem) => {
    setItems((currItems) => {
      return [...currItems, { ...newItem, id: currItems.length + 1 }];
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>


      <ShoppingListForm addItem={addItem} />
    </div>
  );
}

export default ShoppingList;
