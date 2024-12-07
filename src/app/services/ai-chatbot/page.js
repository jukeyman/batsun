import React from "react";
import ServiceLayout from "@/components/layout/ServiceLayout";

export const metadata = {
  title: "AI Chatbot Solutions | RJ Business Solutions",
  description: "Transform your customer service with our advanced AI chatbots. 24/7 support, multilingual capabilities, and seamless integration with your existing systems.",
  keywords: "AI chatbot, customer service automation, business automation, multilingual chatbot, NLP"
};

const serviceDetails = {
  title: "AI Chatbot Solutions",
  hero: {
    heading: "Transform Your Customer Service with AI",
    subheading: "Intelligent, 24/7 Support That Scales With Your Business",
    image: "/images/services/ai-chatbot-hero.jpg"
  },
  benefits: [
    {
      title: "24/7 Customer Support",
      description: "Provide instant responses to customer inquiries around the clock",
      icon: "bi-clock"
    },
    {
      title: "Multilingual Support",
      description: "Communicate with customers in their preferred language",
      icon: "bi-translate"
    },
    {
      title: "Reduced Costs",
      description: "Save up to 60% on customer service operations",
      icon: "bi-piggy-bank"
    },
    {
      title: "Increased Satisfaction",
      description: "Achieve 90%+ customer satisfaction rates",
      icon: "bi-emoji-smile"
    }
  ],
  features: [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for human-like conversations",
      details: [
        "Context awareness",
        "Sentiment analysis",
        "Intent recognition",
        "Entity extraction"
      ]
    },
    {
      title: "Integration Capabilities",
      description: "Seamless integration with your existing systems",
      details: [
        "CRM integration",
        "Help desk systems",
        "E-commerce platforms",
        "Custom APIs"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive insights into chatbot performance",
      details: [
        "Conversation analytics",
        "User satisfaction metrics",
        "Response time tracking",
        "Usage patterns"
      ]
    }
  ],
  useCases: [
    {
      title: "E-commerce Support",
      description: "Handle order inquiries, product recommendations, and returns"
    },
    {
      title: "IT Helpdesk",
      description: "Provide first-line support and ticket management"
    },
    {
      title: "HR Operations",
      description: "Answer employee queries and handle common HR requests"
    }
  ],
  implementation: {
    steps: [
      "Initial Consultation & Requirements Analysis",
      "Chatbot Design & Knowledge Base Creation",
      "Integration & Testing",
      "Training & Deployment",
      "Ongoing Optimization"
    ],
    timeline: "2-6 weeks",
    support: "24/7 technical support included"
  }
};

const AIServicePage = () => {
  return (
    <ServiceLayout 
      metadata={metadata}
      serviceDetails={serviceDetails}
    />
  );
};

export default AIServicePage; 