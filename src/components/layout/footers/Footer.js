"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const certifications = [
    "8(a) Business Development Program Eligible",
    "Woman-Owned Small Business (WOSB)",
    "Minority Business Enterprise (MBE)",
    "DBE (Disadvantaged Business Enterprise)"
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className={styles.footerAbout}>
                <div className={styles.footerLogo}>
                  <Link href="/">
                    <Image
                      src="/images/logo/rj-logo-light.png"
                      alt="RJ Business Solutions"
                      width={150}
                      height={50}
                      className="img-fluid"
                      priority
                    />
                  </Link>
                </div>
                <p>
                  Transforming businesses through innovative AI solutions, 
                  comprehensive business services, and strategic growth consulting. 
                  Your success is our mission.
                </p>
                <div className={styles.socialLinks}>
                  <a href="https://facebook.com/rjbizsolution" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://twitter.com/rjbizsolution" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/company/rj-business-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://instagram.com/rjbizsolution" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 className={styles.footerTitle}>Quick Links</h5>
              <ul className={styles.footerLinks}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className={styles.footerTitle}>Services</h5>
              <ul className={styles.footerLinks}>
                <li><Link href="/services/ai-automation">AI & Automation</Link></li>
                <li><Link href="/services/business-formation">Business Formation</Link></li>
                <li><Link href="/services/payroll-hr">Payroll & HR</Link></li>
                <li><Link href="/services/insurance">Insurance Services</Link></li>
                <li><Link href="/services/strategic-growth">Strategic Growth</Link></li>
                <li><Link href="/services/grants-funding">Grants & Funding</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className={styles.footerTitle}>Contact Info</h5>
              <ul className={styles.footerContact}>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  1342 NM-333, Ste C #5254<br />
                  Tijeras, NM 87059
                </li>
                <li>
                  <i className="bi bi-telephone"></i>
                  <a href="tel:+1-844-906-0865">(844) 906-0865</a>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <a href="mailto:support@rjbizsolution.com">
                    support@rjbizsolution.com
                  </a>
                </li>
                <li>
                  <i className="bi bi-clock"></i>
                  Mon - Fri: 9:00 AM - 5:00 PM MST
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
              <p>© {currentYear} RJ Business Solutions. All rights reserved.</p>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.certifications}>
        <div className="container">
          <p>Certified & Recognized Business Excellence</p>
          <div className={styles.certificationsList}>
            {certifications.map((cert, index) => (
              <span key={index} className={styles.certificationBadge}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 