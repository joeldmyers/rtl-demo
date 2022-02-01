import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [submitIsSuccessful, setSubmitIsSuccessful] = useState(false);

  const handleSubmit = () => {
    console.log("submitting");
    if (!firstName || !lastName || !email || !notes) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);

    setSubmitIsSuccessful(true);
  };

  const SuccessMessage = () => (
    <div className="App">
      <div className="success-message">Success!</div>
    </div>
  );

  const SubmitButton = () => (
    <button type="submit" value="Submit" onClick={handleSubmit}>
      Submit
    </button>
  );

  if (submitIsSuccessful) return <SuccessMessage />;

  return (
    <div className="App">
      <div className="form">
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {showErrors && !firstName && (
          <span className="error">Please enter a first name</span>
        )}
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {showErrors && !lastName && (
          <span className="error">Please enter a last name</span>
        )}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {showErrors && !email && (
          <span className="error">Please enter an email</span>
        )}
        <label htmlFor="notes">Notes:</label>
        <input
          type="text"
          id="notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        {showErrors && !notes && (
          <span className="error">Please enter notes</span>
        )}
        <SubmitButton />
      </div>
    </div>
  );
};

export default App;
