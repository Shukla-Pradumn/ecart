import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Welcome to Pradumn's Shopping Mall </h2>
        <Link to="/Signin">SignIn</Link>
        <Link to="/">Home</Link>
      </div>
      
      <a href="mailto: pm87289@gmail.com">Send Email</a>
      <a href="tel:+8172827332">Call</a>
    </div>
    </>
  );
};

export default Header;