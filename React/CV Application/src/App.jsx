import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import FormSection from "./components/FormSection.jsx";
import CVSection from "./components/CVSection.jsx";

function App() {
  return (
    <>
      <Header />
      <div id="wrapper">
        <FormSection />
        <CVSection />
      </div>
    </>
  );
}

export default App;
