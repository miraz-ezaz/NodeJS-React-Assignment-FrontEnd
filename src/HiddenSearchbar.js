import React, { useState, useEffect, useRef } from 'react';
import './searchbar.css';

const HiddenSearchbar = () => {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [extraDate, setExtraDate] = useState(null);
  const [isHiddenBar, setIsHiddenBar] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [showRegionPopup, setShowRegionPopup] = useState(false);

  const [countAdults, setCountAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countInfants, setCountInfants] = useState(0);
  const [countPets, setCountPets] = useState(0);

  const [activeTab, setActiveTab] = useState('calendars');

  const searchBarRef = useRef();
  const regionPopupRef = useRef();
  const calendarPopupRef = useRef();
  const guestPopupRef = useRef();

  const formatDate = (inputDate) => {
    const [year, month, day] = inputDate.split('-');
    const date = new Date(year, month - 1, day);
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[date.getMonth()];
    const dayOfMonth = date.getDate();

    if (extraDate) {
      return `${monthName} ${dayOfMonth} ± ${extraDate}`;
    }
    return `${monthName} ${dayOfMonth}`;
  };

  const renderDate = () => {
    if (checkinDate) {
      document.getElementById('checkin').value = formatDate(checkinDate);
    }
    if (checkoutDate) {
      document.getElementById('checkout').value = formatDate(checkoutDate);
    }
  };

  const selectDate = (date) => {
    if (!checkinDate || (checkinDate && checkoutDate)) {
      setCheckinDate(date);
      setCheckoutDate(null);
      document.getElementById('checkin').value = formatDate(date);
      document.getElementById('checkout').value = '';
    } else {
      if (new Date(date) > new Date(checkinDate)) {
        setCheckoutDate(date);
        document.getElementById('checkout').value = formatDate(date);
      } else {
        setCheckinDate(date);
        document.getElementById('checkin').value = formatDate(date);
        setCheckoutDate(null);
        document.getElementById('checkout').value = '';
      }
    }
  };

  const addExtraDate = (value) => {
    setExtraDate(value);
    renderDate();
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    if (showGuestPopup) setShowGuestPopup(false);
  };

  const toggleGuestPopup = () => {
    setShowGuestPopup(!showGuestPopup);
    if (showCalendar) setShowCalendar(false);
  };

  const selectSection = (sectionId) => {
    setShowRegionPopup(sectionId === 'where-section');
    setShowCalendar(sectionId === 'checkin-section' || sectionId === 'checkout-section');
    setShowGuestPopup(sectionId === 'who-section');
  };

  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  const updateCounter = (type, increment) => {
    switch (type) {
      case 'adults':
        setCountAdults(prev => increment ? prev + 1 : prev - 1);
        break;
      case 'children':
        setCountChildren(prev => increment ? prev + 1 : prev - 1);
        break;
      case 'infants':
        setCountInfants(prev => increment ? prev + 1 : prev - 1);
        break;
      case 'pets':
        setCountPets(prev => increment ? prev + 1 : prev - 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        if (regionPopupRef.current && !regionPopupRef.current.contains(event.target)) {
          setShowRegionPopup(false);
        }
        if (calendarPopupRef.current && !calendarPopupRef.current.contains(event.target)) {
          setShowCalendar(false);
        }
        if (guestPopupRef.current && !guestPopupRef.current.contains(event.target)) {
          setShowGuestPopup(false);
        }
        setIsHiddenBar(false);
      }
    };

    const handleResize = () => {
      // Adjust popup position based on window size if needed
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateCalendarDays = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    const dayOfWeek = date.getDay();
    for (let i = 0; i < dayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }
    while (date.getMonth() === month) {
      const day = date.getDate();
      const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      days.push(
        <div key={day} className="day" onClick={() => selectDate(formattedDate)}>
          {day}
        </div>
      );
      date.setDate(day + 1);
    }
    return days;
  };

  return (
    <div id="hiddenSearchbar" ref={searchBarRef}>
      <div className="search-bar1">
        <div id="where-section" onClick={() => selectSection('where-section')}>
          <label htmlFor="where">Where</label>
          <input type="text" id="where" placeholder="Search destinations" />
        </div>
        <div id="checkin-section" onClick={() => selectSection('checkin-section')}>
          <label htmlFor="checkin">Check in</label>
          <input type="text" id="checkin" placeholder="Add dates" onClick={toggleCalendar} />
        </div>
        <div id="checkout-section" onClick={() => selectSection('checkout-section')}>
          <label htmlFor="checkout">Check out</label>
          <input type="text" id="checkout" placeholder="Add dates" onClick={toggleCalendar} />
        </div>
        <div id="who-section" onClick={() => selectSection('who-section')}>
          <label htmlFor="who">Who</label>
          <input type="text" id="who" placeholder="Add guests" onClick={toggleGuestPopup} />
        </div>
        <button className="search-button">
          <span className="search-icon">🔍</span> Search
        </button>
      </div>

      {showRegionPopup && (
        <div id="region-popup" className="popup" ref={regionPopupRef}>
          <h2>Search by region</h2>
          <div className="grid">
            <div className="grid-item">
              <img src="https://via.placeholder.com/100" alt="I'm flexible" />
              <p>I'm flexible</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/100" alt="Southeast Asia" />
              <p>Southeast Asia</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/100" alt="Canada" />
              <p>Canada</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/100" alt="Europe" />
              <p>Europe</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/100" alt="Thailand" />
              <p>Thailand</p>
            </div>
            <div className="grid-item">
              <img src="https://via.placeholder.com/100" alt="Middle East" />
              <p>Middle East</p>
            </div>
          </div>
        </div>
      )}

      {showCalendar && (
        <div id="calendar-popup" className="calendar-container1" ref={calendarPopupRef}>
          <div className="tabs">
            <div className={`tab ${activeTab === 'calendars' ? 'active' : ''}`} onClick={() => switchTab('calendars')}>
              Dates
            </div>
            <div className={`tab ${activeTab === 'months' ? 'active' : ''}`} onClick={() => switchTab('months')}>
              Months
            </div>
            <div className={`tab ${activeTab === 'flexible' ? 'active' : ''}`} onClick={() => switchTab('flexible')}>
              Flexible
            </div>
          </div>
          <div id="calendars1" className={`tab-content ${activeTab === 'calendars' ? 'active' : ''}`}>
            <div className="calendars1">
              <div className="calendar1">
                <h3>July 2024</h3>
                <div className="days">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  {generateCalendarDays(2024, 6)}
                </div>
              </div>
              <div className="calendar1">
                <h3>August 2024</h3>
                <div className="days">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                  {generateCalendarDays(2024, 7)}
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="active">Exact dates</button>
              <button onClick={() => addExtraDate('1')}>± 1 day</button>
              <button onClick={() => addExtraDate('2')}>± 2 days</button>
              <button onClick={() => addExtraDate('3')}>± 3 days</button>
              <button onClick={() => addExtraDate('7')}>± 7 days</button>
              <button onClick={() => addExtraDate('14')}>± 14 days</button>
            </div>
          </div>
          <div id="months" className={`tab-content ${activeTab === 'months' ? 'active' : ''}`}>
            <p>Content for Months tab</p>
          </div>
          <div id="flexible" className={`tab-content ${activeTab === 'flexible' ? 'active' : ''}`}>
            <p>Content for Flexible tab</p>
          </div>
        </div>
      )}

      {showGuestPopup && (
        <div id="guest-popup" className="guest-counter-container" ref={guestPopupRef}>
          <div className="guest-counter">
            <div className="item">
              <div className="label-container">
                <label>Adults</label>
                <small>Ages 13 or above</small>
              </div>
              <div className="counter">
                <button onClick={() => updateCounter('adults', false)} disabled={countAdults === 0}>-</button>
                <span>{countAdults}</span>
                <button onClick={() => updateCounter('adults', true)}>+</button>
              </div>
            </div>
            <div className="item">
              <div className="label-container">
                <label>Children</label>
                <small>Ages 2–12</small>
              </div>
              <div className="counter">
                <button onClick={() => updateCounter('children', false)} disabled={countChildren === 0}>-</button>
                <span>{countChildren}</span>
                <button onClick={() => updateCounter('children', true)}>+</button>
              </div>
            </div>
            <div className="item">
              <div className="label-container">
                <label>Infants</label>
                <small>Under 2</small>
              </div>
              <div className="counter">
                <button onClick={() => updateCounter('infants', false)} disabled={countInfants === 0}>-</button>
                <span>{countInfants}</span>
                <button onClick={() => updateCounter('infants', true)}>+</button>
              </div>
            </div>
            <div className="item">
              <div className="label-container">
                <label>Pets</label>
                <small>Bringing a service animal?</small>
              </div>
              <div className="counter">
                <button onClick={() => updateCounter('pets', false)} disabled={countPets === 0}>-</button>
                <span>{countPets}</span>
                <button onClick={() => updateCounter('pets', true)}>+</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiddenSearchbar;
