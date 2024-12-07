const pricing = [
  {
    id: 1,
    name: "Starter AI Package",
    price: "999",
    duration: "month",
    features: [
      "Basic AI Chatbot",
      "Email Automation",
      "Basic Analytics Dashboard",
      "5 Automated Workflows",
      "8/5 Support",
      "Monthly Reports"
    ],
    isPopular: false,
    buttonText: "Get Started"
  },
  {
    id: 2,
    name: "Business AI Suite",
    price: "2499",
    duration: "month",
    features: [
      "Advanced AI Chatbot",
      "Full Email Automation",
      "Predictive Analytics",
      "15 Custom Workflows",
      "24/7 Support",
      "Weekly Reports",
      "Custom Integration"
    ],
    isPopular: true,
    buttonText: "Most Popular"
  },
  {
    id: 3,
    name: "Enterprise AI",
    price: "4999",
    duration: "month",
    features: [
      "Enterprise AI Suite",
      "Custom AI Models",
      "Advanced Analytics",
      "Unlimited Workflows",
      "24/7 Priority Support",
      "Real-time Reporting",
      "Full API Access",
      "Dedicated Account Manager"
    ],
    isPopular: false,
    buttonText: "Contact Us"
  }
];

const getAllPricing = () => {
  return pricing;
};

export default getAllPricing; 