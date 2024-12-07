import serviceImage1 from "@/assets/img/service/service__1.png";
import serviceImage2 from "@/assets/img/service/service__2.png";
import serviceImage3 from "@/assets/img/service/service__3.png";
import serviceImage4 from "@/assets/img/service/service__4.png";
import serviceImage6 from "@/assets/img/service/service__6.png";
import serviceImage7 from "@/assets/img/service/service__7.png";
import serviceImage8 from "@/assets/img/service/service__8.png";
import serviceImage9 from "@/assets/img/service/service__9.png";
import serviceImage10 from "@/assets/img/service/service__10.png";
import serviceImage11 from "@/assets/img/service/service__11.png";
import serviceImage12 from "@/assets/img/service/service__12.png";
import serviceImage13 from "@/assets/img/service/service__13.png";
import serviceImage14 from "@/assets/img/service/service__14.png";
import serviceImage15 from "@/assets/img/service/service__15.png";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
const services = [
  {
    id: 1,
    icon: "bi-robot",
    title: "AI Chatbots",
    category: "AI Solutions",
    description: "24/7 intelligent customer support with AI-powered chatbots that handle inquiries, product recommendations, and support tickets automatically.",
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "Custom Training",
      "Analytics Dashboard"
    ]
  },
  {
    id: 2,
    icon: "bi-gear-wide-connected",
    title: "Workflow Automation",
    category: "Automation",
    description: "Streamline your business operations with AI-driven automation for scheduling, data entry, inventory management, and more.",
    features: [
      "Process Automation",
      "Task Scheduling",
      "Integration Support",
      "Custom Workflows"
    ]
  },
  {
    id: 3,
    icon: "bi-graph-up-arrow",
    title: "Predictive Analytics",
    category: "AI Solutions",
    description: "Make data-driven decisions with AI analytics that forecast trends, customer behavior, and business opportunities.",
    features: [
      "Trend Analysis",
      "Customer Behavior Prediction",
      "Risk Assessment",
      "Performance Tracking"
    ]
  },
  {
    id: 4,
    icon: "bi-envelope-paper",
    title: "Email Automation",
    category: "Automation",
    description: "Boost engagement with AI-powered email campaigns that deliver personalized content at optimal times.",
    features: [
      "Smart Scheduling",
      "Content Personalization",
      "A/B Testing",
      "Campaign Analytics"
    ]
  },
  {
    id: 5,
    icon: "bi-person-workspace",
    title: "RPA Solutions",
    category: "Automation",
    description: "Automate repetitive tasks with Robotic Process Automation for improved efficiency and accuracy in business operations.",
    features: [
      "Process Mapping",
      "Bot Development",
      "System Integration",
      "Performance Monitoring"
    ]
  },
  {
    id: 6,
    icon: "bi-mic",
    title: "Voice Assistants",
    category: "AI Solutions",
    description: "Enhance productivity with AI voice assistants for hands-free operation and task management.",
    features: [
      "Voice Commands",
      "Task Automation",
      "Calendar Management",
      "Meeting Assistance"
    ]
  },
  {
    id: 7,
    icon: "bi-clipboard-data",
    title: "Business Intelligence",
    category: "AI Solutions",
    description: "Transform raw data into actionable insights with AI-powered business intelligence tools.",
    features: [
      "Data Visualization",
      "Real-time Analytics",
      "Custom Reports",
      "Trend Analysis"
    ]
  },
  {
    id: 8,
    icon: "bi-shield-check",
    title: "AI Security",
    category: "AI Solutions",
    description: "Protect your business with AI-powered security solutions that detect and prevent threats in real-time.",
    features: [
      "Threat Detection",
      "Automated Response",
      "24/7 Monitoring",
      "Security Reports"
    ]
  },
  {
    id: 9,
    icon: "bi-people",
    title: "HR Automation",
    category: "Automation",
    description: "Streamline HR processes with intelligent automation for recruitment, onboarding, and employee management.",
    features: [
      "Resume Screening",
      "Interview Scheduling",
      "Employee Onboarding",
      "Performance Tracking"
    ]
  },
  {
    id: 10,
    icon: "bi-cart-check",
    title: "E-commerce AI",
    category: "AI Solutions",
    description: "Optimize your online store with AI-powered product recommendations and inventory management.",
    features: [
      "Product Recommendations",
      "Inventory Optimization",
      "Price Optimization",
      "Customer Insights"
    ]
  }
];

const getAllServices = () => {
  return services;
};

export default getAllServices;
