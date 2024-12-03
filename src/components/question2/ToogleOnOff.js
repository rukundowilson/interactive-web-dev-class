import React, { useState } from 'react';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn((prevState) => !prevState);
    };

    return (
        <button
            onClick={handleClick}
            className={`px-4 py-2 text-white font-bold rounded shadow-md ${
                isOn ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
            }`}
        >
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
};

export default ToggleButton;
