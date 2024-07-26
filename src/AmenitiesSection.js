import React from 'react';

const AmenitiesSection = () => {
    return (
        <section className="amenities">
            <h2>What this place offers</h2>
            <ul className="amenities-list">
                <li><span className="icon">🍽️</span> Kitchen</li>
                <li><span className="icon">📺</span> TV</li>
                <li><span className="icon">🧺</span> Washing machine</li>
                <li><span className="icon">💇</span> Hair dryer</li>
                <li className="unavailable"><span className="icon">🚫</span> Carbon monoxide alarm</li>
                <li><span className="icon">📶</span> Wifi</li>
                <li><span className="icon">🛗</span> Lift</li>
                <li><span className="icon">🌀</span> Dryer</li>
                <li><span className="icon">🧊</span> Fridge</li>
                <li className="unavailable"><span className="icon">🚫</span> Smoke alarm</li>
            </ul>
            <button id="amenitiesBtn">Show all 32 amenities</button>
        </section>
    );
};

export default AmenitiesSection;
