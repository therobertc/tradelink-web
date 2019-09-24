import React from "react";
import classes from "./Cards.module.css";

const Cards = () => (
  <>
    <div className={classes.CardsTitle}>Trending Stocks</div>
    <div className={classes.CardsContainer}>
      <div className={classes.Card}>
        <p> STOCK </p>
      </div>
      <div className={classes.Card}>
        <p> STOCK </p>
      </div>
      <div className={classes.Card}>
        <p> STOCK </p>
      </div>
      <div className={classes.Card}>
        <p> STOCK </p>
      </div>
      <div className={classes.Card}>
        <p> STOCK </p>
      </div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
      <div className={classes.Card}></div>
    </div>
  </>
);

export default Cards;
