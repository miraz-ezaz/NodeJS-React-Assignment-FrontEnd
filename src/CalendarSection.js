import React from 'react';

const CalendarSection = () => {
    // Function to generate days for a given month
    const generateDays = (year, month) => {
        const numDays = new Date(year, month + 1, 0).getDate(); // Get number of days in the month
        const days = [];

        // Generate days array
        for (let i = 1; i <= numDays; i++) {
            days.push(i);
        }

        return days;
    };

    // Function to generate calendar rows for a given month
    const generateCalendarRows = (year, month) => {
        const days = generateDays(year, month);
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get day of the week for the first day of the month (0-6, where 0 is Sunday)
        const rows = [];
        let row = [];

        // Push empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            row.push(<td key={`empty-${i}`} className="inactive"></td>);
        }

        // Push days of the month into rows
        days.forEach((day, index) => {
            if (index > 0 && (index + firstDayOfMonth) % 7 === 0) {
                rows.push(<tr key={`row-${rows.length}`}>{row}</tr>);
                row = [];
            }
            row.push(<td key={`day-${day}`} className={index < firstDayOfMonth ? 'inactive' : ''}>{day}</td>);
        });

        // Push remaining days into the last row
        if (row.length > 0) {
            rows.push(<tr key={`row-${rows.length}`}>{row}</tr>);
        }

        return rows;
    };

    // Generate calendar months (July and August 2024)
    const calendarMonths = [
        { name: 'July', year: 2024, month: 6 }, // Month is zero-indexed (0 = January, 11 = December)
        { name: 'August', year: 2024, month: 7 }
    ];

    return (
        <section className="calendar-section">
            <div className="calenderHeader">
                <h1>Select check-in date</h1>
                <p>Add your travel dates for exact pricing</p>
            </div>
            <div className="calendar-container">
                {calendarMonths.map((monthData, index) => (
                    <div key={index} className="calendar" id={monthData.name}>
                        <h2>{monthData.name} {monthData.year}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                    <th>Sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generateCalendarRows(monthData.year, monthData.month)}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            <div className="controls">
                <a href="#">Clear dates</a>
            </div>
        </section>
    );
};

export default CalendarSection;
