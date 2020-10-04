import React from "react";

const Banner = props => (
  <div className="banner" onClick={props.bannerToggle}>
    <h1 className="headline">
      {props.bannerTitle ? "Welcome!" : "Have a Good Time!"}
    </h1>
  </div>
);

export default Banner;
