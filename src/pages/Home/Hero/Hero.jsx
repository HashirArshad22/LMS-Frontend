import React, { useState } from 'react';
import './Hero.css';
import arrow from '../../../assets/arrow.png';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for navigation

const Hero = () => {
    const [message, setMessage] = useState("Welcome to our platform!");

    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>BETTER EDUCATION LEADS TOWARDS BETTER WORLD</h1>
                <p>{message}</p>
                <RouterLink to="/applynow"> {/* Add the Apply Now button */}
                    <button className='btn apply-now-btn'>Apply Now <img src={arrow} alt="Arrow" />
                    </button>
                </RouterLink>
            </div>
        </div>
    );
}

export default Hero;
