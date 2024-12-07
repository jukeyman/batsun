export const seoData = {
  title: "RJ Business Solutions - Modern Business Management & AI Solutions",
  description: "Transform your business with RJ Business Solutions. Expert services in AI implementation, business formation, payroll & HR, insurance, and strategic growth solutions. Serving New Mexico and beyond.",
  keywords: "business solutions, AI implementation, business formation, payroll services, HR management, insurance services, New Mexico business, strategic growth, automation solutions, business consulting",
  author: "Rick Jefferson",
  siteUrl: "https://rjbizsolution.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rjbizsolution.com",
    title: "RJ Business Solutions - Modern Business Management & AI Solutions",
    description: "Transform your business with RJ Business Solutions. Expert services in AI implementation, business formation, payroll & HR, insurance, and strategic growth solutions.",
    image: "/images/og-image.jpg",
    site_name: "RJ Business Solutions"
  },
  twitter: {
    handle: "@rjbizsolution",
    site: "@rjbizsolution",
    cardType: "summary_large_image"
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RJ Business Solutions",
    "image": [
      "https://rjbizsolution.com/images/logo.png",
      "https://rjbizsolution.com/images/office.jpg"
    ],
    "description": "RJ Business Solutions provides comprehensive business services including AI implementation, business formation, payroll & HR, insurance, and strategic growth solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1342 NM 333 STE C5254",
      "addressLocality": "Tijeras",
      "addressRegion": "NM",
      "postalCode": "87059",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.0844,
      "longitude": -106.3783
    },
    "url": "https://rjbizsolution.com",
    "telephone": "+1-505-555-0123",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/rjbizsolution",
      "https://www.linkedin.com/company/rj-business-solutions",
      "https://twitter.com/rjbizsolution"
    ],
    "founders": [
      {
        "@type": "Person",
        "name": "Rick Jefferson",
        "jobTitle": "CTO",
        "image": "https://rjbizsolution.com/images/team/rick-jefferson.jpg"
      },
      {
        "@type": "Person",
        "name": "Angel Lewis-Jefferson",
        "jobTitle": "CEO",
        "image": "https://rjbizsolution.com/images/team/angel-lewis-jefferson.jpg"
      }
    ],
    "areaServed": {
      "@type": "State",
      "name": "New Mexico"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Implementation",
            "description": "Custom AI solutions for business automation and growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Formation",
            "description": "Complete business setup and registration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Payroll & HR",
            "description": "Comprehensive payroll and human resources management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Insurance Services",
            "description": "Business insurance and risk management solutions"
          }
        }
      ]
    }
  }
};

export const getMetadata = (path) => {
  const basePath = path || "";
  const fullUrl = `${seoData.siteUrl}${basePath}`;
  
  return {
    metadataBase: new URL(seoData.siteUrl),
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    authors: [{ name: seoData.author }],
    openGraph: {
      ...seoData.openGraph,
      url: fullUrl,
    },
    twitter: seoData.twitter,
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};

export const getJsonLd = () => {
  return seoData.schema;
}; 