import projectImage2 from "@/assets/img/project/project__2.png";
import projectImage3 from "@/assets/img/project/project__3.png";
import projectImage4 from "@/assets/img/project/project__4.png";
import projectImage5 from "@/assets/img/project/project__5.png";
import projectImage6 from "@/assets/img/project/project__6.png";
import projectImage7 from "@/assets/img/project/project__7.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
const projects = [
  {
    id: 1,
    title: "E-commerce AI Transformation",
    category: "AI Implementation",
    client: "Global Retail Chain",
    description: "Implemented AI-powered product recommendations and customer service chatbot, resulting in 35% increase in average order value and 60% reduction in support costs.",
    results: [
      "35% increase in average order value",
      "60% reduction in support costs",
      "24/7 customer support coverage",
      "90% customer satisfaction rate"
    ],
    image: "/images/portfolio/ecommerce-ai.jpg",
    duration: "3 months"
  },
  {
    id: 2,
    title: "Manufacturing Process Automation",
    category: "Automation",
    client: "Industrial Manufacturing Co.",
    description: "Deployed RPA solutions for inventory management and quality control, achieving significant cost savings and improved accuracy.",
    results: [
      "85% reduction in manual data entry",
      "99.9% accuracy in quality control",
      "50% faster inventory processing",
      "$2M annual cost savings"
    ],
    image: "/images/portfolio/manufacturing-automation.jpg",
    duration: "6 months"
  },
  {
    id: 3,
    title: "Healthcare AI Analytics",
    category: "Predictive Analytics",
    client: "Regional Healthcare Network",
    description: "Implemented predictive analytics for patient care and resource management, improving operational efficiency and patient outcomes.",
    results: [
      "30% reduction in wait times",
      "25% improvement in resource utilization",
      "90% accurate patient flow prediction",
      "Improved patient satisfaction"
    ],
    image: "/images/portfolio/healthcare-analytics.jpg",
    duration: "4 months"
  },
  {
    id: 4,
    title: "Financial Services Automation",
    category: "AI & Automation",
    client: "Investment Management Firm",
    description: "Developed AI-powered risk assessment and automated trading systems, enhancing decision-making and reducing operational costs.",
    results: [
      "70% faster risk assessment",
      "45% reduction in operational costs",
      "99% accuracy in compliance checks",
      "24/7 automated monitoring"
    ],
    image: "/images/portfolio/financial-automation.jpg",
    duration: "5 months"
  },
  {
    id: 5,
    title: "HR Process Automation",
    category: "Automation",
    client: "Tech Company",
    description: "Implemented end-to-end HR automation including recruitment, onboarding, and performance management.",
    results: [
      "75% reduction in hiring time",
      "90% faster onboarding process",
      "50% reduction in HR administrative work",
      "Improved employee satisfaction"
    ],
    image: "/images/portfolio/hr-automation.jpg",
    duration: "3 months"
  },
  {
    id: 6,
    title: "Customer Service AI Solution",
    category: "AI Implementation",
    client: "Telecommunications Provider",
    description: "Deployed advanced AI chatbot and customer service automation system, handling multiple languages and complex queries.",
    results: [
      "80% reduction in response time",
      "65% cost savings in customer support",
      "24/7 multilingual support",
      "95% customer satisfaction"
    ],
    image: "/images/portfolio/customer-service-ai.jpg",
    duration: "4 months"
  }
];

const getAllProjects = () => {
  return projects;
};

export default getAllProjects;
