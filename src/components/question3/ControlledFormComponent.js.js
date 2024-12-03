import React, { useState } from 'react';

const ControlledForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted Value: ${inputValue}`);
    };

    return (
        <div className="max-w-sm p-6 bg-white rounded shadow-md">
            <form onSubmit={handleSubmit}>
                <label className="block text-gray-700 mb-2" htmlFor="input">
                    Enter Text:
                </label>
                <input
                    type="text"
                    id="input"
                    value={inputValue}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-4"
                    placeholder="Type something..."
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
            <div className="mt-4">
                <h2 className="text-lg font-bold">You Entered:</h2>
                <p className="text-gray-700">{inputValue || 'Nothing yet...'}</p>
            </div>
        </div>
    );
};

export default ControlledForm;
