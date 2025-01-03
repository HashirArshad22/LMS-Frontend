import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Hero from "./Hero/Hero";
import Programs from "./Programs/Programs";
import About from "./About/About";
import Campus from "./Campus/Campus";
import Facilities from "./Facilities/Facilities";
import Contact from "./Contact/Contact";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import "./Homestyle.css";

const Home = () => {
  const { currentRole, currentUser } = useSelector((state) => state.user);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 660);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
              HOME
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="program" smooth={true} offset={-260} duration={500}>
              PROGRAM
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
              ABOUT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="campus" smooth={true} offset={-260} duration={500}>
              CAMPUS
            </ScrollLink>
          </li>
          <li>
            {currentRole === null || (currentRole === 'Admin' && currentUser !== null && !currentUser.isVerified) ? (
              <RouterLink to="/choose">LOGIN</RouterLink>
            ) : (
              <RouterLink to={`${currentRole}/Dashboard`}>LOGIN</RouterLink>
            )}
          </li>
          <li>
            <ScrollLink to="Contact" smooth={true} offset={-200} duration={500}>
              <button className="btn">CONTACT US</button>
            </ScrollLink>
          </li>
        </ul>
        <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
      </nav>
      <Hero />
      <div className="container">
        <Programs />
        <About />
        <Campus />
        <Facilities />
        <Contact />
      </div>
    </>
  );
};

export default Home;
