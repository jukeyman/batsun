"use client";

import React from 'react';
import { getIndustryComparison } from '@/libs/getIndustryComparison';

const IndustryComparison = () => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState('Average ROI');
  const industries = getAllIndustries();
  const metrics = getCommonMetrics();
  const comparison = getIndustryComparison();

  const toggleIndustry = (industry) => {
    setSelectedIndustries(prev => 
      prev.includes(industry)
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  const getMetricValue = (industry, metric) => {
    const data = comparison[industry];
    switch(metric) {
      case 'Implementation Time':
        return data.implementationTime;
      case 'Average ROI':
        return data.averageROI;
      default:
        return Object.values(data.metrics)[0].average;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Industry Performance Comparison
      </h2>

      {/* Industry Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Select Industries to Compare</h3>
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => toggleIndustry(industry)}
              className={`px-4 py-2 rounded-full border transition-all ${
                selectedIndustries.includes(industry)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Select Metric</h3>
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {metrics.map((metric) => (
            <option key={metric} value={metric}>
              {metric}
            </option>
          ))}
        </select>
      </div>

      {/* Comparison Results */}
      {selectedIndustries.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Comparison Results</h3>
          
          {/* Results Grid */}
          <div className="grid gap-4">
            {selectedIndustries.map((industry) => {
              const industryData = comparison[industry];
              return (
                <div key={industry} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-lg">{industry}</h4>
                    <span className="text-2xl font-bold text-blue-600">
                      {getMetricValue(industry, selectedMetric)}
                    </span>
                  </div>

                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500">Implementation Time</p>
                      <p className="font-semibold">{industryData.implementationTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Average ROI</p>
                      <p className="font-semibold text-green-600">{industryData.averageROI}</p>
                    </div>
                  </div>

                  {/* Common Use Cases */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Common Applications</p>
                    <div className="flex flex-wrap gap-2">
                      {industryData.commonUses.map((use, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Metrics */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Detailed Metrics</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Industry
                    </th>
                    {Object.keys(comparison[selectedIndustries[0]].metrics).map((metric) => (
                      <th
                        key={metric}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {metric}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedIndustries.map((industry) => (
                    <tr key={industry}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {industry}
                      </td>
                      {Object.entries(comparison[industry].metrics).map(([metric, data]) => (
                        <td key={metric} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>
                            <span className="font-semibold">{data.average}</span>
                            <span className="text-xs text-gray-400 block">
                              Range: {data.range}
                            </span>
                            <span className="text-xs text-gray-400 block">
                              Time: {data.timeframe}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">Ready to see these results in your industry?</h3>
        <p className="text-gray-600 mb-6">
          Let's discuss how our AI solutions can be tailored to your specific needs
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default IndustryComparison; 