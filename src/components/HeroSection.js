import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <h1>Book an appointment with <span>lifestyle medicine</span> experts</h1>
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
            <div className="search-bar">
                <input type="text" placeholder="Condition, procedure, specialty..." />
                <input type="text" placeholder="City, state, or zipcode" />
                <input type="text" placeholder="Insurance carrier" />
                <button>Find now</button>
            </div>
        </section>
    );
};

export default HeroSection;
