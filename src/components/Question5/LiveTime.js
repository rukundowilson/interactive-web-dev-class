import React, { useState, useEffect, memo } from 'react';

// Memoized Static UI Component
const StaticUI = memo(() => {
    console.log('StaticUI Rendered!');
    return (
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold">Live Clock</h1>
            <p className="text-gray-600">This part does not re-render.</p>
        </div>
    );
});

const LiveTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Update the time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="max-w-md mt-6 p-4 bg-blue-100 rounded shadow">
            <StaticUI />
            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">Current Time</h2>
                <p className="text-lg text-gray-800">{currentTime}</p>
            </div>
        </div>
    );
};

export default LiveTime;
