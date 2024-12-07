"use client";
import Head from 'next/head';
import Script from 'next/script';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateOpenGraphMeta,
  generateTwitterMeta,
  generateBreadcrumbSchema,
  generateWebsiteSchema
} from '@/libs/seo';
import { businessNAP, businessCategories, serviceArea } from '@/libs/localSEO';

const SEOHead = ({ 
  title = "RJ Business Solutions - Minority & Woman-Owned AI & Business Consulting",
  description = "Black woman-owned business consulting firm specializing in AI solutions, digital transformation, and business formation. SAM registered, serving New Mexico & nationwide.",
  path = ""
}) => {
  const canonicalUrl = `https://rjbizsolution.com${path}`;
  const ogImage = `https://rjbizsolution.com/images/og-image.jpg`;

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": canonicalUrl,
    "name": businessNAP.name,
    "description": description,
    "url": businessNAP.website,
    "telephone": businessNAP.phone,
    "email": businessNAP.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${businessNAP.address.street}, ${businessNAP.address.suite}`,
      "addressLocality": businessNAP.address.city,
      "addressRegion": businessNAP.address.state,
      "postalCode": businessNAP.address.zip,
      "addressCountry": businessNAP.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": serviceArea.primaryCities[0].coordinates.latitude,
      "longitude": serviceArea.primaryCities[0].coordinates.longitude
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New Mexico"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": serviceArea.primaryCities[0].coordinates.latitude,
        "longitude": serviceArea.primaryCities[0].coordinates.longitude
      },
      "geoRadius": "50"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rj-business-solutions",
      "https://www.facebook.com/rjbizsolution",
      "https://twitter.com/rjbizsolution"
    ],
    "knowsAbout": businessCategories.keywords,
    "keywords": businessCategories.keywords.join(", "),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": businessCategories.secondary.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    }
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Robots Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="RJ Business Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional Meta Tags */}
        <meta name="keywords" content={businessCategories.keywords.join(", ")} />
        <meta name="author" content="RJ Business Solutions" />
        <meta name="geo.region" content="US-NM" />
        <meta name="geo.placename" content={businessNAP.address.city} />
        <meta name="geo.position" content={`${serviceArea.primaryCities[0].coordinates.latitude};${serviceArea.primaryCities[0].coordinates.longitude}`} />
        <meta name="ICBM" content={`${serviceArea.primaryCities[0].coordinates.latitude}, ${serviceArea.primaryCities[0].coordinates.longitude}`} />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />

        {/* Preconnect to Important Third-party Domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </Head>

      {/* Schema.org JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      {/* Google Business Profile Verification */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://rjbusiness.com",
            "logo": "https://rjbusiness.com/images/logo.png",
            "hasMap": "https://www.google.com/maps?cid=YOUR_GOOGLE_BUSINESS_CID"
          })
        }}
      />
    </>
  );
};

export default SEOHead; 