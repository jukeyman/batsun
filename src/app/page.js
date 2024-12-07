import IndexMain from "@/components/layout/main/IndexMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "RJ Business Solutions | AI, Bots & Business Automation",
  description: "Transform your business with cutting-edge AI solutions, chatbots, and automation services. From customer support to workflow optimization, we deliver intelligent solutions for modern businesses.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            RJ Business Solutions
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <ul className="space-y-2">
                <li>✓ Business Formation</li>
                <li>✓ Grants & Funding</li>
                <li>✓ AI Solutions</li>
                <li>✓ Business Consulting</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <ul className="space-y-2">
                <li>✓ Expert Guidance</li>
                <li>✓ Proven Results</li>
                <li>✓ Personalized Service</li>
                <li>✓ Innovative Solutions</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
