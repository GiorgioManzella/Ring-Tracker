import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  let gif = require("../../ring-nobg.gif");
  let gif1 = require("../../Data/corporate1.gif");
  let gif2 = require("../../Data/corporate2.gif");
  let gif3 = require("../../Data/corporate3.gif");

  return (
    <Container id="login-mainContainer">
      <div className="colum-main2 col-4">
        <div id="logo-center">
          {" "}
          <img id="logo" src={gif} alt="asd" />
        </div>
        <div id="login-inner">
          <form>
            <input
              id="login-username"
              type="text"
              aria-describedby="emailHelp"
              placeholder="Username"
            />

            <br></br>
            <input id="login-password" type="password" placeholder="Password" />

            <button className="login-button">Login</button>
            <br></br>
            <button className="login-button2">Register</button>
          </form>
        </div>
      </div>
      <div className="colum-main3 col-4">
        <Container id="window-container">
          <div className="window1">
            <img id="logo1" src={gif1} alt="" />
            <h3>Made for small companies</h3>
          </div>
          <div className="window2">
            <h3 id="h3L">Scalable, easy to manage.</h3>
            <img id="logo1" src={gif2} alt="" />
          </div>
          <div className="window3">
            <img id="logo1" src={gif3} alt="" />
            <h3>Ideal for small projects.</h3>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Login;
