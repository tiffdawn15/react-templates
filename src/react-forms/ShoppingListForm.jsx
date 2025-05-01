import { useState } from "react";

function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: "" });
  const handleChange = (e) => {
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    // When forms are submitted the page naturally refreshes. Prevent default
    e.preventDefault();
    addItem(formData);
    setFormData({ product: "", quantity: "" }); // Reset form fields

  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Product is: {formData.product} Quantity is {formData.quantity}{" "}
      </h1>
      <label htmlFor="product">Product</label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />

      <button > Add Item </button>
    </form>
  );
}

export default ShoppingListForm;
