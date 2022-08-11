import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/404/404";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import MainPortal from "./components/Main-Portal/MainPortal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Main-Portal" element={<MainPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
