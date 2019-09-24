import React, { useState } from "react";
import classes from "./NameForm.module.css";

const NameForm = () => {
  const [value, setValue] = useState("");

  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    alert(`An invite link will be sent shortly: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.NameForm}>
      <input
        placeholder=" Enter a phone number"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

/* Use this link for documentation on the form */

/* https://reactjs.org/docs/forms.html */

export default NameForm;
