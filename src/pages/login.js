import React from "react";
import login from "../styles/login.css"
import Navbarhome from "../components/navbarhome"
const Login = () => {
  return (
    <div>
      <Navbarhome/>
      <div class="login-content">
        <div class="login-box">
      <form>
      <h1>Bem vindo de volta!</h1>
        <label>Nome de usuário ou email</label>
            <input 
            type='text' 
            id='usuario' 
            name='usuario' 
            /><br/>
            <label>Senha</label>
            <input
            type='password' 
            id='senhaUsuario' 
            name='senhaUsuario' 
            /><br/>
            <button 
            type="submit" 
            value="Submit" 
            > 
            Prosseguir
            </button>
          </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
