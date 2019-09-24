import React from "react";
import classes from "./Section.module.css";

const About = () => (
  <>
    <h1 className={classes.SectionTitle}>About Tradelink</h1>
    <div className={classes.SectionContainer}>
      <h1 className={classes.SectionItem}>
        Groups
        <p>
          Groups are the best way to bring people together. We created a unique place for groups of
          traders to connect and share ideas.
        </p>
      </h1>

      <h1 className={classes.SectionItem}>
        Subscriptions
        <p>
          Direct subscriptions are a better business model for community. It puts the user in
          control, and helps you make more money.
        </p>
      </h1>

      <h1 className={classes.SectionItem}>
        Global Markets
        <p>
          The global financial market is a collaborative environment. We believe market updates
          should be shared with the world.
        </p>
      </h1>
    </div>
  </>
);

export default About;
