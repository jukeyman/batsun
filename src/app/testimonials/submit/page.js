"use client";
import React from 'react';
import TestimonialForm from '@/components/forms/TestimonialForm';

const SubmitTestimonialPage = () => {
  return (
    <div className="submit-testimonial-page">
      <div className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-3">Share Your Success Story</h1>
          <p className="lead mb-4">
            Your experience can help other businesses understand the real impact of our solutions.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <TestimonialForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitTestimonialPage; 