import React from "react"
import { useParams } from "react-router-dom";
import detalhes from "../styles/detalhes.css"
import Navbar from "../components/navbar";

const Detalhes = () => {
    const { nome, singer, video } = useParams();
    return (
      <div>
        <Navbar/>
        <div class="detalhes-container">
        <div class="video">
            <iframe width="699" 
            height="393" 
            src={video} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
        </div>
        <h1>{nome}</h1>
        <h1>{singer}</h1>
        </div>
      </div>
    );
  };
export default Detalhes;  
  