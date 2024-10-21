const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

let data = [];

app.get("/api/getter", (req, res) => {
  res.json(data);
});

app.post("/api/poster", (req, res) => {
  const itemList = req.body;
  
  // Calculate total cost
  const totalCost = itemList.reduce((total, item) => {
    return total + (item.quantity * item.cost);
  }, 0);

  // You can store the itemList in data if needed
  data = itemList;

  res.json({ 
    message: "Data received Successfully", 
    totalCost: totalCost.toFixed(2) 
  });
});

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});