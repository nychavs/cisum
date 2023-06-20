import React from "react";
import Welcome from "./pages/welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Detalhes from "./pages/detalhes";
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/detail/:nome/:singer/:video" element={<Detalhes />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
