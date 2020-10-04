import React from "react";

import NavBar from "../MainContent/NavBar";
import img from "../img/icon.png";

const Header = props => (
  <header className="main-header">
    <h1 className="name">
      <a href="#">
        <img src={img} />
        GO
      </a>
    </h1>
    <ul className="main-nav">
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
    <a href="#" className="button-toggle" onClick={props.menuToggle}>
      三
    </a>
    <NavBar menuShow={props.menuShow} menuToggle={props.menuToggle} />
  </header>
);

export default Header;
