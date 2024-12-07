"use client";
import React from 'react';
import { getAllCaseStudies } from '@/libs/getAllCaseStudies';

const CaseStudiesPage = () => {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Implementation Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how organizations across different industries have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Industry Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Industries', 'E-commerce', 'Healthcare', 'Finance', 'Manufacturing', 'Technology'].map((industry) => (
            <button
              key={industry}
              className="px-6 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-blue-600"
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {study.industry}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.summary}</p>
                
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Implementation Time</p>
                      <p className="font-semibold">{study.implementationTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ROI</p>
                      <p className="font-semibold text-green-600">{study.roi}</p>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-gray-50 hover:bg-blue-50 text-blue-600 font-semibold py-2 rounded-lg transition-colors">
                  Read Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-600 text-white rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join these success stories and discover how our AI solutions can drive your business forward
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage; 