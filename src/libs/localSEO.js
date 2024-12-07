// Business Information
export const businessNAP = {
  name: "RJ Business Solutions",
  address: "1342 NM-333, Ste C #5254",
  city: "Tijeras",
  state: "NM",
  zip: "87059",
  phone: "(844) 906-0865",
  email: "support@rjbizsolution.com"
};

// Service Area Information
export const serviceArea = {
  primaryCities: [
    {
      name: "Tijeras",
      state: "NM",
      zip: "87059",
      coordinates: { lat: 35.0903, lng: -106.3783 }
    },
    {
      name: "Albuquerque",
      state: "NM",
      zip: "87102",
      coordinates: { lat: 35.0844, lng: -106.6504 }
    }
  ],
  radius: "50 miles",
  states: ["NM"]
};

// Business Categories
export const businessCategories = [
  "Business Consulting",
  "AI Implementation",
  "Process Automation",
  "Business Formation",
  "Payroll Services",
  "HR Management"
];

// Local Business Schema
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: businessNAP.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessNAP.address,
    addressLocality: businessNAP.city,
    addressRegion: businessNAP.state,
    postalCode: businessNAP.zip,
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: serviceArea.primaryCities[0].coordinates.lat,
    longitude: serviceArea.primaryCities[0].coordinates.lng
  },
  telephone: businessNAP.phone,
  email: businessNAP.email,
  url: "https://rjbizsolution.com",
  areaServed: serviceArea.primaryCities.map(city => ({
    "@type": "City",
    name: `${city.name}, ${city.state}`
  }))
}); 