import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import navbarhome from "../styles/navbarhome.css";

const Navbarhome = () => {
  function goHome(){
    window.location.href = "http://localhost:3000/";
}

  return (
    <div class="content">
    <img width={"115vw"} height={"65vh"} src={logo}
    onClick={goHome}></img>
      <div class="options">
        <Link to="/login">Sign in</Link>
        <Link to="/cadastro">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbarhome;
