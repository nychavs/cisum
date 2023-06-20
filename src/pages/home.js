import React from "react";
import home from "../styles/home.css";
import logo from "../assets/logo.png";
import Navbar from "../components/navbar.js"
import rumine from '../assets/rumine.jpg'
import cardigan from "../assets/taylor-swift-cardigan2.jpg"
import { Link } from "react-router-dom";


const musicas = [
  { name: "cardigan", singer: "taylor", img:cardigan, video:"https://www.youtube.com/embed/K-a8s8OLBSE" },
  { name: "r u mine", singer: "arctic monkeys", img:rumine, video:"https://www.youtube.com/embed/ngzC_8zqInk" },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine },
  { name: "r u mine", singer: "arctic monkeys", img:rumine }
];

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div class="home-container">
        <div class="square-container">
        {musicas.map((item,index) => (
          <div class="square" key={index}>
             <Link to={`/detail/${item.name}/${item.singer}/${encodeURIComponent(item.video)}`}>
                <img width={"106vw"} height={"80vh"} src={item.img} alt="Imagem" />
              </Link>
              <p>{item.name}</p>
              <p>{item.singer}</p>
            </div>
        ))}
      </ div>
    </div>
      </div>
  );
};

export default Home;
