import "./App.css";
import {useState} from "react";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState("");
  const [netSalary, setNetSalary] = useState();

  const handleChange = (e) => {
    const newPay = e.target.value;
    setFormData(newPay);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/poster", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({salary: parseFloat(formData)}),
      });
      const result = await response.json();
      console.log(result);
      setShowResult(true);
      setFormData("");
      setNetSalary(result.netSalary);
    } catch (error) {
      console.error("error submiting form", error);
    }
  };

  return (
    <div className="App">
      <h1>Quick Salary Estimator</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>Enter your Salary: </label>
          <br></br>
          <input type="number" value={formData} onChange={handleChange}></input>
          <br></br>
          <button type="submit">Enter Amount</button>
        </form>
      </fieldset>
      <div className="result-modal">
        {showResult && (
          <div>
            <h2>Net Salary(Take Home): </h2>
            <h2>${netSalary?.toFixed(2) || "Calculating..."}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
