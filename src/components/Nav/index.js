import React from "react";
import tradelinklogo from "assets/img/tradelinklogo.png";
import classes from "./Nav.module.css";

const Nav = () => (
  <nav className={classes.Nav}>
    <img src={tradelinklogo} alt="tradelink logo" />
    <input type="submit" value="Get Started" />
  </nav>
);

export default Nav;
