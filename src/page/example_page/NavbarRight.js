import React, { Component } from "react";

export default class NavbarRight extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
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
                  <this.props.RenderDropdown
                    icon={{
                      className: "bi bi-three-dots-vertical",
                      style: { color: "black" },
                    }}
                    menu={[
                      {
                        name: "logOut",
                        func: () => this.props.signOut(),
                      },
                    ]}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
