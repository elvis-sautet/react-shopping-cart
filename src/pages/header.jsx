import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <nav style={navStyle}>
      <h2 style={{ color: "gold" }}>
        {" "}
        JStore
        <span className="text-secondary">
          Code <small>react</small>
        </span>
      </h2>
      <Link style={headerLink} to="/">
        Home
      </Link>{" "}
      <span style={{ color: "white" }}>|</span>{" "}
      <Link style={headerLink} to="/cart">
        Cart{""}
        <sup style={{ color: "yellow" }}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </sup>
      </Link>{" "}
      <span style={{ color: "white" }}>|</span>{" "}
      <Link style={headerLink} to="/about">
        About
      </Link>
    </nav>
  );
}
const navStyle = {
  background: "#333",
  padding: "5px",
  width: "100%",
  textAlign: "center",
  position: "sticky",
  top: "0",
  zIndex: "120000",
};
const headerLink = {
  color: "orange",
  textDecoration: "none",
  cursor: "pointer",
};
export default Header;
