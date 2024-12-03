import React, { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
                Menu
            </button>
            {isOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
