import React from "react";
import "./App.css";
import Nav from "components/Nav";
import Header from "components/Header";
import WorkProcess from "components/Sections/WorkProcess";
import About from "components/Sections/About";
import Reminder from "components/Reminder";
import Footer from "components/Footer";
// import Cards from "components/Cards";

const App = () => (
  <div className="App">
    <Nav />
    {/* <Cards /> */}
    <Header />
    <WorkProcess />
    <Reminder text="Ready to start a trading group?" />
    <About />
    <Reminder text="Start a trading group." />
    <Footer />
  </div>
);

export default App;
