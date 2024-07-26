import React from 'react';

const HostDetailsSection = () => {
    return (
        <section>
            <h2>Meet your Host</h2>
            <div className="host-details">
                <div className="profile-section">
                    <div className="card-body">
                        <div className="host-card">
                            <div className="host-profile">
                                <img src="host.jpg" alt="Fernando" />
                            </div>
                            <div className="host-info">
                                <h2>Fernando</h2>
                                <p>Superhost</p>
                            </div>
                            <div className="host-stats">
                                <div className="stat">
                                    <span className="stat-value">310</span>
                                    <span className="stat-label">Reviews</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">4.92<span className="star">★</span></span>
                                    <span className="stat-label">Rating</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">7</span>
                                    <span className="stat-label">Years hosting</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="additional-info">
                        <p><span className="icon">📍</span> Born in the 80s</p>
                        <p><span className="icon">💼</span> My work: Hospitality</p>
                        <p>Hello world! I love traveling and I also love welcoming guests in my home country, Perú,
                            meeting
                            new...</p>
                        <a href="#">Show more</a>
                    </div>
                </div>
                <div className="details-section">
                    <h2>Fernando is a Superhost</h2>
                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for
                        guests.</p>
                    <div className="co-hosts">
                        <h3>Co-Hosts</h3>
                        <div className="co-host">
                            <img src="host.jpg" alt="Percy" />
                            <span>Percy</span>
                        </div>
                        <div className="co-host">
                            <span className="initial">R</span>
                            <span>Raul</span>
                        </div>
                    </div>
                    <div className="host-info">
                        <span><strong>Host details</strong></span>
                        <div>
                            <p>Response rate: 100%</p>
                            <p>Responds within an hour</p>
                        </div>
                        <button id="msgHostBtn">Message Host</button>
                    </div>
                    <a href="#">Individual Host</a>
                </div>
            </div>
        </section>
    );
};

export default HostDetailsSection;
