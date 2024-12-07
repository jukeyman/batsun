import { serviceArea } from '@/libs/localSEO';

export default function LocationsPage() {
  return (
    <div className="locations-page">
      <div className="hero-section">
        <h1>Our Service Locations</h1>
        <p>Serving businesses across New Mexico</p>
      </div>
      
      <div className="container">
        <div className="locations-grid">
          {serviceArea.primaryCities.map((city, index) => (
            <div key={index} className="location-card">
              <h2>{city.name}, {city.state}</h2>
              <p>Zip: {city.zip}</p>
              <div className="services-list">
                <h3>Available Services:</h3>
                <ul>
                  <li>AI Implementation & Automation</li>
                  <li>Business Formation Services</li>
                  <li>Payroll & HR Management</li>
                  <li>Strategic Consulting</li>
                </ul>
              </div>
              <div className="contact-info">
                <p>Phone: (844) 906-0865</p>
                <p>Email: support@rjbizsolution.com</p>
              </div>
            </div>
          ))}
        </div>

        <div className="service-area-info">
          <h2>Service Coverage</h2>
          <p>We provide services within a {serviceArea.radius} radius of our primary locations.</p>
          <p>States served: {serviceArea.states.join(', ')}</p>
        </div>
      </div>
    </div>
  );
} 