const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const quizquestions = [
    {
      id:1,
      question: "What is 2+2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id:2,
      question: "What color is the sky?",
      options: ["Red", "Green", "Blue", "Yellow"],
      correctAnswer: "Blue",
    },
    {
        id: 3,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
      },
      {
        id: 4,
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Mars"
      },
  ];

  app.get('/api/questions',(req,res)=>{
    res.json(quizquestions);
  });
  app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
  });