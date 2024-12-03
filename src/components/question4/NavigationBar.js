import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-6 text-white">
                <li>
                    <Link to="/" className="hover:text-gray-200">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-gray-200">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-gray-200">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
