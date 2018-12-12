import React, { Component } from "react";
// import { render } from "react-dom";
import NavLink from "./NavLink";
import "../styles/css/index.css";

const Logo = () => {
  return <p className="nav-title">Navigate</p>;
};

class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false
  //   };
  // }

  render() {
    const home = "Home";
    const about = "About";
    const github = "GitHub";

    return (
      <div className="appnav-wrapper">
        <Logo />
        <NavLink linkName={home} />
        <NavLink linkName={about} />
        <NavLink linkName={github} />
      </div>
    );
  }
}

// render(<Navbar />, document.getElementById("navbar"));

export default Navbar;
