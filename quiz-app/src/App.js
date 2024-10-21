import React, {useState, useEffect} from "react";
import CurrentQuestion from "./components/CurrentQuestion";
import QuizResult from "./components/QuizResult";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching Data", error));
  }, []);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br>
     
      {!showResult ? (
        questions.length > 0 && (
          <CurrentQuestion
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
          />
        )
      ) : (
        <QuizResult
          score={calculateScore()}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}

export default App;
