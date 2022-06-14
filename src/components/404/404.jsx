import React from "react";
import { Container } from "react-bootstrap";
import "./404.css";

const NotFound = () => {
  let image = require("../../Data/4044.gif");
  let goBack = () => {
    window.history.back();
  };
  return (
    <>
      <Container id="login-mainContainer">
        <div className="colum-main3 col-4">
          <Container id="window-container">
            <div>
              <h1 className="T404">404</h1>
              <p className="T404-text">It seems like you lost your way,</p>
              <img src={image} alt="" />
              <p className="T404-text">Let me get you back on track</p>
              <button onClick={goBack} className="goBack">
                Go Back
              </button>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
