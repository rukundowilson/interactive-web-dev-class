import React, { useState } from 'react';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Attempt:', credentials);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm bg-white p-6 rounded shadow-md"
        >
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your username"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your password"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
