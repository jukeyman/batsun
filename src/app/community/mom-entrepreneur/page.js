import React from "react";
import Image from "next/image";
import Link from "next/link";

const MomEntrepreneurPage = () => {
  return (
    <div className="mom-entrepreneur-page">
      <div className="hero-section text-center py-5">
        <div className="container">
          <h1>MomEntrepreneur Community</h1>
          <p className="lead">
            Empowering mom entrepreneurs to build successful businesses while
            balancing family life.
          </p>
        </div>
      </div>

      <div className="features-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3>Community Support</h3>
                <p>
                  Connect with other mom entrepreneurs, share experiences, and build
                  lasting relationships.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon">
                  <i className="bi bi-lightbulb-fill"></i>
                </div>
                <h3>Business Resources</h3>
                <p>
                  Access exclusive tools, templates, and guides designed for mom
                  entrepreneurs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <div className="icon">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <h3>Events & Workshops</h3>
                <p>
                  Participate in regular events, workshops, and networking
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="membership-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Membership Benefits</h2>
          <div className="row">
            <div className="col-md-6">
              <ul className="benefits-list">
                <li>Monthly Mastermind Sessions</li>
                <li>Business Formation Guidance</li>
                <li>Marketing Strategy Support</li>
                <li>Work-Life Balance Coaching</li>
                <li>Exclusive Discounts on Services</li>
                <li>Priority Access to Events</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="membership-cta">
                <h3>Join Our Community</h3>
                <p>
                  Get started with a free 30-day trial membership. No credit card
                  required.
                </p>
                <Link href="/community/join" className="btn btn-primary">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="success-stories-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Success Stories</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="story-card">
                <Image
                  src="/images/success-stories/story1.jpg"
                  alt="Sarah's Story"
                  width={350}
                  height={250}
                  className="img-fluid"
                />
                <h4>Sarah's Journey</h4>
                <p>
                  "The MomEntrepreneur community helped me launch my online
                  business while caring for my two young children."
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="story-card">
                <Image
                  src="/images/success-stories/story2.jpg"
                  alt="Maria's Story"
                  width={350}
                  height={250}
                  className="img-fluid"
                />
                <h4>Maria's Success</h4>
                <p>
                  "I found the perfect balance between motherhood and
                  entrepreneurship through the support of this amazing community."
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="story-card">
                <Image
                  src="/images/success-stories/story3.jpg"
                  alt="Lisa's Story"
                  width={350}
                  height={250}
                  className="img-fluid"
                />
                <h4>Lisa's Growth</h4>
                <p>
                  "From a small home-based business to a thriving company, the
                  MomEntrepreneur community was there every step of the way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="upcoming-events-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Upcoming Events</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="event-card">
                <h4>Monthly Mastermind Session</h4>
                <p className="date">December 15, 2024 | 7:00 PM MST</p>
                <p>
                  Join us for our monthly mastermind session focused on scaling
                  your business while maintaining work-life balance.
                </p>
                <Link href="/events/register" className="btn btn-outline-primary">
                  Register Now
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-card">
                <h4>Business Growth Workshop</h4>
                <p className="date">January 10, 2025 | 10:00 AM MST</p>
                <p>
                  Learn practical strategies for growing your business with limited
                  time and resources.
                </p>
                <Link href="/events/register" className="btn btn-outline-primary">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resources-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Free Resources</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="resource-card">
                <h4>Business Planning Guide</h4>
                <p>
                  Download our comprehensive guide to creating a business plan that
                  works for busy moms.
                </p>
                <Link href="/resources/download" className="btn btn-link">
                  Download Now
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <h4>Time Management Templates</h4>
                <p>
                  Get our collection of time management templates designed for mom
                  entrepreneurs.
                </p>
                <Link href="/resources/download" className="btn btn-link">
                  Download Now
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="resource-card">
                <h4>Marketing Toolkit</h4>
                <p>
                  Access our starter marketing toolkit with social media templates
                  and content ideas.
                </p>
                <Link href="/resources/download" className="btn btn-link">
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="join-cta-section py-5 text-center">
        <div className="container">
          <h2>Ready to Join Our Community?</h2>
          <p className="lead">
            Take the first step towards building your business while being present
            for your family.
          </p>
          <Link href="/community/join" className="btn btn-primary btn-lg">
            Join MomEntrepreneur Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MomEntrepreneurPage; 