const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/calc", (req, res) => {
  const {height, weight} = req.body;
  if (!height || !weight) {
    return res.status(400).json({error: "Height and Weight are required"});
  }
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  let category;
  if (bmi < 18.5) category = "Under weight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Over weight";
  else category = "Obese";

  res.json({bmi: bmi.toFixed(2), category});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
