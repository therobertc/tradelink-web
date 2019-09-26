import React, { useState } from "react";
import classes from "./GroupForm.module.css";

const GroupForm = () => {
  const [value, setValue] = useState("");

  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    alert(`An invite link will be sent shortly: ${value}`);
  };

  return (


    <form onSubmit={handleSubmit} className={classes.GroupForm}>
        <form >
        <txt style={{color: 'white'}}>
            What's your group name?
        </txt>
      <input
        placeholder=" Enter a group name"
        type="text"
        value={value}
        onChange={handleChange}
      />
      
      <br/>

      </form>

      <form>
      <txt style={{color: 'white'}}>
            What's your group name?
        </txt>
      <input
        placeholder=" Enter a group name"
        type="text"
        value={value}
        onChange={handleChange}
      />
      
      <br/>

      </form>
      
      <form>
        <txt style={{color: 'white'}}>
            What's your group name?
        </txt>
      <input
        placeholder=" Enter a group name"
        type="text"
        value={value}
        onChange={handleChange}
      />
      
      <br/>

      </form>
      
      

      <button type="submit">Sign Up</button>
     
    
    </form>


  );
};

/* Use this link for documentation on the form */

/* https://reactjs.org/docs/forms.html */

export default GroupForm;
