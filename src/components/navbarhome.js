import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import navbarhome from "../styles/navbarhome.css";

const Navbarhomehomehomehomehomehomehomehomehome = () => {
  return (
    <div class="content">
    <img width={"115vw"} height={"65vh"} src={logo}></img>
      <div class="options">
        <Link to="/login">Sign in</Link>
        <Link to="/cadastro">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbarhomehomehomehomehomehomehomehomehome;
