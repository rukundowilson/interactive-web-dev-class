import React, { useState } from 'react';

const DriverRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    licenseNumber: '',
    phoneNumber: '',
    vehicleType: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    const alphanumericRegex = /^[a-zA-Z0-9]*$/;
    const numericRegex = /^[0-9]*$/;

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.licenseNumber) {
      errors.licenseNumber = 'License number is required';
    } else if (!alphanumericRegex.test(formData.licenseNumber)) {
      errors.licenseNumber = 'License number must be alphanumeric';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!numericRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be numeric';
    }
    if (!formData.vehicleType) errors.vehicleType = 'Vehicle type is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Driver registered successfully!');
      setFormData({ name: '', licenseNumber: '', phoneNumber: '', vehicleType: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Driver Registration
        </h1>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* License Number Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            License Number
          </label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.licenseNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.licenseNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Vehicle Type Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Type
          </label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.vehicleType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="" disabled>
              Select vehicle type
            </option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
          {errors.vehicleType && (
            <p className="text-red-500 text-sm mt-1">{errors.vehicleType}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default DriverRegistrationForm;
