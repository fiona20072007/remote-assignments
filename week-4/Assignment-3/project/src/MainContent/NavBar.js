import React from "react";

const NavBar = props => {
  if (props.menuShow) {
    return (
      <div class="nav-bar">
        <ul class="sidebar">
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
        <h3 class="exit" onClick={props.menuToggle}>
          X
        </h3>
      </div>
    );
  }
  return null;
};

export default NavBar;
