const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get("/api/getter", (req, res) => {
  res.json(data);
});

app.post("/api/poster", (req, res) => {
  const {salary} = req.body;
  const netSalary = salary * 0.8;
  res.json({message: "Data recived Successfully", netSalary});
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
