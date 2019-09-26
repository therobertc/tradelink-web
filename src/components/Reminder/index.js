import React from "react";
import classes from "./Reminder.module.css";
//import NameForm from "components/NameForm";

const updateLocation = path => window.location.pathname !== path && window.location.assign(path);

const getStarted = () => updateLocation("/get-started");

const Reminder = ({ text }) => (
  <div className={classes.Reminder}>
    <h1>{text}</h1>
    <div style={{ alignSelf: 'center'}}>
    <button style={{
      height: 40,
      width: 150,
      fontWeight: 500,
      border: 0,
      borderRadius: 20,
      fontSize: 16,
      color: '#fff',
      backgroundColor: '#147efb',
      background: '#147efb',
      //marginRight: 50,
      marginTop: 30,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }} type="submit" onClick={getStarted}>
      Get Started
      </button>
      </div>

  </div>
);

export default Reminder;
