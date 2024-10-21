const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.post("/api/calculate", (req, res) => {
  const {principal, age, period} = req.body;

  // Simple interest calculation (you can modify this as needed)
  let rate;
  if (age < 60) {
    rate = 0.05; // 5% for age < 60
  } else {
    rate = 0.06; // 6% for age >= 60
  }

  const interest = principal * rate * period;

  res.json({interest});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
