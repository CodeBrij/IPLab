import "./App.css";
import React, {useState} from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/calc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({height, weight}),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Under weight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Over weight";
    return "Obese";
  };

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="height"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <button type="submit">Calculate BMI</button>
        </form>
        {result && (
          <div>
            <h2>Your BMI is {result.bmi}</h2>
            <p>Category: {result.category}</p>
          </div>
        )}
      </fieldset>
    </div>
  );
}

export default App;
