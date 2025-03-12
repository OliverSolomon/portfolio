import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://oliver.sautisalama.org"),
  title: "Oliver Wainaina | Software Engineer",
  description:
    "Portfolio of Oliver Wainaina - Software Engineer specializing in web, mobile, and IoT applications with a focus on innovation for community development.",
  keywords: [
    "software engineer",
    "developer",
    "React",
    "Next.js",
    "IoT",
    "AWS",
    "Python",
    "JavaScript",
    "Kenya",
  ],
  authors: [{ name: "Oliver Wainaina" }],
  openGraph: {
    title: "Oliver Wainaina | Software Engineer",
    description:
      "Portfolio of Oliver Wainaina - Software Engineer specializing in web, mobile, and IoT applications.",
    url: "https://oliverwainaina.com",
    siteName: "Oliver Wainaina Portfolio",
    images: [
      {
        url: "/full-afro.jpg",
        width: 1200,
        height: 630,
        alt: "Oliver Wainaina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Wainaina | Software Engineer",
    description:
      "Portfolio of Oliver Wainaina - Software Engineer specializing in web, mobile, and IoT applications.",
    creator: "@oliversolomon10",
    images: ["/full-afro.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
