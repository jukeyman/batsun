"use client";
import { useState } from 'react';
import { trackEvent } from '@/libs/analytics';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    testimonial: '',
    rating: 5,
    industry: '',
    projectType: '',
    email: '',
    canFeature: false,
    photo: null
  });

  const industries = [
    'E-commerce',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Technology',
    'Other'
  ];

  const projectTypes = [
    'AI Chatbot',
    'Workflow Automation',
    'Predictive Analytics',
    'Custom AI Solution',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Track submission event
    trackEvent({
      action: 'testimonial_submission',
      category: 'User Generated Content',
      label: formData.industry,
      value: formData.rating
    });

    // Here you would typically send the data to your backend
    console.log('Testimonial submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      position: '',
      company: '',
      testimonial: '',
      rating: 5,
      industry: '',
      projectType: '',
      email: '',
      canFeature: false,
      photo: null
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position *
          </label>
          <input
            type="text"
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company *
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Industry *
          </label>
          <select
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Type *
          </label>
          <select
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Project Type</option>
            {projectTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Testimonial Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Testimonial *
        </label>
        <textarea
          name="testimonial"
          required
          value={formData.testimonial}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Share your experience with our AI solutions..."
        />
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating *
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
              className={`text-2xl ${
                star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profile Photo
        </label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Optional: Upload a professional photo to appear with your testimonial
        </p>
      </div>

      {/* Permission */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="canFeature"
          checked={formData.canFeature}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="text-sm text-gray-700">
          I give permission to feature my testimonial on the website and marketing materials
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Testimonial
        </button>
      </div>
    </form>
  );
};

export default TestimonialForm; 