import React from "react";
import tradelinklogo from "assets/img/tradelinklogo.png";
import classes from "./Nav.module.css";

const Nav = () => (
  <nav className={classes.Nav}>
    <img src={tradelinklogo} alt="tradelink logo" />
    <button type="submit">Get Started</button>
  </nav>
);

export default Nav;
