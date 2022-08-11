import React from "react";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./MainPortal.css";

const MainPortal = () => {
  let userImg = require("../../Data/img-p.jpg");
  let userImg2 = require("../../Data/mark.jpg");
  let userImg3 = require("../../Data/marta.jpg");
  let userImg4 = require("../../Data/alan.jpg");

  const handleLogout = (e) => {
    e.preventDefault();
    window.location.href = "/login";
    localStorage.clear();
  };

  const changeText = (e) => {
    e.preventDefault();
    if (document.getElementById("qwe").innerHTML === "Date") {
      document.getElementById("qwe").innerHTML = "Name";
    } else {
      document.getElementById("qwe").innerHTML = "Date";
    }
  };

  const data = ["asd", "gfasd", "asdsad"];
  const searchBar = (e) => {
    e.preventDefault();
    let search = document.getElementById("search").value;
  };

  const [Search, setSearch] = useState("");
  const [roomCode, setroomCode] = useState("");

  const createRoom = (e) => {
    let code = Math.floor(Math.random() * 100000);
    if (code < 10000) {
      code = code + 10000;
      setroomCode(code);
    } else if (code < 99999) {
      code = code - 1000;
      setroomCode(code);
    }

    localStorage.setItem("roomCode", code);
    window.location.href = "/Main";
    console.log(code);

    /*window.location.href = "/Main";*/
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
            <div className="room-box">
              <div className="room-box-header">
                <div className="room-box-header-bottom-1">
                  <h3>Create a Room</h3>

                  <br />
                  <button
                    onClick={createRoom}
                    className="room-box-header-right-button"
                  >
                    Create
                  </button>
                </div>
                <div className="room-box-header-bottom">
                  <h3>Join a Room</h3>
                  <input type="text" className="Room-code" />
                  <br />
                  <button className="room-box-header-right-button">Join</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default MainPortal;
