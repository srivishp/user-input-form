import { useState } from "react";

const SimpleInput = (props) => {
  const [username, setUsername] = useState("");
  const [nameWasTouched, setNameWasTouched] = useState(false);

  const usernameIsValid = username.trim() !== "";
  const inputIsInvalid = !usernameIsValid && nameWasTouched;

  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const blurHandler = (event) => {
    setNameWasTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setNameWasTouched(true);

    if (!usernameIsValid) {
      return;
    }

    console.log(username);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setUsername("");
    setNameWasTouched(false);
  };

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={blurHandler}
          value={username}
        />
        {inputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
