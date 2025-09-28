"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    // Generate QR code using a free QR code API
    const vcardUrl = "https://oliversolomon.dev/oliver-wainaina.vcf";
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(vcardUrl)}`;
    setQrCodeUrl(qrApiUrl);
  }, []);

  const downloadVCard = () => {
    const link = document.createElement("a");
    link.href = "/oliver-wainaina.vcf";
    link.download = "Oliver-Wainaina-Contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-black font-['Times New Roman']">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-4 md:px-10 sticky top-0 z-50 bg-[#f8f7f3]/80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold">
          Oliver Wainaina
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link href="/media" className="hover:text-amber-600 transition-colors">
            Media
          </Link>
          <Link href="/#about" className="hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="/#projects" className="hover:text-amber-600 transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-amber-600 transition-colors">
            Experience
          </Link>
          <Link href="/#awards" className="hover:text-amber-600 transition-colors">
            Awards
          </Link>
          <Link href="/#community" className="hover:text-amber-600 transition-colors">
            Community
          </Link>
          <Link href="/#featured" className="hover:text-amber-600 transition-colors">
            Featured
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-10 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Digital Contact Card
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Scan the QR code below to automatically add my contact information to your phone
          </p>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Scan to Add Contact</h2>
            
            {qrCodeUrl && (
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code for Oliver Wainaina's Contact" 
                    className="w-64 h-64"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Point your phone camera at the QR code above
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={downloadVCard}
                      className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                    >
                      Download vCard File
                    </button>
                    
                    <a
                      href="/oliver-wainaina.vcf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold inline-block"
                    >
                      Open vCard Link
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Name:</span> Oliver Wainaina
                </div>
                <div>
                  <span className="font-medium">Title:</span> Full Stack Software Engineer & IoT Developer
                </div>
                <div>
                  <span className="font-medium">Email:</span> 
                  <a href="mailto:oliverwai9na@gmail.com" className="text-amber-600 hover:underline ml-1">
                    oliverwai9na@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-medium">Phone:</span> 
                  <a href="tel:+254742949664" className="text-amber-600 hover:underline ml-1">
                    +254742949664
                  </a>
                </div>
                <div>
                  <span className="font-medium">Location:</span> Nairobi, Kenya
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Profiles</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Website:</span> 
                  <a href="https://oliversolomon.dev" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline ml-1">
                    oliversolomon.dev
                  </a>
                </div>
                <div>
                  <span className="font-medium">LinkedIn:</span> 
                  <a href="https://www.linkedin.com/in/oliver-s-wainaina" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline ml-1">
                    linkedin.com/in/oliver-s-wainaina
                  </a>
                </div>
                <div>
                  <span className="font-medium">GitHub:</span> 
                  <a href="https://github.com/oliversolomon" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline ml-1">
                    github.com/oliversolomon
                  </a>
                </div>
                <div>
                  <span className="font-medium">Twitter:</span> 
                  <a href="https://twitter.com/oliversolomon10" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline ml-1">
                    @oliversolomon10
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-700">
              Full Stack Software Engineer & IoT Developer specializing in web development, mobile apps, and IoT solutions. 
              Tech speaker, design thinking mentor, and youth leadership advocate. Available for freelance projects, 
              consulting, speaking engagements, and mentoring.
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">How to Use the QR Code</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>iPhone:</strong> Open Camera app, point at QR code, tap the notification that appears</p>
            <p><strong>Android:</strong> Open Camera app, point at QR code, tap the notification or use Google Lens</p>
            <p><strong>Alternative:</strong> Use any QR code scanner app from your app store</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-8 h-8 border border-black rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/" className="text-sm font-['Times New Roman']">
              Home
            </Link>
            <Link href="/media" className="text-sm font-['Times New Roman']">
              Media
            </Link>
            <Link href="/contact" className="text-sm font-['Times New Roman'] text-amber-600 font-semibold">
              Contact
            </Link>
            <Link href="/#about" className="text-sm font-['Times New Roman']">
              About
            </Link>
            <Link href="/#projects" className="text-sm font-['Times New Roman']">
              Projects
            </Link>
            <Link href="/#experience" className="text-sm font-['Times New Roman']">
              Experience
            </Link>
            <Link href="/#awards" className="text-sm font-['Times New Roman']">
              Awards
            </Link>
            <Link href="/#community" className="text-sm font-['Times New Roman']">
              Community
            </Link>
            <Link href="/#featured" className="text-sm font-['Times New Roman']">
              Featured
            </Link>
          </div>
          <p>
            <a
              href="https://www.linkedin.com/in/oliver-s-wainaina"
              className="underline"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/oliversolomon"
              className="underline ml-2"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
