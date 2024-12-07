const portfolios = [
  {
    id: 1,
    title: "AI Chatbot Implementation",
    category: "AI Solutions",
    image: "/images/portfolio/ai-chatbot.jpg",
    client: "Global Retail Corp",
    results: {
      responseTime: "90% faster",
      customerSatisfaction: "40% increase",
      costReduction: "60% savings"
    },
    description: "Implemented an advanced AI chatbot system that handles customer service 24/7 with multilingual support."
  },
  {
    id: 2,
    title: "Business Process Automation",
    category: "Automation",
    image: "/images/portfolio/automation.jpg",
    client: "Manufacturing Solutions Inc",
    results: {
      efficiency: "85% improvement",
      errorReduction: "95% decrease",
      roi: "300% in 6 months"
    },
    description: "Automated core business processes reducing manual work and increasing accuracy."
  },
  {
    id: 3,
    title: "Digital Transformation",
    category: "Digital Solutions",
    image: "/images/portfolio/digital-transform.jpg",
    client: "Healthcare Provider Network",
    results: {
      paperworkReduction: "90%",
      processSpeed: "75% faster",
      compliance: "100% adherence"
    },
    description: "Complete digital transformation of healthcare provider operations."
  },
  {
    id: 4,
    title: "Predictive Analytics Implementation",
    category: "Analytics",
    image: "/images/portfolio/analytics.jpg",
    client: "E-commerce Giant",
    results: {
      accuracy: "95% prediction rate",
      inventory: "30% optimization",
      revenue: "45% increase"
    },
    description: "Implemented predictive analytics for inventory and sales forecasting."
  },
  {
    id: 5,
    title: "Business Formation & Strategy",
    category: "Business Services",
    image: "/images/portfolio/business-formation.jpg",
    client: "Tech Startup",
    results: {
      fundingSecured: "$2M",
      timeToMarket: "4 months",
      growth: "200% in first year"
    },
    description: "Complete business formation and strategy development for tech startup."
  },
  {
    id: 6,
    title: "Government Contract Acquisition",
    category: "Government",
    image: "/images/portfolio/government.jpg",
    client: "Defense Contractor",
    results: {
      contractValue: "$10M",
      bidSuccess: "First attempt",
      compliance: "100% SAM verified"
    },
    description: "Successful government contract acquisition and implementation."
  }
];

const getAllPortfolios = () => {
  return portfolios;
};

export default getAllPortfolios;
