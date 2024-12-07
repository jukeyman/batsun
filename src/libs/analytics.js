// Analytics tracking utilities
const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

const trackEvent = ({
  action,
  category,
  label,
  value,
  additionalParams = {}
}) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...additionalParams
    });
  }
};

// Specific event tracking functions
const trackServiceView = (serviceName) => {
  trackEvent({
    action: 'view_service',
    category: 'Service Interest',
    label: serviceName,
    additionalParams: {
      service_name: serviceName,
      timestamp: new Date().toISOString()
    }
  });
};

const trackROICalculation = (inputs, results) => {
  trackEvent({
    action: 'roi_calculation',
    category: 'Lead Qualification',
    label: inputs.service,
    value: Math.round(results.annualSavings),
    additionalParams: {
      company_size: inputs.employees,
      automation_percentage: inputs.automationPercentage,
      payback_period: Math.round(results.paybackPeriod)
    }
  });
};

const trackDemoRequest = (formData) => {
  trackEvent({
    action: 'demo_request',
    category: 'Lead Generation',
    label: formData.service,
    additionalParams: {
      company_size: formData.employees,
      lead_source: document.referrer || 'Direct',
      preferred_time: formData.preferredTime
    }
  });
};

const trackContentEngagement = (contentType, contentId, action) => {
  trackEvent({
    action: 'content_engagement',
    category: contentType,
    label: contentId,
    additionalParams: {
      action_type: action,
      content_type: contentType,
      content_id: contentId,
      user_type: 'anonymous' // Update if user authentication is implemented
    }
  });
};

const trackFeatureInteraction = (featureName, action) => {
  trackEvent({
    action: 'feature_interaction',
    category: 'Feature Usage',
    label: featureName,
    additionalParams: {
      feature_name: featureName,
      action_type: action,
      screen_size: window.innerWidth,
      device_type: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? 'mobile' : 'desktop'
    }
  });
};

// User journey tracking
const trackUserJourney = (step, details = {}) => {
  trackEvent({
    action: 'user_journey',
    category: 'User Flow',
    label: step,
    additionalParams: {
      journey_step: step,
      ...details,
      session_id: sessionStorage.getItem('session_id') || 'unknown'
    }
  });
};

// Error tracking
const trackError = (errorType, errorMessage, componentName) => {
  trackEvent({
    action: 'error',
    category: 'Error Tracking',
    label: errorType,
    additionalParams: {
      error_type: errorType,
      error_message: errorMessage,
      component: componentName,
      url: window.location.href
    }
  });
};

// Performance tracking
const trackPerformance = (metric) => {
  if (window.gtag && metric) {
    window.gtag('event', 'performance_metric', {
      event_category: 'Performance',
      event_label: metric.name,
      value: Math.round(metric.value),
      metric_type: metric.name,
      metric_value: metric.value,
      metric_rating: metric.rating
    });
  }
};

export {
  trackPageView,
  trackEvent,
  trackServiceView,
  trackROICalculation,
  trackDemoRequest,
  trackContentEngagement,
  trackFeatureInteraction,
  trackUserJourney,
  trackError,
  trackPerformance
}; 