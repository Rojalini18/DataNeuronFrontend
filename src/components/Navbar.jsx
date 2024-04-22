import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#4CAF50",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  };

  const linkStyle = {
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 20px",
    textDecoration: "none",
    fontSize: "17px",
    margin: "0 10px",
  };

  const linkHoverStyle = {
    backgroundColor: "#000",
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle} activeStyle={linkHoverStyle}>
        Home
      </Link>
      <Link to="/todo" style={linkStyle} activeStyle={linkHoverStyle}>
        Create Todo's
      </Link>
    </nav>
  );
};

export default Navbar;
