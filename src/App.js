import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // console.log("before:" + alert);
    setAlert({
      msg: message,
      type: type,
    });
    // console.log("after:" + alert.msg);
  };

  const [mode, setMode] = useState("light");

  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated", "warning");
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={handleToggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/home"
            element={<TextForm heading="Text To Analyze" mode={mode} />}
          />

          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<TextForm heading="Text To Analyze" mode={mode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
