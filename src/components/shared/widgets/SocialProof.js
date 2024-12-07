"use client";
import { useState, useEffect } from 'react';

const SocialProof = ({ type = 'floating' }) => {
  const [currentProof, setCurrentProof] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const proofs = [
    {
      type: 'recent',
      text: 'Global Retail Solutions just implemented our AI chatbot',
      time: '2 minutes ago',
      icon: 'bi-robot'
    },
    {
      type: 'stat',
      text: '85% average cost reduction for our clients',
      subtext: 'Based on last 100 implementations',
      icon: 'bi-graph-up'
    },
    {
      type: 'social',
      text: '500+ businesses trust our AI solutions',
      subtext: 'Join our growing community',
      icon: 'bi-people'
    },
    {
      type: 'award',
      text: 'Awarded Best AI Implementation 2024',
      subtext: 'Tech Excellence Awards',
      icon: 'bi-trophy'
    }
  ];

  const trustIndicators = {
    clients: '500+',
    satisfaction: '98%',
    implementations: '1000+',
    savings: '$50M+'
  };

  useEffect(() => {
    if (type === 'floating') {
      const interval = setInterval(() => {
        setCurrentProof((prev) => (prev + 1) % proofs.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [type, proofs.length]);

  if (type === 'floating') {
    return (
      <div 
        className={`fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <button 
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={() => setIsVisible(false)}
        >
          <i className="bi-x text-xl"></i>
        </button>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <i className={`${proofs[currentProof].icon} text-blue-600 text-xl`}></i>
          </div>
          <div>
            <p className="font-semibold text-gray-800">{proofs[currentProof].text}</p>
            {proofs[currentProof].subtext && (
              <p className="text-sm text-gray-600">{proofs[currentProof].subtext}</p>
            )}
            {proofs[currentProof].time && (
              <p className="text-xs text-gray-500">{proofs[currentProof].time}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'banner') {
    return (
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(trustIndicators).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{value}</div>
                <div className="text-sm text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sidebar') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Why Choose Us</h3>
        <div className="space-y-4">
          {proofs.map((proof, index) => (
            <div key={index} className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <i className={`${proof.icon} text-blue-600`}></i>
              </div>
              <div>
                <p className="text-sm font-semibold">{proof.text}</p>
                {proof.subtext && (
                  <p className="text-xs text-gray-600">{proof.subtext}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default SocialProof; 