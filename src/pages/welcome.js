import React from "react";
import Navbarhome from "../components/navbarhome";
import background from "../assets/background.png";
import welcome from "../styles/welcome.css";
const Welcome = () => {
  return (
    <div>
      <Navbarhome />
      <div className="home" style={{ backgroundImage: `url(${background}` }}>
        <div class="message">
          <p id="1">Cisum é para mim, é para você, é para nós</p>
          <p id="2">Encontre seu novo ritmo de viver, use Cisum</p>
        </div>
        <button class="button">Acessar</button>
      </div>
    </div>
  );
};

export default Welcome;
