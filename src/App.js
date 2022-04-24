import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [session, setSession] = useState({});

  return (
    <div className="App">
      {!session.token ?
      <Login />
      :
      "hola"}
    </div>
  );
}

export default App;
