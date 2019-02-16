import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/globals/Navbar";

// import "./bootstrap.min.css";
// import "./layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
