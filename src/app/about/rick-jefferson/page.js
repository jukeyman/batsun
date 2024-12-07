export const metadata = {
  title: "Rick Jefferson | CTO & Co-Founder - RJ Business Solutions",
  description: "Meet Rick Jefferson, CTO and co-founder of RJ Business Solutions. Leading technical innovation in AI implementation and system architecture.",
};

const RickProfile = () => {
  const achievements = [
    {
      title: "Technical Innovation",
      description: "Led development of proprietary AI implementation frameworks",
      icon: "bi-lightbulb"
    },
    {
      title: "Project Success",
      description: "100+ successful technical implementations",
      icon: "bi-check-circle"
    },
    {
      title: "Enterprise Solutions",
      description: "Architected scalable solutions for major organizations",
      icon: "bi-building"
    },
    {
      title: "Team Leadership",
      description: "Built and led high-performing technical teams",
      icon: "bi-people"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[500px] rounded-xl overflow-hidden mb-16">
          <img 
            src="/images/team/rick-city.jpg"
            alt="Rick Jefferson"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Rick Jefferson
                </h1>
                <p className="text-xl opacity-90 mb-6">
                  Co-Founder & Chief Technology Officer
                </p>
                <p className="text-lg opacity-80">
                  Leading technical innovation and AI implementation at RJ Business Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <img 
                src="/images/team/rick-blue-suit.jpg"
                alt="Rick Jefferson Professional"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Areas of Expertise</h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <i className="bi-code-square text-blue-600"></i>
                    <span>AI Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="bi-diagram-3 text-blue-600"></i>
                    <span>System Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="bi-gear text-blue-600"></i>
                    <span>Technical Strategy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="bi-building text-blue-600"></i>
                    <span>Enterprise Solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Connect with Rick</h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                  <i className="bi-linkedin text-xl"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                  <i className="bi-twitter text-xl"></i>
                  <span>Twitter</span>
                </a>
                <a href="mailto:rick@rjbizsolution.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                  <i className="bi-envelope text-xl"></i>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">About Rick</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Rick Jefferson is the technical visionary behind RJ Business Solutions, 
                  bringing extensive expertise in AI development, system architecture, and 
                  enterprise solutions. His innovative approach to technology implementation 
                  has helped organizations across various industries achieve digital transformation.
                </p>
                <p className="mb-4">
                  As CTO, Rick leads the technical strategy and implementation of 
                  cutting-edge AI solutions. His focus on practical, scalable technology 
                  ensures that our clients receive solutions that not only solve today's 
                  challenges but are also future-proof.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${achievement.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Leadership */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Technical Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">AI & Machine Learning</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Predictive Analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Computer Vision</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Deep Learning</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Enterprise Architecture</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Scalable Systems</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Cloud Infrastructure</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Security Implementation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600">✓</span>
                      <span>Integration Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Enterprise AI Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Developed a scalable AI platform serving 10,000+ users with 99.9% uptime.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600">ROI: 300%</span>
                    <span className="text-gray-500">Completion: 2023</span>
                  </div>
                </div>
                <div className="border rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">Workflow Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Built an intelligent workflow automation system reducing processing time by 85%.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600">ROI: 250%</span>
                    <span className="text-gray-500">Completion: 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Work with Rick</h2>
          <p className="text-lg mb-6 opacity-90">
            Transform your business with expert technical guidance and innovative solutions
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Schedule a Technical Consultation
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Technical Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickProfile; 