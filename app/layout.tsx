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
  metadataBase: new URL("https://oliverwainaina.co.ke"),
  title: "Oliver Wainaina | Full Stack Software Engineer & IoT Developer",
  description:
    "Portfolio of Oliver Wainaina - Full Stack Software Engineer specializing in web development, mobile apps, and IoT solutions. Expert in React, Next.js, AWS, and embedded systems.",
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
  ],
  authors: [{ name: "Oliver Wainaina", url: "https://oliverwainaina.co.ke" }],
  creator: "Oliver Wainaina",
  publisher: "Oliver Wainaina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://oliverwainaina.co.ke",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Oliver Wainaina | Full Stack Software Engineer & IoT Developer",
    description:
      "Portfolio of Oliver Wainaina - Full Stack Software Engineer specializing in web development, mobile apps, and IoT solutions. Expert in React, Next.js, AWS, and embedded systems.",
    url: "https://oliverwainaina.co.ke",
    siteName: "Oliver Wainaina Portfolio",
    images: [
      {
        url: "/full-afro.jpg",
        width: 1200,
        height: 630,
        alt: "Oliver Wainaina - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Wainaina | Full Stack Software Engineer & IoT Developer",
    description:
      "Portfolio of Oliver Wainaina - Full Stack Software Engineer specializing in web development, mobile apps, and IoT solutions. Expert in React, Next.js, AWS, and embedded systems.",
    creator: "@oliversolomon10",
    images: ["/full-afro.jpg"],
  },
  verification: {
    google: "G-B1MGTZVT3D",
    other: {
      "google-site-verification": "G-B1MGTZVT3D",
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://oliverwainaina.co.ke" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
