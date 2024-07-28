import logo from "./logo.svg";
import "./App.css";
import "./style.css";

import Main from "./Main.js";
import "./script.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotel/:slug" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
