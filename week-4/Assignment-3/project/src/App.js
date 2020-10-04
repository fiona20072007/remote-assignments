import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Banner from "./MainContent/Banner";
import Section from "./MainContent/Section";
import Footer from "./MainContent/Footer";
import SectionAdd from "./MainContent/SectionAdd";

class App extends Component {
  state = {
    bannerTitle: true,
    menuShow: false,
    sectionAddShow: false
  };

  bannerToggle = () =>
    this.setState({
      bannerTitle: !this.state.bannerTitle
    });

  menuToggle = () =>
    this.setState({
      menuShow: !this.state.menuShow
    });

  sectionAddToggle = () =>
    this.setState({
      sectionAddShow: !this.state.sectionAddShow
    });

  render() {
    return (
      <div className="body">
        <Header menuShow={this.state.menuShow} menuToggle={this.menuToggle} />
        <Banner
          bannerTitle={this.state.bannerTitle}
          bannerToggle={this.bannerToggle}
        />
        <Section />
        <Footer sectionAddToggle={this.sectionAddToggle} />
        <SectionAdd sectionAddShow={this.state.sectionAddShow} />
      </div>
    );
  }
}

export default App;
