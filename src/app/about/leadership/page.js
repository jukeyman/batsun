export const metadata = {
  title: "Leadership Team | RJ Business Solutions",
  description: "Meet Angel Lewis-Jefferson and Rick Jefferson, the visionary leaders behind RJ Business Solutions, bringing expertise in AI, business automation, and digital transformation.",
};

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leaders combining innovation, expertise, and community impact
          </p>
        </div>

        {/* Leadership Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Angel's Profile */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              <img
                src="/images/team/angel-profile.jpg"
                alt="Angel Lewis-Jefferson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2">Angel Lewis-Jefferson</h2>
              <p className="text-xl text-gray-600 mb-4">Co-Founder & CEO</p>
              <div className="prose max-w-none mb-6">
                <p>
                  Angel Lewis-Jefferson leads RJ Business Solutions with a focus on 
                  transforming businesses through innovative AI solutions and strategic 
                  consulting. Her expertise in business automation and digital 
                  transformation has helped numerous organizations achieve their goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  AI Strategy
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Business Automation
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Digital Transformation
                </span>
              </div>
              <a
                href="/about/angel-lewis-jefferson"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Full Profile →
              </a>
            </div>
          </div>

          {/* Rick's Profile */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-96">
              <img
                src="/images/team/rick-blue-suit.jpg"
                alt="Rick Jefferson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2">Rick Jefferson</h2>
              <p className="text-xl text-gray-600 mb-4">Co-Founder & CTO</p>
              <div className="prose max-w-none mb-6">
                <p>
                  Rick Jefferson brings deep technical expertise and innovation to 
                  RJ Business Solutions. His leadership in AI development and system 
                  architecture ensures cutting-edge solutions that drive real business 
                  results for our clients.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  AI Development
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  System Architecture
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Technical Strategy
                </span>
              </div>
              <a
                href="/about/rick-jefferson"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Full Profile →
              </a>
            </div>
          </div>
        </div>

        {/* Team Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/team/team-family.jpg"
              alt="RJ Business Solutions Team"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Our Team</h3>
              <p className="text-gray-600">A family-oriented business committed to excellence</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/team/rick-city.jpg"
              alt="Business Leadership"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Business Leadership</h3>
              <p className="text-gray-600">Leading innovation in modern business</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/events/community-event.jpg"
              alt="Community Engagement"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Community Impact</h3>
              <p className="text-gray-600">Making a difference in our community</p>
            </div>
          </div>
        </div>

        {/* Vision & Impact */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <div className="prose max-w-none">
                <p>
                  At RJ Business Solutions, we believe in transforming businesses 
                  through innovative technology and strategic consulting. Our 
                  leadership team combines deep technical expertise with practical 
                  business acumen to deliver results.
                </p>
                <p className="mt-4">
                  As a minority-owned and woman-owned business, we're committed to 
                  bringing diverse perspectives and innovative solutions to every 
                  challenge we tackle.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Over 100+ successful AI implementations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>$50M+ in secured government contracts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>85% average efficiency improvement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Nationwide service coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Work With Our Team</h2>
          <p className="text-lg mb-6 opacity-90">
            Transform your business with expert guidance and innovative solutions
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Schedule a Consultation
            </a>
            <a
              href="/case-studies"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage; 