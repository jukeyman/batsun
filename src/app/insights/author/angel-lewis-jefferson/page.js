import { getAllBlogs } from '@/libs/getAllBlogs';

export const metadata = {
  title: "Angel Lewis-Jefferson's Insights | AI & Business Transformation",
  description: "Expert insights on AI implementation, business automation, and digital transformation from Angel Lewis-Jefferson, CEO of RJ Business Solutions.",
};

const AngelAuthorPage = () => {
  const allBlogs = getAllBlogs();
  const angelBlogs = allBlogs.filter(blog => blog.author === "Angel Lewis-Jefferson");

  const categories = [
    "AI Technology",
    "Business Strategy",
    "Digital Transformation",
    "Leadership",
    "Minority Business",
    "Government Contracting"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Author Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3">
              <img 
                src="/images/team/angel-lewis.jpg"
                alt="Angel Lewis-Jefferson"
                className="rounded-xl shadow-md w-full"
              />
            </div>
            <div className="md:col-span-9">
              <h1 className="text-4xl font-bold mb-4">Angel Lewis-Jefferson</h1>
              <p className="text-xl text-gray-600 mb-6">
                CEO & Founder, RJ Business Solutions
              </p>
              <p className="text-gray-600 mb-6">
                Angel Lewis-Jefferson shares insights on AI implementation, business transformation, 
                and strategies for minority-owned businesses. With over 15 years of experience, 
                she provides practical advice for leveraging technology in modern business.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="/about/angel-lewis-jefferson"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Full Profile →
                </a>
                <a 
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Connect →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Featured In</h2>
              <div className="space-y-3">
                <div className="text-gray-600">
                  <p className="font-semibold">Tech Innovation Quarterly</p>
                  <p className="text-sm">Contributing Author</p>
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold">AI Business Review</p>
                  <p className="text-sm">Expert Columnist</p>
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold">Minority Business Journal</p>
                  <p className="text-sm">Advisory Board Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {angelBlogs.map((blog, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                    <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{blog.category}</span>
                      <a 
                        href={`/insights/${blog.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 opacity-90">
            Get the latest insights on AI, business transformation, and minority business development
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AngelAuthorPage; 