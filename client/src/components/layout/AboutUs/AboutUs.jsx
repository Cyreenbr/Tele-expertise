import React from 'react';
import './AboutUs.css'; 
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="about-us-section">
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/images/Doctors3.jpg`} alt="About us" className="profile-image"/>
                <div className="graphic-element"></div>
            </div>
            <div className="text-container">
                <h2>About Us</h2>
                <p>
                Bienvenue sur notre plateforme de télé-expertise médicale. Nous connectons des médecins spécialistes pour collaborer et améliorer les soins aux patients. Notre mission est de faciliter l'accès à des avis médicaux de qualité à travers une application sécurisée et intuitive.
                </p>
                <Link to="/create-account" className="learn-more-btn">CREATE ACCOUNT</Link>
            </div>
        </div>
    );
};

export default AboutUs;
