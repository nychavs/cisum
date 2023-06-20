import React from "react";
import home from "../styles/home.css"
import logo from "../assets/logo.png";

const musicas = [
  {name: "cardigan",
  singer: "taylor"},
  {name: "r u mine",
  singer: "arctic monkeys"}]; 

const Home = () => {
  <>
  <h1>teste</h1>
  {musicas.map((item, index) => (
    <div key={index}>
      <div class="home-container">
      <img width={"115vw"} height={"65vh"} src={logo}></img>
          <p>Name: {item.name}</p>
          <p>Singer: {item.singer}</p>
        </div>
      </div>
      ))}
  );
  </>
};

export default Home;
