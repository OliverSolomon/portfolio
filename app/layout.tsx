import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

// Use Inter as a fallback font, but your page is using Times New Roman which is a system font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Add Space Grotesk font using Next.js font system
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oliversolomon.dev"),
  title: {
    default: "Oliver Wainaina | Full Stack Software Engineer & IoT Developer",
    template: "%s | Oliver Wainaina"
  },
  description:
    "Portfolio of Oliver Wainaina - Full Stack Software Engineer specializing in web development, mobile apps, and IoT solutions. Expert in React, Next.js, AWS, and embedded systems. Based in Nairobi, Kenya.",
  keywords: [
    "software engineer",
    "full stack developer",
    "IoT developer",
    "React developer",
    "Next.js expert",
    "AWS developer",
    "Python developer",
    "JavaScript expert",
    "Kenya tech",
    "embedded systems",
    "mobile app developer",
    "cloud solutions architect",
    "agricultural technology",
    "smart irrigation systems",
    "community development",
    "speaking engagements",
    "tech conference speaker",
    "AI hackathon mentor",
    "design thinking",
    "maternal health technology",
    "SRHR innovation",
    "digital policy",
    "peace technology",
    "youth leadership",
    "African innovation",
    "Nairobi developer",
    "tech entrepreneurship"
  ],
  authors: [{ name: "Oliver Wainaina", url: "https://oliversolomon.dev" }],
  creator: "Oliver Wainaina",
  publisher: "Oliver Wainaina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://oliversolomon.dev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oliversolomon.dev",
    siteName: "Oliver Wainaina Portfolio",
    title: "Oliver Wainaina | Full Stack Software Engineer & IoT Developer",
    description:
      "Portfolio of Oliver Wainaina - Full Stack Software Engineer specializing in web development, mobile apps, and IoT solutions. Expert in React, Next.js, AWS, and embedded systems.",
    images: [
      {
        url: "/full-afro.jpg",
        width: 1200,
        height: 630,
        alt: "Oliver Wainaina - Software Engineer and Tech Speaker",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@oliversolomon10",
    creator: "@oliversolomon10",
    title: "Oliver Wainaina | Full Stack Software Engineer & IoT Developer",
    description:
      "Portfolio of Oliver Wainaina - Full Stack Software Engineer specializing in web development, mobile apps, and IoT solutions. Expert in React, Next.js, AWS, and embedded systems.",
    images: ["/full-afro.jpg"],
  },
  verification: {
    google: "G-B1MGTZVT3D",
    other: {
      "google-site-verification": "G-B1MGTZVT3D",
    },
  },
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Oliver Wainaina",
    "alternateName": "Oliver Solomon",
    "url": "https://oliversolomon.dev",
    "image": "https://oliversolomon.dev/full-afro.jpg",
    "description": "Full Stack Software Engineer & IoT Developer specializing in web development, mobile apps, and IoT solutions. Tech speaker, design thinking mentor, and youth leadership advocate.",
    "jobTitle": "Full Stack Software Engineer & IoT Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya"
    },
    "email": "oliverwai9na@gmail.com",
    "telephone": "+254742949664",
    "sameAs": [
      "https://www.linkedin.com/in/oliver-s-wainaina",
      "https://github.com/oliversolomon",
      "https://twitter.com/oliversolomon10"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Web Development",
      "Mobile App Development",
      "IoT Development and Embedded Systems",
      "React and Next.js",
      "JavaScript and TypeScript",
      "Python and Django",
      "AWS Cloud Architecture",
      "Design Thinking Methodology",
      "AI and Machine Learning",
      "Digital Policy and Governance",
      "Youth Leadership Development",
      "Tech Speaking and Mentoring",
      "Maternal Health Technology",
      "SRHR Innovation",
      "Peace Technology Solutions",
      "Agricultural Technology",
      "Smart Irrigation Systems",
      "Community Development",
      "Startup Mentoring",
      "Hackathon Facilitation"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Software Engineer & IoT Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Nairobi, Kenya"
      },
      "skills": [
        "Full Stack Development",
        "IoT Solutions Architecture",
        "Mobile App Development",
        "Cloud Architecture and AWS",
        "AI/ML Integration",
        "Design Thinking Facilitation",
        "Tech Speaking and Mentoring",
        "Youth Leadership Development",
        "Digital Policy Development",
        "Community Engagement",
        "Startup Mentoring",
        "Hackathon Organization"
      ]
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Nairobi"
    },
    "award": [
      {
        "@type": "Award",
        "name": "Gitex Africa 2024 Winner",
        "dateAwarded": "2024",
        "description": "Winner at Gitex Africa 2024 for innovative technology solutions"
      },
      {
        "@type": "Award",
        "name": "Nairobi Innovation Week Recognition",
        "dateAwarded": "2024",
        "description": "Recognition for outstanding contribution to Nairobi's innovation ecosystem"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Software Engineering",
        "credentialCategory": "degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "University of Nairobi"
        }
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "KICTANet",
        "description": "Kenya ICT Action Network - Multi-stakeholder platform for ICT policy"
      },
      {
        "@type": "Organization",
        "name": "Sauti Salama",
        "description": "Peace and security initiative using technology"
      }
    ],
    "performer": [
      {
        "@type": "Event",
        "name": "The Brand Africa Summit 2025",
        "startDate": "2025-09-19",
        "location": "St. Andrew's PCEA Auditorium, Nairobi, Kenya",
        "description": "Keynote on Youth Leadership and Innovation in Africa"
      },
      {
        "@type": "Event",
        "name": "US-Kenya AI Hackathon 2025",
        "startDate": "2025-03-26",
        "location": "JW Marriott Hotel, Westlands, Nairobi",
        "description": "Design Thinking and Problem Solving training for AI innovation"
      },
      {
        "@type": "Event",
        "name": "Amref Afyafest 2025",
        "startDate": "2025",
        "location": "Nairobi, Kenya",
        "description": "Presentation on Maternal Health and SRHR Innovation"
      },
      {
        "@type": "Event",
        "name": "KICTANet Policy Hackathon 2025",
        "startDate": "2025-05-16",
        "location": "Nairobi, Kenya",
        "description": "Safe and Inclusive Digital Spaces Policy Development"
      },
      {
        "@type": "Event",
        "name": "We Lead 2025 Summit",
        "startDate": "2025-07-23",
        "location": "Urban Hotel, Lusaka, Zambia",
        "description": "Transformational Leadership for Africa's Future"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Stack Web Development",
            "description": "Custom web applications using React, Next.js, and modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IoT Solutions Development",
            "description": "Internet of Things solutions for agriculture, healthcare, and smart cities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tech Speaking and Mentoring",
            "description": "Speaking engagements, workshops, and mentoring on technology and innovation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design Thinking Facilitation",
            "description": "Design thinking workshops and problem-solving methodology training"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://oliversolomon.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="google-site-verification" content="G-B1MGTZVT3D" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="slurp" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="duckduckbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="baiduspider" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="yandexbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        
        {/* AI/LLM specific meta tags */}
        <meta name="gptbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="chatgpt-user" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="ccbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="anthropic-ai" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="claude-web" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        <meta name="perplexitybot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Additional content accessibility */}
        <meta name="content-language" content="en" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
        
        {/* Rich content indicators */}
        <meta name="content-type" content="text/html; charset=UTF-8" />
        <meta name="content-encoding" content="gzip" />
        <meta name="content-script-type" content="text/javascript" />
        <meta name="content-style-type" content="text/css" />
        
        {/* Professional content indicators */}
        <meta name="profession" content="Software Engineer" />
        <meta name="expertise" content="Full Stack Development, IoT, AI/ML, Design Thinking, Tech Speaking" />
        <meta name="location" content="Nairobi, Kenya" />
        <meta name="industry" content="Technology" />
        <meta name="specialization" content="Web Development, Mobile Apps, IoT Solutions, AI Integration" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
