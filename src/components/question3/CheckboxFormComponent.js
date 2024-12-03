import React, { useState } from 'react';

const CheckboxForm = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedOptions((prev) => {
            if (checked) {
                // Add the option if checked
                return [...prev, value];
            } else {
                // Remove the option if unchecked
                return prev.filter((option) => option !== value);
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Selected Options: ${selectedOptions.join(', ')}`);
    };

    return (
        <div className="max-w-md p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Checkbox Form</h1>
            <form onSubmit={handleSubmit}>
                {options.map((option) => (
                    <div key={option} className="mb-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                value={option}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 mt-4"
                >
                    Submit
                </button>
            </form>

            {selectedOptions.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Selected Options:</h2>
                    <ul className="list-disc pl-5">
                        {selectedOptions.map((option) => (
                            <li key={option}>{option}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CheckboxForm;
