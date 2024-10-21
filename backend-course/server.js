const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const coursesData = [
  {title: "Coding", description: "Good classes "},
  {title: "Cooking", description: "Teaches all kind of baking"},
  {title: "Fishing", description: "We even catched a shark"},
  {title: "Dancing", description: "Hip-Hop,Disco,traditonal all forms thaught"},
];

app.get("/api/getter", (req, res) => {
  res.json(coursesData);
});

app.post("/api/poster", (req, res) => {
  const formData = req.body;
  console.log("Recieved inquiry:", formData);
  res.json({message: "Feedback Recieved"});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
