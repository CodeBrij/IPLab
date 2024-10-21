const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const articles = [
  {
    id: 1,
    title: "Career Development Tips",
    content:
      "Content here... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, repellat doloremque repellendus voluptatibus quos veritatis odio molestiae voluptatum, commodi ullam voluptate, autem vero voluptates praesentium incidunt iusto vel sequi consequatur! ",
  },
  {id: 2, title: "Job Market Trends", content: "Content here..."},
  {id: 3, title: "Interview Preparation", content: "Content here..."},
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/contact", (req, res) => {
  console.log("Received:", req.body);
  res.json({message: "Form received"});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
