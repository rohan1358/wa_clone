import React from "react";

function NavbarLeft({ openNav, RenderDropdown, user }) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
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
                onClick={() => openNav()}
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
                    menu: [
                      {
                        name: "logOut",
                        func: console.log("test"),
                      },
                    ],
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavbarLeft;
