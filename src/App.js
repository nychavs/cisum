import React from "react";
// import Navbar from './components/Navbar';
import Welcome from "./pages/welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
