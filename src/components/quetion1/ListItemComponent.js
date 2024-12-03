import React from 'react';

const ItemsList = ({ items }) => {
    return (
        <div className="p-6 bg-gray-100 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Question1.5. component to display a list of items using the .map() function.</h2>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="p-2 bg-white rounded shadow border text-gray-800"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsList;
