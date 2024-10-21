import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({name: "", email: "", message: ""});

  useEffect(() => {
    // Fetch articles when component mounts
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });
    alert("Form submitted!");
  };

  return (
    <div>
      <h1>Career Guidance Blog</h1>
      <div>
        {articles.map((article) => (
          <div key={article.id} className="article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
      <fieldset>
        <legend>Contact Us</legend>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <br></br>
          <br></br>
          <input
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <br></br>
          <br></br>
          <textarea
            type="text"
            placeholder="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({...formData, message: e.target.value})
            }
          ></textarea>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
