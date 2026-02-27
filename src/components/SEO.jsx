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
        "description": "Professional website development services for all types of small businesses worldwide including healthcare (clinics, hospitals), hospitality (hotels, restaurants), professional services (law, real estate, accounting), wellness (salons, spas, gyms), education (coaching centers), retail (e-commerce, stores), financial services, and home services.",
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
                "name": "Healthcare Website Development",
                "description": "Professional websites for clinics, hospitals, dental practices, diagnostic labs, and pharmacies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hotel & Hospitality Website Development",
                "description": "Booking-enabled websites for hotels, resorts, restaurants, cafes, and catering services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Services Website Development",
                "description": "Corporate websites for law firms, accounting firms, real estate agencies, consultants, and architects"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wellness & Fitness Website Development",
                "description": "Booking-enabled websites for salons, spas, gyms, yoga studios, and physiotherapy centers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Education Website Development",
                "description": "Educational websites for coaching centers, training institutes, preschools, and skill development centers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Website Development",
                "description": "Complete online store solutions for retail, boutiques, wholesalers, and all types of product sellers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Financial Services Website Development",
                "description": "Secure websites for banks, NBFCs, insurance agencies, and financial advisors"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Home Services Website Development",
                "description": "Websites for interior designers, construction companies, plumbers, electricians, and pest control"
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
