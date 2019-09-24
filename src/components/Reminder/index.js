import React from "react";
import classes from "./Reminder.module.css";
import NameForm from "components/NameForm";

const Reminder = ({ text }) => (
  <div className={classes.Reminder}>
    <h1>{text}</h1>
    <NameForm />
  </div>
);

export default Reminder;
