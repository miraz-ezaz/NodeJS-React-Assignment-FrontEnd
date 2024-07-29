import React from 'react';
import config from "./config.json";

const InfoSection = ({hotel}) => {
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
                    <h1>{`Entire rental unit in ${hotel.address}`} </h1>
                    <p>{`${hotel.guest_count} guests · ${hotel.bedroom_count} bedroom · ${hotel.bedroom_count} bed · ${hotel.bathroom_count} bathroom`}</p>
                    <p className="new-label">★ New</p>
                </div>
                <div className="host-info">
                    <div className="host-profile">
                        <img src={`${config.apiBaseUrl}${hotel.host_information.image}`} alt="Host" />
                        <div>
                            <p>{`Hosted by ${hotel.host_information.name}` }</p>
                            <p>{`${hotel.host_information.category}· ${hotel.host_information.years}  years hosting`}</p>
                        </div>
                    </div>
                </div>
                <div className="listing-features">
                    <div className="feature">
                        <p>🛠 Self check-in</p>
                        <p>Check yourself in with the smartlock.</p>
                    </div>
                    <div className="feature">
                        <p>{`⭐ ${hotel.host_information.name} is a ${hotel.host_information.category}`}</p>
                        <p>Superhosts are experienced, highly rated Hosts.</p>
                    </div>
                </div>
                <div className="translation-info">
                    <p>Some info has been automatically translated. <a href="#">Show original</a></p>
                </div>
                <div className="listing-description">
                    
                    <p>{hotel.description}</p>
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
