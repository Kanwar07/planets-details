import React from "react";
import "./App.css";
import Contextdata from "./components/context/Contextdata";
import Planets from "./components/planets/Planets";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <Contextdata>
        <NavBar />
        <Planets />
      </Contextdata>
    </>
  );
}

export default App;
