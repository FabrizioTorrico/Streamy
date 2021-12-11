import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
// id 39435210376-cfgq7lllhq7p2v62gihh5108vg193o71.apps.googleusercontent.com
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/streams/show" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
