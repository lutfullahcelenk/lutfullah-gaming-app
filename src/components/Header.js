import React from "react";
import Logo from "../assets/logo.jpg"
const Header = () => {
  return (
    <nav className="navbar navbar-light bg-secondary d-flex justify-content-center">
      <a className="navbar-brand" href="https://communitygaming.io/" target="_blank">
        <img
          src={Logo}
          className="logo d-inline-block align-top"
          alt="logo"
        />
      </a>
    </nav>
  );
};
export default Header;