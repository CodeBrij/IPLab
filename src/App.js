import React, { useState } from "react";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    cost: "",
  });
  const [totalCost, setTotalCost] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedItem = {
        name: newItem.name,
        quantity: parseFloat(newItem.quantity) || 0,
        cost: parseFloat(newItem.cost) || 0,
      };
      const updatedItemList = [...itemList, parsedItem];
      setItemList(updatedItemList);
      setNewItem({ name: "", quantity: "", cost: "" });
      
      // Send the updated item list to the backend for calculation
      const response = await fetch("http://localhost:5001/api/poster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItemList),
      });
      const data = await response.json();
      setTotalCost(parseFloat(data.totalCost));
      
      console.log("Added successfully");
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="App">
      <h1>Bill Calculator</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newItem.name}
            placeholder="Enter Name of Product"
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            placeholder="Enter Quantity"
            onChange={handleChange}
          />
          <input
            type="number"
            name="cost"
            value={newItem.cost}
            placeholder="Enter Cost"
            onChange={handleChange}
          />
          <button type="submit">Add Product</button>
        </form>
      </fieldset>
      <div>
        <h2>Item List</h2>
        <ul>
          {itemList.map((singleItem, index) => (
            <li key={index}>
              {singleItem.name} - Quantity: {singleItem.quantity}, Cost: $
              {singleItem.cost}
            </li>
          ))}
        </ul>
        <h3>Total Cost: ${totalCost}</h3>
      </div>
    </div>
  );
}

export default App;