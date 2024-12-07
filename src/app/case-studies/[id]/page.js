import { getAllCaseStudies } from '@/libs/getAllCaseStudies';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    id: study.id.toString(),
  }));
}

const CaseStudyPage = ({ params }) => {
  const caseStudies = getAllCaseStudies();
  const study = caseStudies.find((s) => s.id.toString() === params.id);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-end pb-12">
            <div className="text-white">
              <div className="mb-4">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  {study.industry}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
              <p className="text-xl opacity-90 max-w-2xl">{study.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Challenge */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600">{study.fullDetails.challenge}</p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-600">{study.fullDetails.solution}</p>
            </div>

            {/* Results */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.fullDetails.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <i className="bi-graph-up text-blue-600"></i>
                    </div>
                    <p className="text-gray-700 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Implementation Time</p>
                  <p className="font-semibold">{study.implementationTime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Return on Investment</p>
                  <p className="font-semibold text-green-600">{study.roi}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Industry</p>
                  <p className="font-semibold">{study.industry}</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Ready to achieve similar results?</h3>
              <p className="mb-6 opacity-90">
                Let's discuss how our AI solutions can transform your business
              </p>
              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage; 