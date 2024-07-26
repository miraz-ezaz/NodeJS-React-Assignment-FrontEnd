import React from 'react';


const SleepSection = () => {
    return (
        <section className="sleep-section">
            <h2>Where you'll sleep</h2>
            <div className="sleep-details">
                <img src={`../public/images/img1.jpg`} alt="Bedroom" />
                <div className="sleep-info">
                    <p className="sleep-title">Bedroom</p>
                    <p className="sleep-description">1 double bed</p>
                </div>
            </div>
        </section>
    );
};

export default SleepSection;
