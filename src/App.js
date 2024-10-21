import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [courses, setCourses] = useState([]);
  const [inquiry, setInquiry] = useState({name: "", email: "", message: ""});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInquiry({...inquiry, [name]: value});
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/getter");
      const result = await response.json();
      setCourses(result);
    } catch (error) {
      console.error("Error fetching Data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/poster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiry),
      });
      const data = await res.json();
      console.log(data.message);
      setInquiry({name: "", email: "", message: ""});
    } catch (error) {
      console.error("Error sending Data", error);
    }
  };

  return (
    <div className="App">
      <h1>Course Catalog</h1>
      <div className="course-catalog">
        <h2>Available Course</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <fieldset>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={inquiry.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              value={inquiry.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            ></input>
            <textarea
              name="message"
              value={inquiry.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send inquiry</button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
