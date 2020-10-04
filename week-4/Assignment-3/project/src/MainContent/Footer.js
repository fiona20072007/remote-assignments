import React from "react";

const Footer = props => (
  <footer className="main-footer">
    <button className="call" onClick={props.sectionAddToggle}>
      Call to Action
    </button>
  </footer>
);

export default Footer;
