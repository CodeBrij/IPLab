const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

let sampleData = [
  {name: "Jai", contact: "1234567890"},
  {name: "Bani", contact: "5674567893"},
  {name: "Mango", contact: "1876567891"},
];

app.get("/api/db", (req, res) => {
  res.json(sampleData);
});

app.post("/api/data", (req, res) => {
  const newdata = req.body;
  sampleData = [...sampleData, newdata];
  console.log("Recieved Data", newdata);
  res.json({message: "Data Recievd Successfully", data: newdata});
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
