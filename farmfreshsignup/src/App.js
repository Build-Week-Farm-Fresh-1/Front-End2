import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignInPage from "./components/SignInPage";
import NewAccountPage from "./components/NewAccountPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/login" component={SignInPage} />
      <Route exact path="/" component={NewAccountPage} />
    </div>
  );
}

export default App;
