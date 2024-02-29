import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { firstName, lastName, gender, terms };
    console.log("Form submitted: ", { userData });
  };

  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameInput = (event) => {
    setLastName(event.target.value);
  };

  const handleGenderRadioInput = (event) => {
    setGender(event.target.value);
  };

  const handleTermsCheckbox = (event) => {
    setTerms(event.target.checked);
  };

  return (
    <div>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          onChange={handleFirstNameInput}
          value={firstName}
        />
        <label htmlFor="lastName">Last name:</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleLastNameInput}
          value={lastName}
        />
        <div>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={handleGenderRadioInput}
            checked={gender === "female"}
          />
          <label htmlFor="female">Female</label>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={handleGenderRadioInput}
            checked={gender === "male"}
          />
          <label htmlFor="male">Male</label>
          <input
            id="other"
            type="radio"
            name="gender"
            value="other"
            onChange={handleGenderRadioInput}
            checked={gender === "other"}
          />
          <label htmlFor="other">Other</label>
        </div>
        <div>
          <input
            id="terms"
            type="checkbox"
            name="terms"
            onChange={handleTermsCheckbox}
            checked={terms}
          />
          <label htmlFor="terms">I accept the Terms and Conditions</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
