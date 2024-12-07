import React from "react";
import Image from "next/image";
import Link from "next/link";

const StorePage = () => {
  const products = [
    {
      id: 1,
      category: "Business Templates",
      items: [
        {
          id: "bt1",
          name: "Business Plan Template Bundle",
          price: 49.99,
          description: "Complete business plan templates with financial projections",
          image: "/images/store/business-plan-template.jpg",
          features: [
            "Executive Summary Template",
            "Financial Projections Spreadsheet",
            "Marketing Plan Template",
            "Operations Plan Template",
            "Video Tutorial Guide"
          ]
        },
        {
          id: "bt2",
          name: "Legal Document Package",
          price: 79.99,
          description: "Essential legal templates for business operations",
          image: "/images/store/legal-templates.jpg",
          features: [
            "Service Agreement Template",
            "Client Contract Template",
            "NDA Template",
            "Employee Handbook Template",
            "Policy Documents"
          ]
        }
      ]
    },
    {
      id: 2,
      category: "Digital Courses",
      items: [
        {
          id: "dc1",
          name: "AI Implementation Masterclass",
          price: 199.99,
          description: "Learn to implement AI solutions in your business",
          image: "/images/store/ai-course.jpg",
          features: [
            "10+ Hours of Video Content",
            "Practical Exercises",
            "Case Studies",
            "Implementation Guides",
            "Lifetime Access"
          ]
        },
        {
          id: "dc2",
          name: "Business Growth Strategy",
          price: 149.99,
          description: "Comprehensive course on business growth and scaling",
          image: "/images/store/growth-course.jpg",
          features: [
            "8 Learning Modules",
            "Growth Strategy Templates",
            "Market Analysis Tools",
            "Expert Interviews",
            "Community Access"
          ]
        }
      ]
    },
    {
      id: 3,
      category: "Digital Tools",
      items: [
        {
          id: "dt1",
          name: "ROI Calculator Pro",
          price: 29.99,
          description: "Advanced ROI calculation tool for business decisions",
          image: "/images/store/roi-calculator.jpg",
          features: [
            "Multiple Project Analysis",
            "Custom Metrics",
            "Report Generation",
            "Data Export",
            "Regular Updates"
          ]
        },
        {
          id: "dt2",
          name: "Business Analytics Dashboard",
          price: 39.99,
          description: "Comprehensive business metrics tracking tool",
          image: "/images/store/analytics-dashboard.jpg",
          features: [
            "Real-time Metrics",
            "Custom Reports",
            "Data Visualization",
            "Performance Tracking",
            "Export Capabilities"
          ]
        }
      ]
    }
  ];

  return (
    <div className="store-page">
      <div className="hero-section text-center py-5">
        <div className="container">
          <h1>Digital Resource Store</h1>
          <p className="lead">
            Professional tools and resources to help grow your business
          </p>
        </div>
      </div>

      {products.map((category) => (
        <div key={category.id} className="category-section py-5">
          <div className="container">
            <h2 className="mb-4">{category.category}</h2>
            <div className="row">
              {category.items.map((product) => (
                <div key={product.id} className="col-md-6 mb-4">
                  <div className="product-card">
                    <div className="product-image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="img-fluid"
                      />
                    </div>
                    <div className="product-content p-4">
                      <h3>{product.name}</h3>
                      <p className="price">${product.price}</p>
                      <p className="description">{product.description}</p>
                      <div className="features">
                        <h4>Features:</h4>
                        <ul>
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={`/store/product/${product.id}`}
                        className="btn btn-primary mt-3"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="custom-solutions py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Need Custom Solutions?</h2>
              <p>
                We offer custom development of digital tools and resources tailored
                to your specific business needs.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="col-md-6">
              <div className="benefits">
                <h3>Benefits of Custom Solutions:</h3>
                <ul>
                  <li>Tailored to Your Business Needs</li>
                  <li>Scalable and Flexible</li>
                  <li>Ongoing Support</li>
                  <li>Integration with Existing Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>
                  "The business plan template saved me countless hours and helped
                  me secure funding for my startup."
                </p>
                <p className="author">- Sarah M., Tech Entrepreneur</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>
                  "The AI Implementation Masterclass provided practical knowledge
                  that we immediately applied to our business."
                </p>
                <p className="author">- Michael R., Business Owner</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p>
                  "The analytics dashboard has transformed how we track and
                  improve our business performance."
                </p>
                <p className="author">- Lisa K., Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="faq-item">
                <h4>How do I access my purchases?</h4>
                <p>
                  After purchase, you'll receive immediate access to your digital
                  products through our secure customer portal.
                </p>
              </div>
              <div className="faq-item">
                <h4>Do you offer refunds?</h4>
                <p>
                  Yes, we offer a 30-day money-back guarantee on all digital
                  products if you're not satisfied.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-item">
                <h4>Can I get updates to the products?</h4>
                <p>
                  Yes, all our digital products include free updates for one year
                  from the purchase date.
                </p>
              </div>
              <div className="faq-item">
                <h4>Do you offer bulk pricing?</h4>
                <p>
                  Yes, we offer special pricing for bulk purchases and enterprise
                  licenses. Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage; 