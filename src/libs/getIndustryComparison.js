const industryMetrics = {
  'E-commerce': {
    metrics: {
      'Customer Service Cost Reduction': {
        average: '75%',
        range: '60-85%',
        timeframe: '3-6 months'
      },
      'Customer Satisfaction Improvement': {
        average: '35%',
        range: '25-45%',
        timeframe: '1-3 months'
      },
      'Response Time Reduction': {
        average: '90%',
        range: '85-95%',
        timeframe: 'Immediate'
      },
      'Sales Conversion Rate Increase': {
        average: '25%',
        range: '15-35%',
        timeframe: '2-4 months'
      }
    },
    commonUses: [
      'Customer Service Automation',
      'Inventory Management',
      'Personalized Recommendations',
      'Demand Forecasting'
    ],
    averageROI: '350%',
    implementationTime: '2-4 months'
  },
  'Healthcare': {
    metrics: {
      'Patient Wait Time Reduction': {
        average: '40%',
        range: '30-50%',
        timeframe: '3-6 months'
      },
      'Resource Utilization Improvement': {
        average: '35%',
        range: '25-45%',
        timeframe: '4-8 months'
      },
      'Diagnosis Accuracy Improvement': {
        average: '30%',
        range: '20-40%',
        timeframe: '6-12 months'
      },
      'Administrative Cost Reduction': {
        average: '45%',
        range: '35-55%',
        timeframe: '3-6 months'
      }
    },
    commonUses: [
      'Patient Flow Optimization',
      'Diagnostic Assistance',
      'Resource Management',
      'Administrative Automation'
    ],
    averageROI: '280%',
    implementationTime: '4-8 months'
  },
  'Finance': {
    metrics: {
      'Risk Assessment Speed': {
        average: '85%',
        range: '75-95%',
        timeframe: '2-4 months'
      },
      'Fraud Detection Accuracy': {
        average: '90%',
        range: '85-95%',
        timeframe: '3-6 months'
      },
      'Processing Cost Reduction': {
        average: '65%',
        range: '55-75%',
        timeframe: '3-5 months'
      },
      'Compliance Accuracy': {
        average: '95%',
        range: '90-99%',
        timeframe: '4-8 months'
      }
    },
    commonUses: [
      'Risk Assessment',
      'Fraud Detection',
      'Trading Analytics',
      'Regulatory Compliance'
    ],
    averageROI: '400%',
    implementationTime: '3-6 months'
  },
  'Manufacturing': {
    metrics: {
      'Downtime Reduction': {
        average: '45%',
        range: '35-55%',
        timeframe: '6-12 months'
      },
      'Quality Control Improvement': {
        average: '55%',
        range: '45-65%',
        timeframe: '4-8 months'
      },
      'Maintenance Cost Reduction': {
        average: '40%',
        range: '30-50%',
        timeframe: '6-12 months'
      },
      'Production Efficiency Increase': {
        average: '35%',
        range: '25-45%',
        timeframe: '6-12 months'
      }
    },
    commonUses: [
      'Predictive Maintenance',
      'Quality Control',
      'Supply Chain Optimization',
      'Production Planning'
    ],
    averageROI: '250%',
    implementationTime: '6-12 months'
  },
  'Technology': {
    metrics: {
      'Support Ticket Resolution Time': {
        average: '70%',
        range: '60-80%',
        timeframe: '1-3 months'
      },
      'Development Efficiency': {
        average: '40%',
        range: '30-50%',
        timeframe: '3-6 months'
      },
      'Bug Detection Rate': {
        average: '60%',
        range: '50-70%',
        timeframe: '2-4 months'
      },
      'Deployment Success Rate': {
        average: '45%',
        range: '35-55%',
        timeframe: '3-6 months'
      }
    },
    commonUses: [
      'Automated Testing',
      'Code Analysis',
      'DevOps Automation',
      'Support Automation'
    ],
    averageROI: '500%',
    implementationTime: '2-4 months'
  }
};

export const getIndustryComparison = () => {
  return industryMetrics;
};

export const getIndustryMetrics = (industry) => {
  return industryMetrics[industry] || null;
};

export const getAllIndustries = () => {
  return Object.keys(industryMetrics);
};

export const getCommonMetrics = () => {
  return [
    'Implementation Time',
    'Average ROI',
    'Cost Reduction',
    'Efficiency Improvement',
    'Quality Enhancement'
  ];
}; 