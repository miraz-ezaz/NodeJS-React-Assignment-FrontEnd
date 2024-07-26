import React from 'react';

const InfoSection = () => {
    const handleCheckAvailability = () => {
        // Add functionality for checking availability
        console.log('Checking availability...');
    };

    const handleReportListing = () => {
        // Add functionality for reporting the listing
        console.log('Reporting this listing...');
    };

    return (
        <section className="infoSection">
            <section className="rental-listing">
                <div className="listing-header">
                    <h1>Entire rental unit in Lima, Peru</h1>
                    <p>2 guests · 1 bedroom · 1 bed · 1 bathroom</p>
                    <p className="new-label">★ New</p>
                </div>
                <div className="host-info">
                    <div className="host-profile">
                        <img src="host.jpg" alt="Host" />
                        <div>
                            <p>Hosted by Fernando</p>
                            <p>Superhost · 7 years hosting</p>
                        </div>
                    </div>
                </div>
                <div className="listing-features">
                    <div className="feature">
                        <p>🛠 Self check-in</p>
                        <p>Check yourself in with the smartlock.</p>
                    </div>
                    <div className="feature">
                        <p>⭐ Fernando is a Superhost</p>
                        <p>Superhosts are experienced, highly rated Hosts.</p>
                    </div>
                </div>
                <div className="translation-info">
                    <p>Some info has been automatically translated. <a href="#">Show original</a></p>
                </div>
                <div className="listing-description">
                    <p>Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park!</p>
                    <p>It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from
                        Clínica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa
                        Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La ...</p>
                    <a href="#">Show more</a>
                </div>
            </section>

            <section className="booking-section">
                <div className="booking-container">
                    <h2>Add dates for prices</h2>
                    <button className="date-button">
                        <div className="date">
                            <span className="label">CHECK-IN</span>
                            <span className="value">Add date</span>
                        </div>
                        <div className="date">
                            <span className="label">CHECKOUT</span>
                            <span className="value">Add date</span>
                        </div>
                    </button>
                    <div className="guests">
                        <span className="label">GUESTS</span>
                        <select>
                            <option>1 guest</option>
                            <option>2 guests</option>
                            <option>3 guests</option>
                            <option>4 guests</option>
                        </select>
                    </div>
                    <button className="availability-button" onClick={handleCheckAvailability}>Check availability</button>
                    <a href="#" className="report-link" onClick={handleReportListing}>Report this listing</a>
                </div>
            </section>
        </section>
    );
};

export default InfoSection;
