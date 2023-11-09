import profileImageBlack from"../../assets/php2-logo.svg";
// import profileImageWhite from "../../assets/fajri-putih.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaInstagram, FaGithub } from "react-icons/fa";
import CV from "../../assets/cvats.pdf";
import "./home.css";
// import { useState } from "react";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__wrapper">
          <div className="home__container container">
            <p className="home__subtitle text-cs">
              Halo <span>Namaku</span>
            </p>

            <h1 className="home__title text-cs">
              <span>RAHMAD</span>CHAD
            </h1>

            <p className="home__job">
              <span className="text-cs">Saya adalah seorang</span> <b>Web Developer</b>
            </p>

            <div className="home__img-wrapper">
              <div className="home__banner">
                <img src={profileImageBlack} className="home__profile" alt="" />
              </div>

              <p className="home__data home__data-one">
                <span className="text-lg">
                  0 <b>+</b>
                </span>

                <span className="text-sm text-cs">
                  Tahun <span>Pengalaman</span>
                </span>
              </p>

              <p className="home__data home__data-two">
                <span className="text-lg">
                  1 <b>+</b>
                </span>

                <span className="text-sm text-cs">
                  Proyek <span>Tuntas</span>
                </span>
              </p>

              <img src={shapeOne} alt="" className="shape shape__1" />
              <img src={shapeTwo} alt="" className="shape shape__2" />
              <img src={shapeTwo} alt="" className="shape shape__3" />
            </div>

            <p className="home__text">
            Sebagai pengembang web, saya memiliki pengalaman dalam beberapa proyek dan saya antusias mencari peluang kerja penuh waktu atau paruh waktu. Saya berkomitmen untuk memberikan solusi berkualitas tinggi dalam proyek-proyek masa depan.
            </p>

            <div className="home__socials">
              <a
                href="https://github.com/sedanight"
                target="__blank"
                className="home__social-link"
              >
                <FaGithub />
              </a>
              
              <a
                href="https://instagram.com/isrifans"
                target="__blank"
                className="home__social-link"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="home__btns">
              <a href={CV} download="" className="btn text-cs">
                Unduh CV
              </a>

              <a href="#skills" className="hero__link text-cs">
                Keahlian-ku
              </a>
            </div>
          </div>

          <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Home</span>
        </div>
      </section>
    </>
  );
};

export default Home;
