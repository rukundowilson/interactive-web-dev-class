import React from 'react';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 text-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
                <p className="text-lg text-gray-600 mt-4">
                    The page you're looking for doesn't exist.
                </p>
            </div>
        </div>
    );
};
export default NotFound;
