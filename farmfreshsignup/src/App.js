import React from "react";
import Navigation from "./components/Navigation";
import NewAccountForm from "./components/NewAccountForm";
import Picture from "./components/Picture";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Picture />
        <NewAccountForm />
      </div>
    </div>
  );
}

export default App;
