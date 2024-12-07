"use client";
import React from 'react';
import TestimonialGrid from '@/components/sections/testimonials/TestimonialGrid';

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <div className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-3">Client Success Stories</h1>
          <p className="lead mb-4">
            Discover how businesses across industries have achieved remarkable growth and efficiency with RJ Business Solutions.
          </p>
          <div className="stats-row d-flex justify-content-center gap-5 mb-5">
            <div className="stat-item">
              <h3 className="h2">98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3 className="h2">500+</h3>
              <p>Businesses Served</p>
            </div>
            <div className="stat-item">
              <h3 className="h2">85%</h3>
              <p>Average Efficiency Gain</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <TestimonialGrid />
      </div>

      <div className="cta-section text-center py-5 mt-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-4">
            Join hundreds of satisfied clients who have accelerated their growth with our services.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-primary btn-lg">
              Schedule a Consultation
            </a>
            <a href="/services" className="btn btn-outline-primary btn-lg">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage; 