import React from 'react';
import './Card.css';

function Card({ image, title, description }) {
    return (
        <div className="card">
            <img src="C:\Users\Harsh\frontend_plateup\my-provital-landing-page\public\images\Rectangle 3468480.png" alt="Nutrition" className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

export default Card;
