import React, { useState } from 'react';

const ModuleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    moduleName: '',
    moduleCode: '',
    description: '',
    credits: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    const numericRegex = /^[0-9]+$/;

    if (!formData.moduleName) errors.moduleName = 'Module name is required';
    if (!formData.moduleCode) errors.moduleCode = 'Module code is required';
    if (!formData.description) errors.description = 'Description is required';
    if (!formData.credits) {
      errors.credits = 'Credits are required';
    } else if (!numericRegex.test(formData.credits)) {
      errors.credits = 'Credits must be a numeric value';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Module registered successfully!');
      setFormData({ moduleName: '', moduleCode: '', description: '', credits: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Module Registration
        </h1>

        {/* Module Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Module Name
          </label>
          <input
            type="text"
            name="moduleName"
            value={formData.moduleName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.moduleName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.moduleName && (
            <p className="text-red-500 text-sm mt-1">{errors.moduleName}</p>
          )}
        </div>

        {/* Module Code Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Module Code
          </label>
          <input
            type="text"
            name="moduleCode"
            value={formData.moduleCode}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.moduleCode ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.moduleCode && (
            <p className="text-red-500 text-sm mt-1">{errors.moduleCode}</p>
          )}
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="3"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Credits Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Credits
          </label>
          <input
            type="text"
            name="credits"
            value={formData.credits}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.credits ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.credits && (
            <p className="text-red-500 text-sm mt-1">{errors.credits}</p>
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

export default ModuleRegistrationForm;
