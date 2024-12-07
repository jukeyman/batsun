import { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/assets/css/icofont.min.css";
import "@/assets/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
// import "@/assets/css/responsive.css";
import SocialProof from '@/components/shared/widgets/SocialProof';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fontInter",
});

export const metadata = {
  metadataBase: new URL('https://rjbusinesssolutions.com'),
  title: {
    default: 'RJ Business Solutions | AI & Automation Experts',
    template: '%s | RJ Business Solutions'
  },
  description: 'Transform your business with AI-powered solutions. Expert consulting in automation, chatbots, and digital transformation by Angel Lewis-Jefferson.',
  keywords: ['AI solutions', 'business automation', 'chatbots', 'digital transformation', 'RJ Business Solutions', 'Angel Lewis-Jefferson'],
  authors: [{ name: 'Angel Lewis-Jefferson' }],
  creator: 'Angel Lewis-Jefferson',
  publisher: 'RJ Business Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rjbusinesssolutions.com',
    siteName: 'RJ Business Solutions',
    title: 'RJ Business Solutions | AI & Automation Experts',
    description: 'Transform your business with AI-powered solutions. Expert consulting in automation, chatbots, and digital transformation.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RJ Business Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RJ Business Solutions | AI & Automation Experts',
    description: 'Transform your business with AI-powered solutions.',
    creator: '@AngelLewisJeff',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  }
};

const RootLayout = ({ children }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RJ Business Solutions",
    "url": "https://rjbusinesssolutions.com",
    "logo": "https://rjbusinesssolutions.com/images/logo.png",
    "description": "Leading provider of AI and automation solutions for businesses",
    "founder": {
      "@type": "Person",
      "name": "Angel Lewis-Jefferson",
      "jobTitle": "Co-Founder & CEO",
      "sameAs": [
        "https://linkedin.com/in/angel-lewis-jefferson",
        "https://twitter.com/AngelLewisJeff"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "email": "contact@rjbusinesssolutions.com"
    },
    "sameAs": [
      "https://facebook.com/RJBusinessSolutions",
      "https://twitter.com/RJBizSolutions",
      "https://linkedin.com/company/rj-business-solutions"
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script 
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <SocialProof type="banner" />
        
        {children}
        
        <SocialProof type="floating" />
      </body>
    </html>
  );
};

export default RootLayout;
