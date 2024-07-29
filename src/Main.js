import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ListingSection from "./ListingSection.js";
import InfoSection from "./InfoSection.js";
import SleepSection from "./SleepSection.js";
import AmenitiesSection from "./AmenitiesSection.js";
import CalendarSection from "./CalendarSection.js";
import HostDetailsSection from "./HostDetailsSection.js";
import ThingsToKnowSection from "./ThingsToKnowSection.js";
import ShimmerComponent from "./Shimmer.js";

import axios from "axios";
import config from "./config.json";

const Main = () => {
  const { slug } = useParams();

  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`${config.apiBaseUrl}/hotel/${slug}`);
        console.log(response);
        setHotel(response.data);
      } catch (err) {
        setError("Hotel not found");
      }
    };

    fetchHotel();
  }, [slug]);

  if (error) {
    return (
      <div>
        <Header />
        <div>{error}</div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div>
        <Header />
        <div><ShimmerComponent /></div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <ListingSection hotel={hotel} />
        <InfoSection hotel={hotel} />
        <SleepSection photos ={hotel.images}/>
        <AmenitiesSection amenities = {hotel.amenities} />
        <CalendarSection />
        <HostDetailsSection host={hotel.host_information}/>
        <ThingsToKnowSection />
      </main>
    </div>
  );
};

export default Main;
