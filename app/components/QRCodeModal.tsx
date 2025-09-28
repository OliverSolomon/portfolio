"use client";

import { useState, useEffect } from "react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Generate QR code using a free QR code API
      const vcardUrl = "https://oliversolomon.dev/oliver-wainaina.vcf";
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(vcardUrl)}`;
      setQrCodeUrl(qrApiUrl);
    }
  }, [isOpen]);

  const downloadVCard = () => {
    const link = document.createElement("a");
    link.href = "/oliver-wainaina.vcf";
    link.download = "Oliver-Wainaina-Contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Scan to Add Contact</h2>
          
          {qrCodeUrl && (
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code for Oliver Wainaina's Contact" 
                  className="w-48 h-48"
                />
              </div>
              
              <div className="space-y-3 w-full">
                <p className="text-sm text-gray-700">
                  Point your phone camera at the QR code above
                </p>
                
                <div className="flex flex-col gap-2">
                  <button
                    onClick={downloadVCard}
                    className="bg-amber-600 text-white px-4 py-2.5 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-sm w-full"
                  >
                    Download vCard File
                  </button>
                  
                  <a
                    href="/oliver-wainaina.vcf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2.5 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm w-full text-center"
                  >
                    Open vCard Link
                  </a>
                </div>
              </div>
            </div>
          )}
          
          <button
            onClick={onClose}
            className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
