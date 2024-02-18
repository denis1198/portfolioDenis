import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Dropdown />
      <Header />
      <About />
    </>
  );
}

export default App;
