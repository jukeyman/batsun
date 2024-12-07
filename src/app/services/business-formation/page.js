"use client";
import { useEffect } from 'react';
import { trackPageView } from '@/libs/analytics';
import Link from 'next/link';

const BusinessFormationPage = () => {
  useEffect(() => {
    trackPageView('/services/business-formation');
  }, []);

  const formationServices = [
    {
      title: "Business Structure Setup",
      description: "Expert guidance in choosing and establishing the right business structure (LLC, Corporation, Partnership)",
      features: [
        "Entity type analysis and recommendation",
        "State filing and registration",
        "EIN registration",
        "Operating agreements and bylaws",
        "Compliance documentation"
      ],
      icon: "bi-building"
    },
    {
      title: "Grant & Funding Assistance",
      description: "Access to grants, funding opportunities, and financial resources for your business",
      features: [
        "Grant opportunity identification",
        "Application assistance",
        "Proposal writing support",
        "Documentation preparation",
        "Funding strategy development"
      ],
      icon: "bi-cash-coin"
    },
    {
      title: "Compliance & Licensing",
      description: "Ensuring your business meets all regulatory requirements and maintains proper licensing",
      features: [
        "License identification and application",
        "Regulatory compliance review",
        "Permit acquisition",
        "Annual compliance monitoring",
        "Renewal management"
      ],
      icon: "bi-shield-check"
    },
    {
      title: "Business Planning",
      description: "Comprehensive business planning services to set your venture up for success",
      features: [
        "Market analysis",
        "Financial projections",
        "Strategic planning",
        "Growth strategy development",
        "Risk assessment"
      ],
      icon: "bi-graph-up"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your business goals, structure options, and requirements"
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Creating a customized formation and compliance plan"
    },
    {
      step: 3,
      title: "Documentation",
      description: "Preparing and filing all necessary legal documents"
    },
    {
      step: 4,
      title: "Registration & Setup",
      description: "Handling state registration, EIN, and initial compliance"
    },
    {
      step: 5,
      title: "Ongoing Support",
      description: "Providing continued compliance and growth assistance"
    }
  ];

  const grants = [
    {
      name: "Small Business Innovation Grant",
      amount: "Up to $50,000",
      eligibility: "Tech startups and innovative small businesses",
      deadline: "Monthly rolling applications"
    },
    {
      name: "Women-Owned Business Fund",
      amount: "Up to $25,000",
      eligibility: "Women entrepreneurs and business owners",
      deadline: "Quarterly applications"
    },
    {
      name: "Minority Business Development Grant",
      amount: "Up to $75,000",
      eligibility: "Minority-owned businesses and startups",
      deadline: "Annual applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Formation & Growth Services
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Expert guidance in business formation, grant acquisition, and compliance management
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive Business Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formationServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-blue-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="bi-check-circle-fill text-green-500 mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Formation Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Available Grants */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Grants & Funding
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {grants.map((grant, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">{grant.name}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-semibold text-green-600">{grant.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Eligibility</p>
                  <p className="font-semibold">{grant.eligibility}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Application Deadline</p>
                  <p className="font-semibold">{grant.deadline}</p>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through the formation process and help secure the funding you need
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Schedule Free Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Download Guide
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {[
            {
              question: "How long does the formation process take?",
              answer: "Typical business formation takes 2-3 weeks, depending on state requirements and chosen structure."
            },
            {
              question: "What grants are available for my business?",
              answer: "We help identify grants based on your industry, location, and business type, with options ranging from $5,000 to $100,000+."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Yes, we offer continuous compliance monitoring, renewal management, and growth advisory services."
            },
            {
              question: "What business structure is right for me?",
              answer: "We analyze your specific needs, goals, and circumstances to recommend the most advantageous structure."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessFormationPage; 