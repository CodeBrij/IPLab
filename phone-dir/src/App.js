import "./App.css";
import {useEffect, useState} from "react";

function App() {
  const [phoneList, setPhoneList] = useState([]);
  const [newContact, setNewContact] = useState({name: "", contact: ""});

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/db");
      const result = await response.json();
      setPhoneList(result);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/data", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newContact),
      });
      const result = await response.json();
      console.log(result);
      setPhoneList([...phoneList, newContact]);
      setNewContact({name: "", contact: ""});
    } catch (error) {
      console.error("error submitting form", error);
    }
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewContact({...newContact, [name]: value});
  };

  return (
    <div className="App">
      <h1>Phone Directory</h1>
      <div className="directory-container">
        <div className="phonebook">
          <h2>Contacts</h2>
          <ul>
            {phoneList.map((item, index) => (
              <li key={index}>
                {item.name} : {item.contact}
              </li>
            ))}
          </ul>
        </div>
        <div className="add-contact">
          <h2>Add New Contact</h2>
          <fieldset>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Enter Name : </label>
              <input
                type="text"
                name="name"
                id="username"
                value={newContact.name}
                onChange={handleInputChange}
                required
              />
              <br />
              <br />
              <br />
              <label htmlFor="phonenumber">Enter Number : </label>
              <input
                type="text"
                name="contact"
                id="phonenumber"
                value={newContact.contact}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
              <br />
              <br />
              <br />
              <button type="submit">Add Contact</button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default App;
