import { DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const RenderDropdown = ({ icon, menu, style }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {icon ? <i {...icon}></i> : "dropdown"}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {Array.isArray(menu) ? (
          menu.map((data, index) => {
            return (
              <Dropdown.Item key={index} onClick={() => data.func} eventKey="1">
                {data.name}
              </Dropdown.Item>
            );
          })
        ) : (
          <React.Fragment>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
          </React.Fragment>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export { Dropdown, DropdownButton, RenderDropdown };
