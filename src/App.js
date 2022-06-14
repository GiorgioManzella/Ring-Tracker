import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
