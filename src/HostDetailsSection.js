import React from 'react';
import config from "./config.json";

const HostDetailsSection = ({host}) => {
    return (
        <section>
            <h2>Meet your Host</h2>
            <div className="host-details">
                <div className="profile-section">
                    <div className="card-body">
                        <div className="host-card">
                            <div className="host-profile">
                                <img src={`${config.apiBaseUrl}${host.image}`} alt={host.name} />
                            </div>
                            <div className="host-info">
                                <h2>{host.name}</h2>
                                <p>{host.category}</p>
                            </div>
                            <div className="host-stats">
                                <div className="stat">
                                    <span className="stat-value">{host.reviews}</span>
                                    <span className="stat-label">Reviews</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">{host.rating}<span className="star">★</span></span>
                                    <span className="stat-label">Rating</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value">{host.years}</span>
                                    <span className="stat-label">Years hosting</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="additional-info">
                        <p><span className="icon">📍</span> My work: {host.name}</p>
                        <p><span className="icon">💼</span> Love to do: {host.hobby}</p>
                        <p>{host.about}</p>
                        <a href="#">Show more</a>
                    </div>
                </div>
                <div className="details-section">
                    <h2>{host.name} is a {host.category}</h2>
                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for
                        guests.</p>
                        <div className="co-hosts">
            <h3>Co-Hosts</h3>
            {host.co_hosts.map((coHost, index) => (
                <div className="co-host" key={index}>
                    <span className="initial">{coHost.charAt(0).toUpperCase()}</span>
                    <span>{coHost}</span>
                </div>
            ))}
        </div>
                    <div className="host-info">
                        <span><strong>Host details</strong></span>
                        <div>
                            <p>Response rate: {host.response_rate}</p>
                            <p>Responds within {host.response_time}</p>
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
