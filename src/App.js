import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextFormat from "./components/TextFormat";
import About from "./components/About";

export default function App() {
  const [mode, setMode] = useState("light"); //Whether darkmode is enable or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar
        title="Text Editor"
        home="HOME"
        link="LINK"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextFormat heading="Enter the Words or Text or Letter" />
      </div>
      <About />
    </>
  );
}
