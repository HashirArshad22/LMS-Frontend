import React, { useEffect, useState } from 'react';
import 'react-scroll';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 660);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const[mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () =>{

        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
                <li>
                    <Link to="/" smooth={true} offset={0} duration={500}>HOME</Link>
                </li>
                <li>
                    <Link to="" smooth={true} offset={-200} duration={500}>
                        <button className='btn'>CONTACT US</button>
                    </Link>
                </li>
            </ul>
            <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
        </nav>
    );
};

export default Navbar;
