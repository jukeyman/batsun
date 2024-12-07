export const metadata = {
  title: "Angel Lewis-Jefferson | CEO & Founder - RJ Business Solutions",
  description: "Meet Angel Lewis-Jefferson, CEO and founder of RJ Business Solutions. Leading AI implementation and business transformation with over 15 years of experience.",
};

const AngelProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Angel Lewis-Jefferson
          </h1>
          <p className="text-xl text-gray-600">
            CEO & Founder, RJ Business Solutions
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/images/team/angel-lewis.jpg" 
                alt="Angel Lewis-Jefferson" 
                className="w-full h-auto"
              />
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Certifications</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>SAM Registered</li>
                    <li>Woman-Owned Small Business (WOSB)</li>
                    <li>Minority Business Enterprise (MBE)</li>
                    <li>8(a) Business Development Program</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Connect</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                    <a href="#" className="text-blue-600 hover:text-blue-700">Twitter</a>
                    <a href="mailto:angel@rjbizsolution.com" className="text-blue-600 hover:text-blue-700">Email</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">About Angel</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Angel Lewis-Jefferson is the visionary founder and CEO of RJ Business Solutions, 
                  a leading AI implementation and business consulting firm. With over 15 years of 
                  experience in business technology and digital transformation, Angel has helped 
                  numerous organizations achieve their strategic goals through innovative solutions.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Expertise</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>AI Strategy Development & Implementation</li>
                  <li>Business Process Automation</li>
                  <li>Digital Transformation</li>
                  <li>Government Contracting</li>
                  <li>Business Formation & Strategy</li>
                  <li>Minority Business Development</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Leadership & Vision</h3>
                <p className="mb-4">
                  As a minority woman business owner, Angel is passionate about helping other 
                  businesses leverage technology to achieve their full potential. Her approach 
                  combines cutting-edge AI solutions with practical business strategies, ensuring 
                  clients receive both innovative technology and sustainable results.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Achievements</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Successfully implemented AI solutions for over 100 businesses</li>
                  <li>Helped clients secure over $50M in government contracts</li>
                  <li>Recognized leader in minority business development</li>
                  <li>Featured speaker at technology and business conferences</li>
                  <li>Mentor for emerging women entrepreneurs</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Speaking & Consulting</h3>
                <p>
                  Angel regularly speaks on topics including AI implementation, digital 
                  transformation, and minority business development. She is available for 
                  speaking engagements, workshops, and strategic consulting sessions.
                </p>
              </div>
            </div>

            {/* Featured Insights */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Featured Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">The Future of AI in Business</h3>
                  <p className="text-gray-600 mb-4">Exploring how AI is transforming business operations and decision-making.</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Read More →</a>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Empowering Minority Businesses</h3>
                  <p className="text-gray-600 mb-4">Strategies for success in the modern business landscape.</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700">Read More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Work with Angel</h2>
          <p className="text-lg mb-6">
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
              href="/speaking" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book for Speaking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngelProfile; 