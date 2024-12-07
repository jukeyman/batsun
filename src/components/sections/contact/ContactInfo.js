import React from "react";

const ContactInfo = () => {
  const contactInfo = {
    address: "1342 NM-333, Ste C #5254, Tijeras, NM 87059",
    phone: "(844) 906-0865",
    email: "support@rjbizsolution.com",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM MST",
    social: {
      facebook: "https://facebook.com/rjbizsolution",
      twitter: "https://twitter.com/rjbizsolution",
      linkedin: "https://linkedin.com/company/rj-business-solutions",
      instagram: "https://instagram.com/rjbizsolution"
    }
  };

  return (
    <div className="contact-info-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info-card">
              <div className="icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>{contactInfo.address}</p>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="contact-info-card">
              <div className="icon">
                <i className="bi bi-telephone"></i>
              </div>
              <h3>Contact Info</h3>
              <p>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                <br />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="contact-info-card">
              <div className="icon">
                <i className="bi bi-clock"></i>
              </div>
              <h3>Office Hours</h3>
              <p>{contactInfo.hours}</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="social-links text-center">
              <h3>Connect With Us</h3>
              <div className="social-icons mt-3">
                <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="certifications text-center">
              <h3>Our Certifications</h3>
              <div className="certification-badges mt-3">
                <span className="badge">Woman-Owned Small Business (WOSB)</span>
                <span className="badge">Minority Business Enterprise (MBE)</span>
                <span className="badge">8(a) Business Development Program Eligible</span>
                <span className="badge">DBE (Disadvantaged Business Enterprise)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 