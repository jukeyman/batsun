import { businessNAP, businessCategories, serviceArea, certifications } from './localSEO';

// Business Directory Platforms
const directories = [
  'Google Business Profile',
  'Bing Places',
  'Apple Maps',
  'Yelp',
  'Yellow Pages',
  'BBB',
  'Chamber of Commerce',
  'Manta',
  'Foursquare',
  'Local.com',
  'Superpages',
  'Angi',
  'Nextdoor',
  'CitySquares',
  'Hotfrog',
  'EZlocal',
  'MerchantCircle',
  'Brownbook',
  'Cylex',
  'n49'
];

// Minority Business Directories
const minorityDirectories = [
  'NMSDC',
  'WBENC',
  'MBDA',
  'BlackBusiness.com',
  'WBE.org',
  'DiversityBusiness.com',
  'NAWBO',
  'SBA Dynamic Small Business Search',
  'WeConnect International',
  'Minority Chamber of Commerce'
];

// Government Contractor Directories
const governmentDirectories = [
  'SAM.gov',
  'GSA Advantage',
  'USA Spending',
  'Federal Contractor Registry',
  'DSBS',
  'State of New Mexico Procurement Portal',
  'PTAC',
  'VIP',
  'FPDS',
  'Government Bids'
];

// Generate consistent business information for directories
export const generateDirectoryListing = (platform) => {
  const baseInfo = {
    businessName: businessNAP.name,
    address: `${businessNAP.address.street}, ${businessNAP.address.suite}`,
    city: businessNAP.address.city,
    state: businessNAP.address.state,
    zip: businessNAP.address.zip,
    phone: businessNAP.phone,
    email: businessNAP.email,
    website: businessNAP.website,
    description: `Minority and woman-owned business consulting firm specializing in AI implementation, digital transformation, and business automation. Serving ${businessNAP.address.city} and nationwide. SAM registered and certified.`,
    shortDescription: "AI & Business Consulting - Minority & Woman-Owned",
    categories: businessCategories.secondary,
    keywords: businessCategories.keywords,
    hours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    },
    paymentMethods: [
      "Credit Cards",
      "Debit Cards",
      "Bank Transfer",
      "PayPal",
      "Government Purchase Cards"
    ],
    certifications: certifications.specialties,
    serviceAreas: serviceArea.primaryCities.map(city => city.name),
    photos: [
      {
        title: "Office Exterior",
        filename: "office-exterior.jpg",
        description: "RJ Business Solutions office in Tijeras, NM"
      },
      {
        title: "Team Photo",
        filename: "team-photo.jpg",
        description: "Our expert consulting team"
      },
      {
        title: "Consulting Session",
        filename: "consulting-session.jpg",
        description: "AI implementation consultation"
      }
    ],
    socialMedia: {
      facebook: "https://facebook.com/rjbizsolution",
      linkedin: "https://linkedin.com/company/rj-business-solutions",
      twitter: "https://twitter.com/rjbizsolution"
    }
  };

  // Platform-specific formatting
  switch (platform) {
    case 'Google Business Profile':
      return {
        ...baseInfo,
        primaryCategory: businessCategories.primary,
        attributes: [
          "Minority-Owned",
          "Woman-Owned",
          "Black-Owned",
          "Offers Online Consulting",
          "By Appointment Only"
        ]
      };

    case 'Yelp':
      return {
        ...baseInfo,
        specialties: businessCategories.secondary.join(", "),
        history: "Established in 2020",
        amenities: ["By Appointment", "Virtual Consultations", "Online Meetings"]
      };

    case 'BBB':
      return {
        ...baseInfo,
        yearEstablished: "2020",
        employeeCount: "2-10",
        licensing: certifications,
        complaintPolicy: "We strive to address all client concerns within 24 hours."
      };

    case 'NMSDC':
      return {
        ...baseInfo,
        minorityType: "Black-Owned",
        certificationNumber: "Pending",
        capabilities: businessCategories.secondary,
        primaryNAICS: ["541611", "541512", "541519"]
      };

    case 'SAM.gov':
      return {
        ...baseInfo,
        samRegistration: "Active",
        cageCode: "Pending",
        naicsCodes: ["541611", "541512", "541519"],
        setAsideEligibility: [
          "8(a)",
          "Woman-Owned Small Business",
          "Minority-Owned Business"
        ]
      };

    default:
      return baseInfo;
  }
};

// Generate citations for all directories
export const generateAllCitations = () => {
  const allDirectories = [
    ...directories,
    ...minorityDirectories,
    ...governmentDirectories
  ];

  return allDirectories.map(directory => ({
    platform: directory,
    listing: generateDirectoryListing(directory),
    status: "Pending",
    priority: directory === 'Google Business Profile' ? 'High' : 'Medium',
    notes: `Submit listing to ${directory} for increased local visibility`
  }));
};

// Generate local SEO checklist
export const generateLocalSEOChecklist = () => {
  return {
    citations: {
      task: "Submit business information to local directories",
      platforms: directories,
      status: "In Progress"
    },
    minorityListings: {
      task: "Submit to minority business directories",
      platforms: minorityDirectories,
      status: "Pending"
    },
    governmentListings: {
      task: "Complete government contractor listings",
      platforms: governmentDirectories,
      status: "Pending"
    },
    verifications: {
      task: "Verify business on major platforms",
      platforms: ["Google Business Profile", "Bing Places", "Apple Maps"],
      status: "In Progress"
    },
    reviews: {
      task: "Implement review generation strategy",
      platforms: ["Google", "Yelp", "BBB"],
      status: "Pending"
    },
    monitoring: {
      task: "Set up citation monitoring",
      tools: ["Moz Local", "BrightLocal", "Yext"],
      status: "Pending"
    }
  };
}; 