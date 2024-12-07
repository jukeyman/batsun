const faqs = [
  {
    id: 1,
    category: "AI Chatbots",
    questions: [
      {
        question: "What kind of chatbot solutions do you offer?",
        answer: "We offer customizable AI chatbots that can handle customer service, lead generation, appointment scheduling, and product recommendations. Our chatbots use advanced natural language processing and can be integrated with your existing systems."
      },
      {
        question: "How long does it take to implement a chatbot?",
        answer: "Basic chatbot implementation typically takes 2-3 weeks, while more complex solutions with custom integrations may take 4-6 weeks. We ensure thorough testing and training before launch."
      }
    ]
  },
  {
    id: 2,
    category: "Workflow Automation",
    questions: [
      {
        question: "Which business processes can be automated?",
        answer: "We can automate various processes including data entry, invoice processing, inventory management, email responses, HR onboarding, and more. Our team analyzes your workflows to identify the best automation opportunities."
      },
      {
        question: "What ROI can I expect from automation?",
        answer: "Most clients see ROI within 3-6 months, with typical cost savings of 40-60% on automated processes. Time savings often exceed 70% for automated tasks."
      }
    ]
  },
  {
    id: 3,
    category: "Predictive Analytics",
    questions: [
      {
        question: "What kind of predictions can your analytics provide?",
        answer: "Our predictive analytics can forecast sales trends, customer behavior, inventory needs, maintenance requirements, and market trends. We use machine learning to analyze your historical data and provide actionable insights."
      },
      {
        question: "How accurate are your predictions?",
        answer: "Our predictive models typically achieve 85-95% accuracy, depending on the quality and quantity of historical data available. We continuously refine our models for improved accuracy."
      }
    ]
  },
  {
    id: 4,
    category: "Implementation & Support",
    questions: [
      {
        question: "Do you provide training for your AI solutions?",
        answer: "Yes, we provide comprehensive training for all our solutions. This includes user manuals, video tutorials, and hands-on training sessions for your team. We also offer ongoing support and updates."
      },
      {
        question: "What kind of support do you offer?",
        answer: "We offer different levels of support based on your package - from basic 8/5 support to 24/7 priority support for enterprise clients. This includes technical support, maintenance, and regular system updates."
      }
    ]
  },
  {
    id: 5,
    category: "Security & Privacy",
    questions: [
      {
        question: "How do you ensure data security?",
        answer: "We implement enterprise-grade security measures including encryption, secure APIs, regular security audits, and compliance with industry standards. All data is stored in secure, compliant facilities."
      },
      {
        question: "Are your solutions GDPR compliant?",
        answer: "Yes, all our AI and automation solutions are designed with privacy in mind and are fully compliant with GDPR and other relevant data protection regulations."
      }
    ]
  }
];

const getAllFaqs = () => {
  return faqs;
};

export default getAllFaqs; 