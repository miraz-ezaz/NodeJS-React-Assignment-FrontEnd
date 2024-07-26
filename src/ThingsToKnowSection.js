import React from 'react';

const ThingsToKnowSection = () => {
    return (
        <section className="things-to-know">
            <h2>Things to know</h2>
            <div className="rules">
                <h3>House rules</h3>
                <p>Check-in after 16:00</p>
                <p>Checkout before 11:00</p>
                <p>2 guests maximum</p>
                <a href="#">Show more</a>
            </div>
            <div className="safety">
                <h3>Safety & property</h3>
                <p>Carbon monoxide alarm not reported</p>
                <p>Smoke alarm not reported</p>
                <p>Not suitable for children and infants</p>
                <a href="#">Show more</a>
            </div>
            <div className="cancellation">
                <h3>Cancellation policy</h3>
                <p>Add your trip dates to get the cancellation details for this stay.</p>
                <a href="#">Add dates</a>
            </div>
        </section>
    );
};

export default ThingsToKnowSection;
