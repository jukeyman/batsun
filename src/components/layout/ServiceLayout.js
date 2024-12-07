"use client";
import ROICalculator from "../calculators/ROICalculator";
import DemoRequestForm from "../forms/DemoRequestForm";

const ServiceLayout = ({ metadata, serviceDetails }) => {
  const {
    title,
    hero,
    benefits,
    features,
    useCases,
    implementation
  } = serviceDetails;

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{hero.heading}</h1>
              <p className="text-xl mb-8">{hero.subheading}</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Request Demo
              </button>
            </div>
            <div className="hidden md:block">
              <img src={hero.image} alt={title} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <i className={`${benefit.icon} text-3xl text-blue-600 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <i className="bi-check-circle text-green-500 mr-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Process</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Implementation Steps</h3>
                <ol className="space-y-4">
                  {implementation.steps.map((step, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Timeline</h4>
                  <p className="text-gray-600">{implementation.timeline}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <p className="text-gray-600">{implementation.support}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Calculate Your ROI</h2>
          <ROICalculator />
        </div>
      </section>

      {/* Demo Request Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Request a Demo</h2>
          <DemoRequestForm service={title} />
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout; 