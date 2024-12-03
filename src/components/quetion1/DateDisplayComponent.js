import React from 'react';

const DateDisplay = () => {
    // Get the current date
    const currentDate = new Date();

    // Format the date as a string
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="p-2 bg-blue-100 rounded shadow-md text-center min-h-60">
            <h1 className="text-xl font-bold mb-2">Today's Date</h1>
            <p className="text-lg">{formattedDate}</p>
        </div>
    );
};

export default DateDisplay;
