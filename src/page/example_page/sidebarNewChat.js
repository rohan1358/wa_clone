import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function sidebarNewChat({ closeBtn, user, newChat }) {
  const myUser = JSON.parse(localStorage.getItem("LogIn")).numberPhone;
  return (
    <React.Fragment>
      <div id="mySidepanel" className="sidepanel">
        <div className="back">
          <a href="#" className="closebtn" onClick={() => closeBtn()}>
            <FontAwesomeIcon icon={faArrowLeft} /> New Chat
          </a>
        </div>
        <div className="input-group input-group-sm mt-5 bg-light-gray">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            <i style={{ color: "green" }} class="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="list-group">
          {Array.isArray(user) &&
            user.map((data, index) => {
              if (data.numberPhone !== myUser && data.username) {
                return (
                  <a
                    onClick={() => newChat(data)}
                    key={index}
                    href="#"
                    className="list-group-item list-group-item-action"
                  >
                    {data.username}
                  </a>
                );
              }
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default sidebarNewChat;
