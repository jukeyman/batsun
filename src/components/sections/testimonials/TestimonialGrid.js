"use client";

import React, { useState, useEffect } from 'react';
import getAllTestimonials from '@/libs/getAllTestimonials';
import Image from 'next/image';
import styles from './TestimonialGrid.module.css';

const TestimonialGrid = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    const allTestimonials = getAllTestimonials();
    setTestimonials(allTestimonials);
    setFilteredTestimonials(allTestimonials);
  }, []);

  const serviceCategories = [
    'all',
    'AI Implementation',
    'Process Automation',
    'Business Formation',
    'Payroll & HR',
    'Insurance Services',
    'Strategic Growth',
    'Grants & Funding'
  ];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredTestimonials(testimonials);
    } else {
      const filtered = testimonials.filter(testimonial => 
        testimonial.services.includes(category)
      );
      setFilteredTestimonials(filtered);
    }
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    let sorted = [...filteredTestimonials];
    switch (sortType) {
      case 'recent':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'impact':
        sorted.sort((a, b) => {
          const getImpactScore = (item) => {
            const results = item.results;
            let score = 0;
            if (results.efficiency) score += parseInt(results.efficiency);
            if (results.growth) score += parseInt(results.growth);
            if (results.savings) score += parseInt(results.savings);
            return score;
          };
          return getImpactScore(b) - getImpactScore(a);
        });
        break;
      case 'alphabetical':
        sorted.sort((a, b) => a.company.localeCompare(b.company));
        break;
    }
    setFilteredTestimonials(sorted);
  };

  return (
    <div className={styles.testimonialSection}>
      <div className={styles.filters}>
        <div className={styles.categories}>
          {serviceCategories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeFilter === category ? styles.active : ''}`}
              onClick={() => handleFilterChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.sort}>
          <select 
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="recent">Most Recent</option>
            <option value="impact">Highest Impact</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.header}>
              <div className={styles.profile}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className={styles.avatar}
                />
                <div className={styles.info}>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              {testimonial.verified && (
                <span className={styles.verified}>
                  <i className="bi bi-patch-check-fill"></i> Verified
                </span>
              )}
            </div>

            <div className={styles.content}>
              <p>{testimonial.testimonial}</p>
            </div>

            <div className={styles.results}>
              <h4>Results Achieved:</h4>
              <div className={styles.metrics}>
                {Object.entries(testimonial.results).map(([key, value]) => (
                  <div key={key} className={styles.metric}>
                    <span className={styles.value}>{value}</span>
                    <span className={styles.label}>{key}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.services}>
              {testimonial.services.map((service) => (
                <span key={service} className={styles.serviceTag}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid; 