import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Main.css";

const Main = () => {
  let userImg = require("../../Data/img-p.jpg");
  let userImg2 = require("../../Data/mark.jpg");
  let userImg3 = require("../../Data/marta.jpg");
  let userImg4 = require("../../Data/alan.jpg");
  let video = require("../../Data/New video.mp4");

  const handleLogout = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  return (
    <>
      <Container id="login-mainContainer2">
        <Container id="window-container1">
          <div className="user-column col-4">
            <div className="vertical-container">
              <div className="col-10">
                <div className="user-info">
                  <img className="user-img" src={userImg} alt="" />
                  <h3>Ivan</h3>
                </div>
                <div className="user-list">
                  <div className="user-data">
                    <img className="other-user-img" src={userImg2} alt="" />
                    <h4>Mark</h4>
                  </div>
                  <div className="user-data">
                    <img className="other-user-img" src={userImg3} alt="" />
                    <h4>Marta</h4>
                  </div>
                  <div className="user-data">
                    <img className="other-user-img" src={userImg4} alt="" />
                    <h4>Alan</h4>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="user-logout">
                  <button onClick={handleLogout} className="logout">
                    LogOut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="data-column col-8">
            <div className="bugs-list col-7">
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
              <div className="bugs">
                <p className="bugs-text">the error has been reported</p>
                <p className="bugs-text1">Mark</p>
              </div>
            </div>
            <div className="bugs-list2 col-1">
              <div className=" button-bugs">
                <button className="button-c">create new report</button>
                <button className="button-c">Delete report</button>
              </div>
            </div>
            <div className="bugs-list3 col-4">
              <div className="main-chat-box"></div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Main;
