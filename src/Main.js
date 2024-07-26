import React, { useState, useEffect } from 'react';
import ListingSection from './ListingSection.js';
import InfoSection from './InfoSection.js';
import SleepSection from './SleepSection.js';
import AmenitiesSection from './AmenitiesSection.js';
import CalendarSection from './CalendarSection.js';
import HostDetailsSection from './HostDetailsSection.js';
import ThingsToKnowSection from './ThingsToKnowSection.js';

import axios from 'axios';
import config from './config.json';

const Main = ({ slug }) => {

    const [hotel, setHotel] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await axios.get(`${config.apiBaseUrl}/hotel/${slug}`);
                console.log(response);
                setHotel(response.data);
            } catch (err) {
                setError('Hotel not found');
            }
        };

        fetchHotel();
    }, [slug]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!hotel) {
        return <div>Loading...</div>;
    }


    return (
          <main>
            <ListingSection hotel={hotel}/>
            <InfoSection />
            <SleepSection />
            <AmenitiesSection />
            <CalendarSection />
            <HostDetailsSection />
            <ThingsToKnowSection />
          </main>
        
      );

};

export default Main;