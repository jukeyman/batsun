"use client";
import Image from "next/image";
import Link from "next/link";
// import serviceDetailsImage1 from "@/assets/img/service/service__details__1.jpg";
// import serviceDetailsImage2 from "@/assets/img/service/service__details__2.jpg";

const ServiceDetailsPrimary = ({ service }) => {
  const serviceContent = {
    overview: `Our ${service?.title || 'AI & Automation'} services are designed to transform your business operations through cutting-edge technology and expert implementation. We focus on delivering measurable results that directly impact your bottom line.

Key Benefits:
- Increased operational efficiency
- Reduced costs and improved ROI
- Enhanced customer experience
- Scalable solutions for growth
- Expert implementation support`,

    implementation: `Our proven implementation process ensures successful adoption and maximum value:

1. Initial Assessment
   - Business needs analysis
   - Current process evaluation
   - ROI projection

2. Solution Design
   - Custom solution architecture
   - Integration planning
   - Security considerations

3. Implementation
   - Phased rollout approach
   - Team training
   - System integration

4. Optimization
   - Performance monitoring
   - Continuous improvement
   - Ongoing support`,

    expertise: `With years of experience in implementing AI and automation solutions, our team brings:

- Deep technical expertise
- Industry best practices
- Proven implementation methodology
- Comprehensive support system
- Regular updates and improvements

We work closely with your team to ensure smooth adoption and maximum value from your investment.`
  };

  return (
    <div className="service__details__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="service__sidebar">
              <div className="service__sidebar__wraper">
                <div className="service__sidebar__title">
                  <h4>All Services</h4>
                </div>
                <div className="service__sidebar__list">
                  <ul>
                    <li>
                      <Link href="/services/ai-chatbot">
                        AI Chatbot Solutions
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/business-formation">
                        Business Formation
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/grants-funding">
                        Grants & Funding
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/automation">
                        Business Automation
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/analytics">
                        Business Analytics
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="service__sidebar__wraper"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service__sidebar__title">
                  <h4>Business Hours</h4>
                </div>
                <div className="service__sidebar__time">
                  <ul>
                    <li>
                      Monday <span>9:00 - 5:00</span>
                    </li>
                    <li>
                      Tuesday <span>9:00 - 5:00</span>
                    </li>
                    <li>
                      Wednesday <span>9:00 - 5:00</span>
                    </li>
                    <li>
                      Thursday <span>9:00 - 5:00</span>
                    </li>
                    <li>
                      Friday <span>9:00 - 5:00</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="service__sidebar__wraper"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service__sidebar__title">
                  <h4>Contact Info</h4>
                </div>
                <div className="service__sidebar__contact">
                  <ul>
                    <li>
                      <i className="bi bi-telephone"></i>
                      (844) 906-0865
                    </li>
                    <li>
                      <i className="bi bi-envelope"></i>
                      support@rjbizsolution.com
                    </li>
                    <li>
                      <i className="bi bi-geo-alt"></i>
                      1342 NM-333, Ste C #5254
                      <br />Tijeras, NM 87059
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="service__details__content">
              <div className="service__details__img">
                <Image 
                  src="/images/services/service-details-1.jpg" 
                  alt="Service Details"
                  width={800}
                  height={600}
                />
              </div>
              <div
                className="service__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {serviceContent.overview}
              </div>
              <div
                className="service__details__planning"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__img">
                      <Image
                        src="/images/services/service-details-2.jpg"
                        alt="Implementation Planning"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="service__details__planning__inner">
                      <div className="service__details__planning__heading">
                        <h6>Implementation Planning:</h6>
                      </div>
                      <div className="service__details__planning__text">
                        {serviceContent.implementation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="service__details__text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {serviceContent.expertise}
              </div>
              <div
                className="service__details__button"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Link className="default__button" href="/contact">
                  GET A FREE QUOTE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPrimary;
