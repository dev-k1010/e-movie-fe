import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router/Routers";
import SpinnerControl from "./components/spinner/spinnerControl";
import Spinner from "./components/spinner/spinner";



function App() {
  return (
    <Router>
      <SpinnerControl />
      <Spinner />
      <Routers />
    </Router>
  );
}

export default App;
