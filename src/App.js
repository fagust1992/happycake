import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navar";
import Contacto from "./views/Contacto";
import Home from "./views/Home";
import Img from "./components/assets/imagenes/Img";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <NavBar />

          <Routes>
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/"
              element={<Home ruta_img1={Img.img1} ruta_img2={Img.img2} />}
            />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
