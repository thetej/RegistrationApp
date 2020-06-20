import React from "react";
import FormWrapper from "./components/formWrapper";
import "./App.scss";

function App() {
  return (
    <main className="container">
      <a href="javascript.void(0)" className="close disabled">
        Close
      </a>
      <a href="javascript.void(0)" className="information disabled">
        Info
      </a>
      <FormWrapper />
    </main>
  );
}

export default App;
