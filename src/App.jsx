import { useEffect, useState } from "react";
import "./App.css";
import BackToTop from "./assets/top.svg";
import Wa from "./assets/wa.svg";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 200;
    const shouldShow = window.pageYOffset > scrollThreshold;
    setShowBackToTop(shouldShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const textElements = document.querySelectorAll('body *:not(script)'); // Memilih semua elemen di dalam <body> kecuali <script>

    textElements.forEach((element) => {
      element.addEventListener('click', () => {
        element.classList.toggle('highlighted-text');
      });
    });
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading ? (
        <main className="main">
          {/* Add the 'show' class when 'showBackToTop' is true */}
          <button
            className={`back ${showBackToTop ? "show" : ""}`}
            type="button"
            onClick={handleBackToTop}
          >
            <img src={BackToTop} alt="" width="50px" />
          </button>
          <button className="wa" type="button">
            <a href="https://wa.me/6288286819860" target="__blank">
              <img src={Wa} alt="" width="50px" />
            </a>
          </button>
          <Cursor/>
          <Header />
          <Home />
          <Services />
          <Skills />
          <Portfolio />
          <Resume />
          <Contact />
          <Footer />
        </main>
      ) : (
        <div className="circ-wrapper">
          <div className="circ">
            <div className="load">Memuat . . . </div>
            <div className="hands"></div>
            <div className="body"></div>
            <div className="head">
              <div className="eye"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
