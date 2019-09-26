import React from "react";
import classes from "./Header.module.css";
//import NameForm from "components/NameForm";

const updateLocation = path => window.location.pathname !== path && window.location.assign(path);

const getStarted = () => updateLocation("/get-started");

const Header = () => (
  <header className={classes.Header}>
    <h1 style={{ alignSelf: 'center'}} >Start a trading group.</h1>
    <p style={{ alignSelf: 'center'}}>Find subscribers, send updates, and get paid.</p>

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


    {/*<NameForm />*/}
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
