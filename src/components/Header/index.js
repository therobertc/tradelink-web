import React from "react";
import classes from "./Header.module.css";
import NameForm from "components/NameForm";

const Header = () => (
  <header className={classes.Header}>
    <h1>We make it easy to start a trading group.</h1>
    <p>Find subscribers, send alerts, get paid.</p>
    <NameForm />
    {/* <a
      className="App-link"
      href="https://testflight.apple.com/join/ny1w9mFa"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Beta
    </a> */}
  </header>
);

export default Header;
