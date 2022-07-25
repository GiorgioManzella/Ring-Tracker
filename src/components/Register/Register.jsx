import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

const Register = () => {
  let gif = require("../../ring-nobg.gif");
  let homer = require("../../Data/homer.gif");

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();
  const sendRegister = async (e) => {
    console.log("123");
    e.preventDefault();
    let body = {
      userName: userName,
      email: email,
      password: password,
    };

    let response = await fetch("http://localhost:3002/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      navigate("/login");
    }
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
                onChange={(e) => setuserName(e.target.value)}
              />

              <br></br>
              <input
                id="login-password"
                type="email"
                placeholder="Email"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <input
                id="login-password"
                type="password"
                placeholder="Password"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button onClick={sendRegister} className="login-button2">
                Register
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Register;
