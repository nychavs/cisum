import React from "react";
import Navbarhome from "../components/navbarhome";
import background from "../assets/background.png";
import welcome from "../styles/welcome.css";
import {Link} from "react-router-dom"

const Welcome = () => {
  return (
    <div>
      <Navbarhome />
      <div className="home" style={{ backgroundImage: `url(${background}` }}>
        <div class="message">
          <div class="msg1">
            <p id="1">Cisum é para mim,<br></br>é para você, é para nós</p>
          </div>
          <div class="msg2">
            <p id="2">Encontre seu novo ritmo<br></br>de viver, use Cisum</p>
          </div>
        </div>
        <div class="btn">
          <Link to="/login">Acessar </Link>
        </div>
      </div>
      </div>
  )}
export default Welcome;
