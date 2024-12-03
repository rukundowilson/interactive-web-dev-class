import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import Post from './Post';

const WelcomeBlog = () => {
    return (
        <div className="max-w-4xl bg-blue-100 mx-auto p-6">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-4">Welcome to the Blog</h1>

            {/* Navigation Menu */}
            <nav className="mb-4">
                <Link to="/" className="mr-4 text-blue-500 underline">Home</Link>
                <Link to="/blog" className="mr-4 text-blue-500 underline">Blog</Link>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<h2 className="text-gray-700">Select a blog from the navigation menu.</h2>} />
                <Route path="blog" element={<Blog />}>
                    <Route path=":id" element={<Post />} /> {/* Nested route for individual posts */}
                </Route>
                <Route path="*" element={<h2 className="text-red-500">404 - Page Not Found</h2>} />
            </Routes>
        </div>
    );
};

export default WelcomeBlog;
