import React, { useState } from 'react';

const BookRegistrationForm = () => {
  const [formData, setFormData] = useState({
    bookTitle: '',
    author: '',
    isbn: '',
    publishedYear: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    const numericRegex = /^[0-9]{4}$/;

    if (!formData.bookTitle) errors.bookTitle = 'Book title is required';
    if (!formData.author) errors.author = 'Author is required';
    if (!formData.isbn) errors.isbn = 'ISBN is required';
    if (!formData.publishedYear) {
      errors.publishedYear = 'Published year is required';
    } else if (!numericRegex.test(formData.publishedYear)) {
      errors.publishedYear = 'Published year must be a 4-digit number';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Book registered successfully!');
      setFormData({ bookTitle: '', author: '', isbn: '', publishedYear: '' });
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
          Book Registration
        </h1>

        {/* Book Title Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Book Title
          </label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.bookTitle ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.bookTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.bookTitle}</p>
          )}
        </div>

        {/* Author Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.author ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.author && (
            <p className="text-red-500 text-sm mt-1">{errors.author}</p>
          )}
        </div>

        {/* ISBN Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ISBN
          </label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.isbn ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.isbn && <p className="text-red-500 text-sm mt-1">{errors.isbn}</p>}
        </div>

        {/* Published Year Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Published Year
          </label>
          <input
            type="text"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none ${
              errors.publishedYear ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.publishedYear && (
            <p className="text-red-500 text-sm mt-1">{errors.publishedYear}</p>
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

export default BookRegistrationForm;
