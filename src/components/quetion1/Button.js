import React from 'react';

const Button = ({ text, btnMargin, color = "blue", onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-white font-semibold rounded shadow-md hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-400 focus:ring-opacity-75`}
            style={{ backgroundColor: color, margin: btnMargin}}
        >
            {text}
        </button>
    );
};

export default Button;
