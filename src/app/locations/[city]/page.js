import { serviceArea } from '@/libs/localSEO';

export async function generateStaticParams() {
  return serviceArea.primaryCities.map((city) => ({
    city: city.name.toLowerCase()
  }));
}

export default function CityPage({ params }) {
  const cityData = serviceArea.primaryCities.find(
    city => city.name.toLowerCase() === params.city
  );

  if (!cityData) {
    return <div>City not found</div>;
  }

  return (
    <div className="city-page">
      <div className="hero-section">
        <h1>{cityData.name}, {cityData.state} Services</h1>
        <p>Serving businesses in {cityData.name} and surrounding areas</p>
      </div>
      
      <div className="container">
        <div className="service-area-info">
          <h2>Local Business Services</h2>
          <p>We provide comprehensive business solutions in {cityData.name}, including:</p>
          <ul>
            <li>AI Implementation & Automation</li>
            <li>Business Formation Services</li>
            <li>Payroll & HR Management</li>
            <li>Strategic Consulting</li>
          </ul>
        </div>

        <div className="contact-section">
          <h2>Contact Our {cityData.name} Office</h2>
          <p>Get in touch with our local team to discuss your business needs.</p>
          <div className="contact-info">
            <p>Phone: (844) 906-0865</p>
            <p>Email: support@rjbizsolution.com</p>
          </div>
        </div>
      </div>
    </div>
  );
} 