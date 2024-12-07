"use client";
import { useState } from 'react';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    employees: 10,
    avgHourlyRate: 25,
    hoursPerWeek: 40,
    automationPercentage: 30,
    implementationCost: 2499, // Business plan by default
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    // Calculate annual labor cost before automation
    const annualLaborCost = 
      inputs.employees * 
      inputs.avgHourlyRate * 
      inputs.hoursPerWeek * 
      52;

    // Calculate savings from automation
    const automationSavings = 
      annualLaborCost * 
      (inputs.automationPercentage / 100);

    // Calculate first year ROI
    const firstYearROI = 
      ((automationSavings - inputs.implementationCost) / 
      inputs.implementationCost) * 
      100;

    // Calculate monthly savings
    const monthlySavings = automationSavings / 12;

    // Calculate payback period in months
    const paybackPeriod = 
      (inputs.implementationCost / automationSavings) * 
      12;

    return {
      annualSavings: automationSavings,
      monthlySavings,
      firstYearROI,
      paybackPeriod,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const results = calculateROI();

  return (
    <div className="roi-calculator p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">AI Automation ROI Calculator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            Number of Employees Affected
          </label>
          <input
            type="number"
            value={inputs.employees}
            onChange={(e) => setInputs({...inputs, employees: parseInt(e.target.value)})}
            className="w-full p-2 border rounded"
            min="1"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            Average Hourly Rate ($)
          </label>
          <input
            type="number"
            value={inputs.avgHourlyRate}
            onChange={(e) => setInputs({...inputs, avgHourlyRate: parseInt(e.target.value)})}
            className="w-full p-2 border rounded"
            min="1"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            Hours Worked Per Week
          </label>
          <input
            type="number"
            value={inputs.hoursPerWeek}
            onChange={(e) => setInputs({...inputs, hoursPerWeek: parseInt(e.target.value)})}
            className="w-full p-2 border rounded"
            min="1"
            max="168"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            Expected Automation Percentage (%)
          </label>
          <input
            type="number"
            value={inputs.automationPercentage}
            onChange={(e) => setInputs({...inputs, automationPercentage: parseInt(e.target.value)})}
            className="w-full p-2 border rounded"
            min="1"
            max="100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Calculate ROI
        </button>
      </form>

      {showResults && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Your Potential Savings</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-medium text-gray-600">Annual Savings</h4>
              <p className="text-2xl font-bold text-green-600">
                ${Math.round(results.annualSavings).toLocaleString()}
              </p>
            </div>
            
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-medium text-gray-600">Monthly Savings</h4>
              <p className="text-2xl font-bold text-green-600">
                ${Math.round(results.monthlySavings).toLocaleString()}
              </p>
            </div>
            
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-medium text-gray-600">First Year ROI</h4>
              <p className="text-2xl font-bold text-blue-600">
                {Math.round(results.firstYearROI)}%
              </p>
            </div>
            
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-medium text-gray-600">Payback Period</h4>
              <p className="text-2xl font-bold text-blue-600">
                {Math.round(results.paybackPeriod)} months
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            * These calculations are estimates based on industry averages and your inputs. 
            Actual results may vary. Contact us for a detailed analysis of your specific needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default ROICalculator; 