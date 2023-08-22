import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // true cuz it wouldn't show warning on page load
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const nameRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true);

    const username = nameRef.current.value;
    if (username.trim() === "") {
      setNameIsValid(false);

      return;
    }
    setNameIsValid(true);
    console.log(username);
    console.log("Form Submitted!");
  };

  const nameInputIsValid = !nameIsValid && nameIsTouched;

  // dynamic CSS for invalid case
  const nameInputClass = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  // If a form is submitted and it has a button in it, a HTTP req is automatically sent to the server
  // It is a browser default behaviour, hence we use preventDefault()
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {nameInputIsValid && (
          <p className="error-text">Please enter your name</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
