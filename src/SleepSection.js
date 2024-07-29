import React from 'react';
import config from "./config.json";

const SleepSection = ({ rooms }) => {
    return (
        <section className="sleep-section">
            <h2>Where you'll sleep</h2>
            <div className="sleep-details-container">
                {rooms.map((room, index) => (
                    <div className="sleep-details" key={index}>
                        <img src={`${config.apiBaseUrl}${room.room_image}`} alt={room.room_title} />
                        <div className="sleep-info">
                            <p className="sleep-title">{room.room_title}</p>
                            <p className="sleep-description">{room.bedroom_count} {room.bedroom_count > 1 ? 'beds' : 'bed'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SleepSection;
