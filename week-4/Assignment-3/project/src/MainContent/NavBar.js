import React from "react";

const NavBar = props => {
  if (props.menuShow) {
    return (
      <div className="nav-bar">
        <ul className="sidebar">
          <li>
            <a href="#">item1</a>
          </li>
          <li>
            <a href="#">item2</a>
          </li>
          <li>
            <a href="#">item3</a>
          </li>
          <li>
            <a href="#">item4</a>
          </li>
        </ul>
        <h3 className="exit" onClick={props.menuToggle}>
          X
        </h3>
      </div>
    );
  }
  return null;
};

export default NavBar;
