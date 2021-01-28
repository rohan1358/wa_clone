import React, { Component } from "react";
import { DropdownButton, Dropdown } from "../../utils/index";
import { RenderDropdown } from "../../utils/reactBootstrap/component";
import SideBarNewChat from "./sidebarNewChat";
import "./style.css";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import FriendList from "./FriendList";
import ChatArea from "./ChatArea";
import {
  firebase,
  DataConsumer,
  DataContext,
  DataUser,
  withRouter,
} from "../../utils/index";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: firebase.database(),
      chat_room: "",
    };
  }
  takeData = (snapshot, func) => {
    const arr = [];
    snapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      arr.push(item);
    });
    if (func) {
      func(arr);
    }
    console.log(arr);
  };
  openNav = () => {
    document.getElementById("mySidepanel").style.width = "34%";
    document.getElementById("mySidepanel").style.zIndex = 9999;
  };

  closeNav = () => {
    console.log("test");
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.zIndex = -1;
  };
  componentDidMount() {
    const { AddUser, ShowChat, newChat } = this.context;
    const { chat_room } = this.state;
    const func = (snap, AddUser) => this.takeData(snap, AddUser);
    const { db } = this.state;
    db.ref("users/")
      .orderByChild("email")
      .on("value", function (snapshot) {
        func(snapshot, AddUser);
      });
  }
  signOut = () => {
    localStorage.clear();
    setTimeout(() => {
      this.props.history.push("/login");
    }, 500);
  };
  ShowChat = (numberPhone) => {
    const { AddUser, ShowChat, newChat } = this.context;
    const { chat_room } = this.state;
    const func = (snap, AddUser) => this.takeData(snap, AddUser);
    const { db } = this.state;
    db.ref("users/")
      .orderByChild("email")
      .on("value", function (snapshot) {
        func(snapshot, AddUser);
      });
  };
  render() {
    const { user } = this.context;
    const { chat_room } = this.state;

    return (
      <div className="row" style={{ height: "100%", minWidth: "1000px" }}>
        <SideBarNewChat
          newChat={(val) => this.setState({ ...this.state, chat_room: val })}
          user={user}
          closeBtn={() => this.closeNav()}
        />
        <div
          className="col-4 bg-blue"
          style={{
            backgroundColor: "yellow",
            paddingLeft: "0px",
            paddingRight: "0px",
            height: "100%",
            overflow: "scroll",
          }}
        >
          {/* start navbar left */}
          <div className="sticky-top">
            <NavbarLeft
              user={user}
              openNav={() => this.openNav()}
              RenderDropdown={RenderDropdown}
            />
            {/* end navbar left */}
            <div className="ml-3 mr-3 " style={{ marginLeft: "10px" }}>
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Search"
                aria-label=".form-control-sm example"
              />
            </div>
          </div>

          {/* start friendList */}

          <FriendList />
          {/* end friendList */}
        </div>
        {
          <div
            className="col-8 bg-black "
            style={{
              backgroundColor: "yellowgreen",
              paddingLeft: "0px",
              paddingRight: "0px",
              overflow: "scroll",
            }}
          >
            {/* start navbar right */}
            <NavbarRight
              signOut={() => this.signOut()}
              RenderDropdown={RenderDropdown}
            />
            {/* end navbar right */}
            <div
              data-bs-spy="scroll"
              className="list-group overflow-auto"
              id="list-tab"
              role="tablist"
              data-bs-offset="0"
              tabindex="0"
            >
              {/* start chat Area */}
              <ChatArea />
              {/* end chat Area */}
            </div>
            <footer
              style={{
                justifyContent: "center",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <div
                className="input-group input-group-md footer"
                style={{
                  position: "absolute",
                  bottom: "0px",
                  width: "66.6666666667%",
                  margin: "auto",
                  right: "0px",
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary bg-primary"
                  type="button"
                  id="button-addon2"
                >
                  <i class="bi bi-cursor"></i>
                </button>
              </div>
            </footer>
          </div>
        }
      </div>
    );
  }
}

Home.contextType = DataContext;
const ShowTheLocationWithRouter = withRouter(Home);
export default ShowTheLocationWithRouter;
