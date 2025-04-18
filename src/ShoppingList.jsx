import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ShoppingListItem
          key={index}
          item={item}
          quantity={item.quantity}
          completed={item.completed}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
