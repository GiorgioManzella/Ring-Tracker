import React from "react";
import { Container } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  let gif = require("../../ring-nobg.gif");
  let homer = require("../../Data/homer.gif");

  const sendRegister = (e) => {
    let data = fetch("http://localhost:8080/register")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container id="login-mainContainer1">
        <div className="colum-main4 col-4">
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
              <input id="login-password" type="email" placeholder="Email" />
              <br></br>
              <input
                id="login-password"
                type="password"
                placeholder="Password"
              />

              <button className="login-button2">Register</button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
