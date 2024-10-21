import React, {useState} from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    principal: "",
    age: "",
    period: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data.interest);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <h1>Savings Interest Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="principal"
          value={formData.principal}
          onChange={handleChange}
          placeholder="Principal Amount"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="number"
          name="period"
          value={formData.period}
          onChange={handleChange}
          placeholder="Investment Period (years)"
          required
        />
        <button type="submit">Calculate Interest</button>
      </form>
      {result !== null && (
        <div className="result">
          <h2>Calculated Interest: ${result.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
