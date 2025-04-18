

function ShoppingListItem({item, quantity, completed, index }) {
    return (
        <>
        <li style={{color: item.completed ? "red" : "green", textDecoration:item.completed ? "line-through": "none"}} key={index}
    >{item.item} - {item.quantity} </li>
    </>
    )
}


export default ShoppingListItem;