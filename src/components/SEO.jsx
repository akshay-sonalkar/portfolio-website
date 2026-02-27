import React from 'react';
import { Helmet } from 'react-helmet';
import { consultantInfo } from '../mock';

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://akshaysonalkar.com/#business",
        "name": "Akshay Sonalkar Web Development",
        "image": "https://akshaysonalkar.com/akshay-photo.jpg",
        "description": "Professional website development services for small businesses including clinics, hotels, banks, restaurants, and retail stores worldwide.",
        "url": "https://akshaysonalkar.com",
        "telephone": "+919448428031",
        "email": "sonalkarakshay.solapur@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "India"
          },
          {
            "@type": "Place",
            "name": "Worldwide"
          }
        ],
        "priceRange": "₹₹",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          `https://${consultantInfo.linkedin}`
        ]
      },
      {
        "@type": "Person",
        "@id": "https://akshaysonalkar.com/#person",
        "name": "Akshay Sonalkar",
        "image": "https://akshaysonalkar.com/akshay-photo.jpg",
        "jobTitle": "Full Stack Developer & Web Consultant",
        "description": "Full Stack Developer with 10+ years of experience helping small businesses worldwide establish their online presence.",
        "url": "https://akshaysonalkar.com",
        "email": "sonalkarakshay.solapur@gmail.com",
        "telephone": "+919448428031",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "sameAs": [
          `https://${consultantInfo.linkedin}`
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Website Development for Small Businesses",
        "provider": {
          "@id": "https://akshaysonalkar.com/#business"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Clinic Website Development",
                "description": "Professional websites for medical clinics and healthcare providers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hotel Website Development",
                "description": "Booking-enabled websites for hotels and hospitality businesses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Restaurant Website Development",
                "description": "Online ordering and reservation systems for restaurants"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Website Development",
                "description": "Complete online store solutions for retail businesses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bank Website Development",
                "description": "Secure and professional websites for financial institutions"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://akshaysonalkar.com/#website",
        "url": "https://akshaysonalkar.com",
        "name": "Akshay Sonalkar - Website Development for Small Business",
        "description": "Professional website development services for small businesses worldwide",
        "publisher": {
          "@id": "https://akshaysonalkar.com/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://akshaysonalkar.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://akshaysonalkar.com/"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
