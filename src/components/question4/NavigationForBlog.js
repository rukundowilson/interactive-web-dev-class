import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">My Blog</h1>
                </div>
                <div className="space-x-6">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to="/about" className="hover:text-blue-400">About</Link>
                    <Link to="/blog" className="hover:text-blue-400">Blog</Link>
                    <Link to="/contact" className="hover:text-blue-400">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
