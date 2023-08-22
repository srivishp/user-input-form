import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // true cuz it wouldn't show warning on page load
  const [nameIsValid, setNameIsValid] = useState(true);
  const nameRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const username = nameRef.current.value;
    if (username.trim() === "") {
      setNameIsValid(false);

      return;
    }
    setNameIsValid(true);
    console.log(username);
    console.log("Form Submitted!");
  };

  // dynamic CSS for invalid case
  const nameInputClass = nameIsValid ? "form-control" : "form-control invalid";

  // If a form is submitted and it has a button in it, a HTTP req is automatically sent to the server
  // It is a browser default behaviour, hence we use preventDefault()
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!nameIsValid && <p className="error-text">Please enter your name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
