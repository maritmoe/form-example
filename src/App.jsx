import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "other",
    terms: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted: ", { userData });
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "firstName") {
      setUserData({ ...userData, firstName: inputValue });
    }
    if (inputName === "lastName") {
      setUserData({ ...userData, lastName: inputValue });
    }
    if (inputName === "gender") {
      setUserData({ ...userData, gender: inputValue });
    }
    if (inputName === "terms") {
      setUserData({ ...userData, terms: event.target.checked });
    }
  };

  return (
    <div>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={userData.firstName}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={userData.lastName}
        />
        <div>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={userData.gender === "female"}
          />
          <label htmlFor="female">Female</label>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={userData.gender === "male"}
          />
          <label htmlFor="male">Male</label>
          <input
            id="other"
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
            checked={userData.gender === "other"}
          />
          <label htmlFor="other">Other</label>
        </div>
        <div>
          <input
            id="terms"
            type="checkbox"
            name="terms"
            onChange={handleChange}
            checked={userData.terms}
          />
          <label htmlFor="terms">I accept the Terms and Conditions</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
