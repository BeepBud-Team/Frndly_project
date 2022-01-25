import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Features />
      {/* <Map location={location} zoomLevel={17} /> */}
      <Footer />
    </div>
  );
}

export default App;
