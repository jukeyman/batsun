const featureComparison = {
  categories: [
    {
      name: "AI Chatbot Features",
      features: [
        {
          name: "Natural Language Processing",
          starter: "Basic",
          business: "Advanced",
          enterprise: "Enterprise-grade"
        },
        {
          name: "Multi-language Support",
          starter: "3 languages",
          business: "10 languages",
          enterprise: "Unlimited languages"
        },
        {
          name: "Custom Training",
          starter: "Limited",
          business: "Full",
          enterprise: "Advanced + Custom Models"
        },
        {
          name: "Integration Capabilities",
          starter: "Basic API",
          business: "Full API + CRM",
          enterprise: "Custom Integration"
        }
      ]
    },
    {
      name: "Workflow Automation",
      features: [
        {
          name: "Automated Workflows",
          starter: "5 workflows",
          business: "15 workflows",
          enterprise: "Unlimited"
        },
        {
          name: "Process Complexity",
          starter: "Simple",
          business: "Advanced",
          enterprise: "Complex + Custom"
        },
        {
          name: "Integration Points",
          starter: "3",
          business: "10",
          enterprise: "Unlimited"
        },
        {
          name: "Automation Templates",
          starter: "Basic set",
          business: "Extended library",
          enterprise: "Custom templates"
        }
      ]
    },
    {
      name: "Analytics & Reporting",
      features: [
        {
          name: "Predictive Analytics",
          starter: "Basic insights",
          business: "Advanced predictions",
          enterprise: "Custom models"
        },
        {
          name: "Report Generation",
          starter: "Monthly",
          business: "Weekly",
          enterprise: "Real-time"
        },
        {
          name: "Data Sources",
          starter: "Limited",
          business: "Extended",
          enterprise: "Unlimited"
        },
        {
          name: "Custom Dashboards",
          starter: "1 dashboard",
          business: "5 dashboards",
          enterprise: "Unlimited"
        }
      ]
    },
    {
      name: "Support & Training",
      features: [
        {
          name: "Support Hours",
          starter: "8/5",
          business: "24/7",
          enterprise: "24/7 Priority"
        },
        {
          name: "Training Sessions",
          starter: "Basic online",
          business: "Full online + 2 workshops",
          enterprise: "Custom program"
        },
        {
          name: "Documentation",
          starter: "Standard",
          business: "Extended",
          enterprise: "Custom + API docs"
        },
        {
          name: "Account Management",
          starter: "Email support",
          business: "Dedicated rep",
          enterprise: "Senior consultant"
        }
      ]
    },
    {
      name: "Security & Compliance",
      features: [
        {
          name: "Data Encryption",
          starter: "Standard",
          business: "Advanced",
          enterprise: "Military-grade"
        },
        {
          name: "Compliance Support",
          starter: "Basic",
          business: "Full",
          enterprise: "Custom"
        },
        {
          name: "Security Audits",
          starter: "Quarterly",
          business: "Monthly",
          enterprise: "Weekly + Custom"
        },
        {
          name: "Access Controls",
          starter: "Basic",
          business: "Advanced",
          enterprise: "Custom + SSO"
        }
      ]
    }
  ],
  plans: [
    {
      name: "Starter AI Package",
      price: "999",
      description: "Perfect for small businesses starting with AI",
      bestFor: ["Small businesses", "Basic automation needs", "Limited budget"]
    },
    {
      name: "Business AI Suite",
      price: "2499",
      description: "Comprehensive solution for growing businesses",
      bestFor: ["Medium businesses", "Growing automation needs", "Multiple departments"]
    },
    {
      name: "Enterprise AI",
      price: "4999",
      description: "Custom solutions for large organizations",
      bestFor: ["Large enterprises", "Complex automation", "Custom requirements"]
    }
  ]
};

const getFeatureComparison = () => {
  return featureComparison;
};

export default getFeatureComparison; 