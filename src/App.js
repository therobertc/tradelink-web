import React from "react";
import "./App.css";
import Landing from "routes/Landing";
import Route from "components/Route";
import Home from "routes/Home";

const App = () => (
  <div className="App">
    <Route path="/" render={Landing} />
    <Route path="/get-started" render={Home} />
  </div>
);

export default App;
