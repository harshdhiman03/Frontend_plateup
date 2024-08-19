import React from 'react';
import Card from './Card';
import './PillarsSection.css';

function PillarsSection({ pillars }) {
    return (
        <section className="pillars-section">
            <h2 className="pillars-heading">Lifestyle as Medicine: The Six Pillars</h2>
            <div className="pillars-container">
                {pillars.map((pillar, index) => (
                    <Card
                        key={index}
                        image={pillar.image}
                        title={pillar.title}
                        description={pillar.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default PillarsSection;
