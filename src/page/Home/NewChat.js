import React from "react";
import { back } from "../../assets/image/index";
function NewChat({
  iconSide,
  FormSearch,
  ListUser,
  FontAwesomeIcon,
  faUser,
  collapse,
  toggleSide,
  user,
  AddChat,
  ShowChat,
}) {
  const LogIn = JSON.parse(localStorage.getItem("LogIn"));
  return (
    <React.Fragment>
      <div className="w3-sidebar w3-bar-block w3-card new-chat" id="main6">
        <nav
          id="main7"
          className="navbar navbar-light nav-list-chat fixed-top"
          style={{ zIndex: 100 }}
        >
          <div className="container container-navbar-new-chat">
            <a
              className="navbar-brand navbar-new-message"
              onClick={() => {
                collapse();
                toggleSide({ newChat: false });
              }}
              href="#"
            >
              {/* <FontAwesomeIcon icon={faUser} /> */}
              <img className="icon-back" src={back} width="30px" />
              New Chat
            </a>
            <br />
            {/* <div className="float-end" >
                            {iconSide.map((data, index) => {
                                return (
                                    <button className="sidebarsnya">
                                        <img key={index} className="icon-navbar" src={data.icon} width="24px" />
                                    </button>
                                )
                            })}</div> */}
          </div>
        </nav>
        <div className="list-group mt-4">
          <FormSearch autoFocus={false} />

          {/* <ListUser /> */}
        </div>
        <div className="list-group">
          {Array.isArray(user) &&
            user.map((data, index) => {
              if (data.username) {
                if (data.username !== LogIn[0].username) {
                  return (
                    <a
                      onClick={(arr) => AddChat(data)}
                      href="#"
                      className="list-group-item list-group-item-action"
                      aria-current="true"
                    >
                      {data.username}
                    </a>
                  );
                }
              }
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewChat;
