import React from "react";
import tradelinklogo from "assets/img/tradelinklogo.png";
import classes from "./Nav.module.css";

const Nav = () => {
  const updateLocation = path => window.location.pathname !== path && window.location.assign(path);
  const goHome = () => updateLocation("/");
  const getStarted = () => updateLocation("/get-started");
  return (
    <nav className={classes.Nav}>
      <img src={tradelinklogo} alt="tradelink logo" onClick={goHome} />
      <button type="submit" onClick={getStarted}>
        Get Started
      </button>
    </nav>
  );
};

export default Nav;
