import React, { useState } from 'react';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        payment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Submitted: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div className="max-w-md p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Multi-Step Form</h1>
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mb-4"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="address">
                            Address:
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mb-4"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="payment">
                            Payment Information:
                        </label>
                        <input
                            type="text"
                            id="payment"
                            name="payment"
                            value={formData.payment}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded mb-4"
                            placeholder="Enter payment details"
                            required
                        />
                    </div>
                )}

                <div className="flex justify-between">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Previous
                        </button>
                    )}
                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;
