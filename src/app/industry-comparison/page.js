"use client";

import React, { useState } from 'react';
import IndustryComparison from '@/components/comparison/IndustryComparison';

const Page = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  return (
    <div className="industry-comparison-page">
      <div className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-3">Industry AI Implementation Results</h1>
          <p className="lead mb-4">
            Compare AI implementation metrics across different industries and see what results you can expect for your sector.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <IndustryComparison 
          selectedIndustry={selectedIndustry} 
          onIndustryChange={setSelectedIndustry} 
        />
      </div>
    </div>
  );
};

export default Page; 