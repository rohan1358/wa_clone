import React, { Component } from "react";
import { DropdownButton, Dropdown } from "../../utils/index";
import { RenderDropdown } from "../../utils/reactBootstrap/component";
import SideBarNewChat from "./sidebarNewChat";

import "./style.css";
export default class Home extends Component {
  openNav = () => {
    document.getElementById("mySidepanel").style.width = "34%";
    document.getElementById("mySidepanel").style.zIndex = 9999;
  };

  closeNav = () => {
    console.log("test");
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.zIndex = -1;
  };
  render() {
    return (
      <div className="row" style={{ height: "100%", minWidth: "1000px" }}>
        <SideBarNewChat closeBtn={() => this.closeNav()} />
        <div
          className="col-4 bg-blue"
          style={{
            backgroundColor: "yellow",
            height: "100%",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <nav className="navbar navbar-light bg-light sticky-top">
            <div className="container-fluid">
              <img
                style={{
                  width: "10%",
                  borderRadius: "10%",
                }}
                src="https://www.gendruk.com/wp-content/uploads/2015/11/kucing-lucu.jpg"
                alt="..."
              />
              <ul className="nav justify-content-end">
                <li className="nav-item"></li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tabIndex={-1}>
                    <i class="bi bi-circle" style={{ color: "black" }}></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => this.openNav()}
                    href="#"
                    tabIndex={-1}
                  >
                    <i
                      class="bi bi-chat-left-text-fill"
                      style={{ color: "black" }}
                    ></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tabIndex={-1}>
                    <RenderDropdown
                      icon={{
                        className: "bi bi-three-dots-vertical",
                        style: { color: "black" },
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="ml-3 mr-3 " style={{ marginLeft: "10px" }}>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Search"
              aria-label=".form-control-sm example"
            />
          </div>
          <div
            className=""
            data-target="#navbar-example2"
            data-offset="0"
            tabindex="0"
          >
            <div
              data-bs-offset="0"
              data-bs-spy="scroll"
              tabindex="0"
              className="list-group overflow-auto"
              id="list-tab"
              role="tablist"
              style={{ height: "672px" }}
            >
              <a
                className="list-group-item list-group-item-action"
                id="list-profile-list"
                data-bs-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="profile"
              >
                <div>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-messages-list"
                data-bs-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="messages"
              >
                <div>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings"
              >
                <div>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings"
              >
                <div>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings"
              >
                <div>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-settings-list"
                data-bs-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings"
              >
                <div>
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-8 bg-black "
          style={{
            backgroundColor: "yellowgreen",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <nav className="navbar navbar-light bg-light sticky-top">
            <div className="container-fluid">
              <img
                style={{
                  width: "5%",
                  borderRadius: "10%",
                }}
                src="https://www.gendruk.com/wp-content/uploads/2015/11/kucing-lucu.jpg"
                alt="..."
              />
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <i style={{ color: "black" }} class="bi bi-search"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <RenderDropdown
                      icon={{
                        className: "bi bi-three-dots-vertical",
                        style: { color: "black" },
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            data-bs-spy="scroll"
            className="list-group overflow-auto"
            id="list-tab"
            role="tablist"
            data-bs-offset="0"
            tabindex="0"
            style={{ height: "672px" }}
          >
            <div className="d-flex flex-row-reverse bd-highlight">
              <div className="p-2 bd-highlight">
                <div
                  className="card  float-end d-flex justify-content-end bd-highlight"
                  style={{ maxWidth: 800 }}
                >
                  <div className="row g-0 bd-highlight">
                    <div className="col-10">
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.This is a wider card with
                          supporting text below as a natural lead-in to
                          additional
                        </p>
                        <p className="card-text text-end ">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-2 justify-content-center text-center mt-3 mb-4">
                      <img
                        style={{
                          height: "80%",
                          width: "70%",
                          borderRadius: "10%",
                        }}
                        src="https://www.gendruk.com/wp-content/uploads/2015/11/kucing-lucu.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row bd-highlight">
              <div className="p-2 bd-highlight">
                <div
                  className="card  float-end d-flex bd-highlight"
                  style={{ maxWidth: 800 }}
                >
                  <div className="row g-0 bd-highlight">
                    <div className="col-2 justify-content-center text-center mt-3 mb-4">
                      <img
                        style={{
                          height: "80%",
                          width: "70%",
                          borderRadius: "10%",
                        }}
                        src="https://www.gendruk.com/wp-content/uploads/2015/11/kucing-lucu.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="col-10">
                      <div className="card-body">
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.This is a wider card with
                          supporting text below as a natural lead-in to
                          additional
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group input-group-sm ">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
