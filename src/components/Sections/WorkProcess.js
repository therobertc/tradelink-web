import React from "react";
import classes from "./Section.module.css";

const WorkProcess = () => (
  <>
    <h1 className={classes.SectionTitle}>How it works</h1>
    <div className={classes.SectionContainer}>
      <h1 className={classes.SectionItem}>
        Find Subscribers
        <p>If you already have a group, it's easy to add it to Tradelink.</p>
      </h1>

      <h1 className={classes.SectionItem}>
        Send Updates
        <p>Access live market data and send updates to your subscribers in real-time.</p>
      </h1>

      <h1 className={classes.SectionItem}>
        Get Paid
        <p>We make it easy to start a paid group whenever you're ready.</p>
      </h1>
    </div>
  </>
);

export default WorkProcess;
