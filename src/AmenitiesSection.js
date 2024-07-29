import React from 'react';

const AmenitiesSection = ({amenities}) => {
    // Icons mapping
    const icons = {
        Kitchen: '🍽️',
        TV: '📺',
        'Washing machine': '🧺',
        'Hair dryer': '💇',
        'Carbon monoxide alarm': '🚫',
        Wifi: '📶',
        Lift: '🛗',
        Dryer: '🌀',
        Fridge: '🧊',
        'Smoke alarm': '🚫'
    };
    return (
        <section className="amenities">
            <h2>What this place offers</h2>
            <ul className="amenities-list">
                {amenities.map((amenity, index) => (
                    <li
                        key={index}
                        className={amenity === 'Carbon monoxide alarm' || amenity === 'Smoke alarm' ? 'unavailable' : ''}
                    >
                        <span className="icon">{icons[amenity] || '❓'}</span> {amenity}
                    </li>
                ))}
            </ul>
            <button id="amenitiesBtn">Show all 32 amenities</button>
        </section>
    );
};

export default AmenitiesSection;
