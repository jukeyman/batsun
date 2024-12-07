"use client";
import { useEffect } from 'react';
import { trackPageView } from '@/libs/analytics';
import Link from 'next/link';

const GrantsFundingPage = () => {
  useEffect(() => {
    trackPageView('/services/grants-funding');
  }, []);

  const grantCategories = [
    {
      title: "Small Business Innovation",
      description: "Funding for innovative startups and small businesses",
      grants: [
        {
          name: "Tech Innovation Grant",
          amount: "$50,000",
          deadline: "Monthly",
          eligibility: "Tech startups with innovative solutions"
        },
        {
          name: "Digital Transformation Fund",
          amount: "$35,000",
          deadline: "Quarterly",
          eligibility: "SMEs adopting digital technologies"
        }
      ]
    },
    {
      title: "Minority Business Development",
      description: "Support for minority-owned businesses and entrepreneurs",
      grants: [
        {
          name: "Minority Business Growth Fund",
          amount: "$75,000",
          deadline: "Annual",
          eligibility: "Minority-owned businesses"
        },
        {
          name: "Diversity in Tech Grant",
          amount: "$40,000",
          deadline: "Bi-annual",
          eligibility: "Minority-led tech companies"
        }
      ]
    },
    {
      title: "Women Entrepreneurs",
      description: "Funding opportunities for women-owned businesses",
      grants: [
        {
          name: "Women in Business Grant",
          amount: "$25,000",
          deadline: "Quarterly",
          eligibility: "Women-owned businesses"
        },
        {
          name: "Female Founder Fund",
          amount: "$50,000",
          deadline: "Rolling",
          eligibility: "Women-led startups"
        }
      ]
    }
  ];

  const fundingTypes = [
    {
      type: "Government Grants",
      description: "Federal and state funding opportunities",
      features: [
        "No repayment required",
        "Competitive application process",
        "Specific eligibility criteria",
        "Regular reporting requirements"
      ]
    },
    {
      type: "Private Grants",
      description: "Funding from corporations and foundations",
      features: [
        "Industry-specific opportunities",
        "Flexible use of funds",
        "Networking opportunities",
        "Mentorship programs"
      ]
    },
    {
      type: "Matching Grants",
      description: "Grants requiring matching funds",
      features: [
        "Dollar-for-dollar matching",
        "Demonstrates commitment",
        "Partnership opportunities",
        "Increased funding potential"
      ]
    }
  ];

  const successStories = [
    {
      company: "TechStart Solutions",
      grant: "Tech Innovation Grant",
      amount: "$50,000",
      result: "Launched innovative AI platform",
      quote: "The grant enabled us to accelerate our development and reach market faster."
    },
    {
      company: "Women's Health Tech",
      grant: "Female Founder Fund",
      amount: "$50,000",
      result: "Expanded to 3 new markets",
      quote: "The funding and mentorship were instrumental in our growth."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grants & Funding Opportunities
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Access the financial resources you need to start, grow, and scale your business
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Find Grants
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Get Assistance
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grant Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Grant Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {grantCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                {category.grants.map((grant, idx) => (
                  <div key={idx} className="border-t border-gray-200 pt-4 mt-4 first:border-0 first:pt-0 first:mt-0">
                    <h4 className="font-semibold mb-2">{grant.name}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Amount</p>
                        <p className="font-semibold text-green-600">{grant.amount}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Deadline</p>
                        <p className="font-semibold">{grant.deadline}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500">Eligibility</p>
                        <p className="font-semibold">{grant.eligibility}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Funding Types */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Types of Funding Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundingTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{type.type}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
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
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <p className="text-gray-600">{story.grant}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Grant Amount</p>
                  <p className="font-semibold text-green-600">{story.amount}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>Result:</strong> {story.result}
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Grant Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Eligibility Assessment",
                description: "We evaluate your business against grant requirements"
              },
              {
                step: 2,
                title: "Application Preparation",
                description: "Our experts help prepare compelling grant applications"
              },
              {
                step: 3,
                title: "Documentation",
                description: "Gathering and organizing required documentation"
              },
              {
                step: 4,
                title: "Submission & Follow-up",
                description: "Timely submission and tracking of applications"
              }
            ].map((step, index) => (
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

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Secure Funding for Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our experts help you identify and secure the right funding opportunities
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantsFundingPage; 