const generateServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "RJ Business Solutions",
    "sameAs": "https://rjbusinesssolutions.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI & Automation Services",
    "itemListElement": service.features.map((feature, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature.title,
        "description": feature.description
      }
    }))
  },
  "termsOfService": "https://rjbusinesssolutions.com/terms",
  "category": service.category
});

const generateProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "brand": {
    "@type": "Brand",
    "name": "RJ Business Solutions"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviewCount
  }
});

const generateArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "image": article.image,
  "datePublished": article.date,
  "dateModified": article.lastModified || article.date,
  "author": {
    "@type": "Person",
    "name": article.author,
    "url": `https://rjbusinesssolutions.com/team/${article.authorSlug}`
  },
  "publisher": {
    "@type": "Organization",
    "name": "RJ Business Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://rjbusinesssolutions.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://rjbusinesssolutions.com/insights/${article.slug}`
  }
});

const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

const generateReviewSchema = (review) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": review.serviceName
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating,
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "reviewBody": review.text
});

const generateCaseStudySchema = (caseStudy) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "articleSection": "Case Study",
  "headline": caseStudy.title,
  "description": caseStudy.description,
  "author": {
    "@type": "Organization",
    "name": "RJ Business Solutions"
  },
  "about": {
    "@type": "Service",
    "name": caseStudy.service,
    "provider": {
      "@type": "Organization",
      "name": "RJ Business Solutions"
    }
  },
  "mentions": {
    "@type": "Organization",
    "name": caseStudy.clientName
  }
});

const generateEventSchema = (event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.title,
  "startDate": event.date,
  "location": {
    "@type": "Place",
    "name": event.location,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": event.city,
      "addressRegion": event.state,
      "addressCountry": "US"
    }
  },
  "performer": {
    "@type": "Person",
    "name": "Angel Lewis-Jefferson"
  },
  "organizer": {
    "@type": "Organization",
    "name": event.organizer
  },
  "description": event.description,
  "offers": {
    "@type": "Offer",
    "url": event.registrationUrl,
    "price": event.price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
});

export const generateBusinessServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Formation & Growth Services",
  "description": "Expert guidance in business formation, grant acquisition, and compliance management for startups and growing businesses.",
  "provider": {
    "@type": "Organization",
    "name": "RJ Business Solutions",
    "image": "/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "addressCountry": "US"
    }
  },
  "areaServed": "United States",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Business Formation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Structure Setup",
          "description": "Expert guidance in choosing and establishing the right business structure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Grant & Funding Assistance",
          "description": "Access to grants, funding opportunities, and financial resources"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compliance & Licensing",
          "description": "Ensuring business meets all regulatory requirements"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Planning",
          "description": "Comprehensive business planning services"
        }
      }
    ]
  }
});

export const generateGrantSchema = (grant) => ({
  "@context": "https://schema.org",
  "@type": "Grant",
  "name": grant.name,
  "description": grant.eligibility,
  "amount": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": grant.amount
  },
  "funder": {
    "@type": "Organization",
    "name": "RJ Business Solutions"
  }
});

export {
  generateServiceSchema,
  generateProductSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateReviewSchema,
  generateCaseStudySchema,
  generateEventSchema
}; 