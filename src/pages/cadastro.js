import React from "react";
import cadastro from "../styles/cadastro.css"
import Navbarhome from "../components/navbarhome"

const Cadastro = () => {

  function goHome(){
    window.location.href = "http://localhost:3000/home";
}

  return (
    <div>
      <Navbarhome/>
      <div class="login-content">
        <div class="login-box">
      <form>
      <h1>Bem vindo de volta!</h1>
      <div class="dois">
        <div class="doisdois">
        <label>Nome</label>
            <input 
            type='text' 
            id='usuario' 
            name='nome' 
            /><br/>
            </div>
        <div class="doisdois">
        <label>Sobrenome</label>
            <input 
            type='text' 
            id='usuario' 
            name='sobrenome' 
            /><br/>
            </div> 
        </div>
        <div class="email">
        <label>Email</label>
            <input 
            type='text' 
            id='usuario' 
            name='email' 
            /><br/>
            </div>
            <div class="dois">
            <div class="doisdois">
            <label>Senha</label>
            <input
            type='password' 
            id='senhaUsuario' 
            name='senhaUsuario' 
            /><br/>
            </div>
            <div class="doisdois">
            <label>Confirmar senha</label>
            <input
            type='password' 
            id='senhaUsuario' 
            name='confirmarSenha' 
            /><br/>
            </div>  
            </div>    
            <button 
            type="submit" 
            value="Submit" 
            onClick={goHome}
            > 
            Prosseguir
            </button>
          </form>
          </div>
        </div>
      </div>
  );
};

export default Cadastro;
