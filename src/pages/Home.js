import React ,{ useEffect } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Poster from "../components/Poster";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Navbar />
      <Poster />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
