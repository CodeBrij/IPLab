const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const sampledata = [
  {
    title: "pokemon",
    year: "2015",
    genre: "Action",
    description:
      "Ash Ketchum from Pallet Town is 10 years old today. This means he is now old enough to become a Pokémon Trainer.",
  },
  {
    title: "doraemon",
    year: "2012",
    genre: "Cartoon",
    description: "Doraemon is a robotic cat that comes from the 22nd century.",
  },
  {
    title: "shinchan",
    year: "2019",
    genre: "Comedy",
    description:
      "Follows the adventures of the five-year-old Shinnosuke 'Shin' Nohara and his parents, baby sister, dog, neighbours, and friends.",
  },
];

app.get("/api/moviedb", (req, res) => {
  res.json(sampledata);
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
