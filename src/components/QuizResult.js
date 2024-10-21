import React from "react";

function QuizResult({score,totalQuestions}){
    return (
        <div className="result">
            <h2>Quiz Completed</h2>
            <p>Your Score: {score} out of {totalQuestions}</p>
        </div>
    );
}

export default QuizResult;
