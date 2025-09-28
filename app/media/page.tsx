"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// Type definitions
interface MediaItem {
  type: 'image' | 'video' | 'link';
  url: string;
  alt?: string;
  title?: string;
}

interface SpeakingEngagement {
  id: number;
  title: string;
  event: string;
  date: string;
  location: string;
  image: string;
  description: string;
  takeaways: string[];
  media: MediaItem[];
}

// Speaking engagement data
const speakingEngagements: SpeakingEngagement[] = [
  {
    id: 1,
    title: "Youth Leadership and Innovation in Africa",
    event: "The Brand Africa Summit 2025",
    date: "September 19, 2025",
    location: "St. Andrew's PCEA Auditorium, Nairobi, Kenya",
    image: "/media/The Brand Africa Summit/Poster.jpg",
    description: "A keynote presentation on youth leadership, innovation, and cross-industry collaboration, focusing on how young African leaders can drive transformative change across the continent. The summit united established brands and emerging innovators for inspiration, dialogue, and action.",
    takeaways: [
      "Youth leadership is crucial for Africa's digital transformation",
      "Cross-industry collaboration accelerates innovation",
      "Local context understanding drives successful tech solutions",
      "Mentorship and peer-to-peer networking are essential for growth",
      "Building sustainable partnerships between established brands and emerging innovators"
    ],
    media: [
      { type: "image", url: "/media/The Brand Africa Summit/Close-Up.jpg", alt: "Speaking at Brand Africa Summit" },
      { type: "image", url: "/media/The Brand Africa Summit/In-Depth-Explanation.jpg", alt: "In-depth explanation" },
      { type: "image", url: "/media/The Brand Africa Summit/Confirming-Explaining.jpg", alt: "Explaining key concepts" },
      { type: "image", url: "/media/The Brand Africa Summit/Highlight.jpg", alt: "Key highlights presentation" },
      { type: "image", url: "/media/The Brand Africa Summit/final.jpg", alt: "Final presentation moment" },
      { type: "image", url: "/media/The Brand Africa Summit/poster.jpg", alt: "Explaining key concepts" },
    ]
  },
  {
    id: 2,
    title: "Design Thinking and Problem Solving for AI Innovation",
    event: "US-Kenya AI Hackathon 2025",
    date: "September 25 - October 6, 2025",
    location: "KNLS Complex & US Embassy, Nairobi",
    image: "/media/US-Kenya AI Hackathon/Poster.jpg",
    description: "Trained hackathon attendees on design thinking and problem-solving methodologies during the 48-hour AI hackathon. Guided startups in building AI models and preparing presentations for the pitch competition with prizes totaling Kshs. 200,000. The hackathon showcased leading startups and provided opportunities for venture capitalists to observe industry trends.",
    takeaways: [
      "Design thinking methodology is essential for AI solution development",
      "Problem definition is more important than solution implementation",
      "User-centered approach drives successful AI applications",
      "Rapid prototyping and iteration accelerate innovation",
      "Cross-cultural collaboration enhances problem-solving approaches"
    ],
    media: [
      { type: "image", url: "/media/US-Kenya AI Hackathon/Answering-Questions.jpg", alt: "Answering questions from participants" },
      { type: "image", url: "/media/US-Kenya AI Hackathon/panel.jpg", alt: "Panel discussion with other mentors" },
      { type: "image", url: "/media/US-Kenya AI Hackathon/teaching.jpg", alt: "Teaching participants" },
      { type: "link", url: "https://docs.google.com/presentation/d/16IMdvS7QREef8QM43b4QHfyqL8EfOd3O/edit?usp=sharing&ouid=115951609750395643471&rtpof=true&sd=true", title: "Design Thinking Presentation Slides" }
    ]
  },
  {
    id: 3,
    title: "Maternal Health and SRHR Innovation",
    event: "Amref Afyafest 2025",
    date: "August 19, 2025",
    location: "Nairobi, Kenya",
    image: "/media/Amref Afya-Fest/speaking.jpg",
    description: "Presented on the intersection of technology and maternal health, focusing on Sexual and Reproductive Health and Rights (SRHR) innovations for primary healthcare in Africa. The festival showcased youth-led innovation for primary healthcare across the continent.",
    takeaways: [
      "Technology can significantly improve maternal health outcomes",
      "SRHR innovations must be culturally sensitive and accessible",
      "Youth-led solutions are driving healthcare transformation",
      "Digital health tools can bridge healthcare gaps in rural areas",
      "Community engagement is crucial for successful health interventions"
    ],
    media: [
      { type: "image", url: "/media/Amref Afya-Fest/speaking.jpg", alt: "Speaking at Amref Afyafest" },
      { type: "link", url: "https://amref.ac.ke/afyafest-2025-showcasing-youth-led-innovation-for-primary-healthcare-in-africa/", title: "Amref Afyafest 2025 Official Page" }
    ]
  },
  {
    id: 4,
    title: "Safe and Inclusive Digital Spaces Policy Development",
    event: "KICTANet Policy Hackathon 2025",
    date: "May 16, 2025",
    location: "Nairobi, Kenya",
    image: "/media/Kictanet Hackathon/whole-team.jpg",
    description: "Participated in KICTANet's policy hackathon focused on developing innovative policy responses to promote democratic, safe, and inclusive digital environments. The hackathon addressed technology-facilitated gender-based violence, data protection, and content moderation challenges.",
    takeaways: [
      "Multi-stakeholder approaches are essential for effective ICT policy",
      "Digital rights must be protected while promoting innovation",
      "Youth voices are crucial in shaping ICT policy frameworks",
      "Policy solutions must address real-world digital challenges",
      "Collaborative governance models work best for ICT regulation"
    ],
    media: [
      { type: "image", url: "/media/Kictanet Hackathon/whole-team.jpg", alt: "Team photo at KICTANet hackathon" },
      { type: "image", url: "/media/Kictanet Hackathon/small-group-closeup.jpg", alt: "Small group discussion" },
      { type: "link", url: "https://www.kictanet.or.ke/policy-hackathon-on-safe-and-inclusive-digital-spaces-in-kenya51656-2/", title: "KICTANet Policy Hackathon Details" }
    ]
  },
  {
    id: 5,
    title: "Transformational Leadership for Africa's Future",
    event: "We Lead 2025 Summit",
    date: "July 23-24, 2025",
    location: "Urban Hotel, Lusaka, Zambia",
    image: "/media/We Lead 2025 Summit/onGrass.jpg",
    description: "Delivered a keynote on empowering transformational leaders for Africa's future, focusing on youth empowerment, ethical leadership, and digital transformation strategies for sustainable development. The summit united visionary leaders, innovators, policymakers, entrepreneurs, and changemakers.",
    takeaways: [
      "Transformational leadership requires vision, integrity, and adaptability",
      "Youth empowerment is key to Africa's sustainable development",
      "Ethical leadership principles must guide digital transformation",
      "Cross-border collaboration strengthens African leadership",
      "Innovation and social impact go hand in hand"
    ],
    media: [
      { type: "image", url: "/media/We Lead 2025 Summit/onGrass.jpg", alt: "Speaking at We Lead 2025 Summit" },
      { type: "image", url: "/media/We Lead 2025 Summit/withGolfClub.jpg", alt: "Networking at the summit" }
    ]
  }
];

// YouTube videos from home page
const youtubeVideos = [
  {
    id: 1,
    title: "IoT solutions to solve African Problems",
    description: "Gearbox Europlacer circuit fabrication and embedded systems development",
    videoId: "cTGCtd0oY1U",
    embedUrl: "https://www.youtube.com/embed/cTGCtd0oY1U?si=2wWupCKGfklAiIWm"
  },
  {
    id: 2,
    title: "Take On Tech: Using Technology To Address GBV",
    description: "Daystar University Tech Talk | KBC TV",
    videoId: "V6wfwCvb_bE",
    embedUrl: "https://www.youtube.com/embed/V6wfwCvb_bE?si=Mh4E3VKKk2cAvamj"
  }
];

export default function MediaPage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedEngagement, setSelectedEngagement] = useState<SpeakingEngagement | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openEngagementModal = (engagement: SpeakingEngagement) => {
    setSelectedEngagement(engagement);
    setActiveMediaIndex(0);
    setIsAutoPlaying(true);
  };

  const closeEngagementModal = () => {
    setSelectedEngagement(null);
    setActiveMediaIndex(0);
    setIsAutoPlaying(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedEngagement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEngagement]);

  // Auto-play carousel effect
  useEffect(() => {
    if (!selectedEngagement || !isAutoPlaying) return;

    const imageItems = selectedEngagement.media.filter(item => item.type === 'image' || item.type === 'video');
    if (imageItems.length <= 1) return;

    const interval = setInterval(() => {
      setActiveMediaIndex((prev) => {
        const nextIndex = (prev + 1) % imageItems.length;
        return nextIndex;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [selectedEngagement, isAutoPlaying]);

  const nextMedia = () => {
    if (selectedEngagement) {
      const imageItems = selectedEngagement.media.filter(item => item.type === 'image' || item.type === 'video');
      setActiveMediaIndex((prev) => {
        const currentImageIndex = imageItems.findIndex((_, index) => index === prev);
        const nextIndex = (currentImageIndex + 1) % imageItems.length;
        return imageItems.findIndex((_, index) => index === nextIndex);
      });
      setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    }
  };

  const prevMedia = () => {
    if (selectedEngagement) {
      const imageItems = selectedEngagement.media.filter(item => item.type === 'image' || item.type === 'video');
      setActiveMediaIndex((prev) => {
        const currentImageIndex = imageItems.findIndex((_, index) => index === prev);
        const prevIndex = currentImageIndex === 0 ? imageItems.length - 1 : currentImageIndex - 1;
        return imageItems.findIndex((_, index) => index === prevIndex);
      });
      setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    }
  };

  // Structured data for speaking engagements
  const speakingEngagementsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Speaking Engagements",
    "description": "Oliver Wainaina's speaking engagements and presentations on technology, innovation, and leadership",
    "itemListElement": speakingEngagements.map((engagement, index) => ({
      "@type": "Event",
      "position": index + 1,
      "name": engagement.title,
      "description": engagement.description,
      "startDate": engagement.date,
      "location": {
        "@type": "Place",
        "name": engagement.location
      },
      "organizer": {
        "@type": "Organization",
        "name": engagement.event
      },
      "performer": {
        "@type": "Person",
        "name": "Oliver Wainaina"
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Media & Speaking Engagements | Oliver Wainaina</title>
        <meta name="description" content="Explore Oliver Wainaina's speaking engagements, presentations, and video content showcasing technology solutions, design thinking, and innovation insights." />
        <meta name="keywords" content="tech speaker, design thinking, AI hackathon, maternal health technology, digital policy, youth leadership, speaking engagements, tech conference" />
        <link rel="canonical" href="https://oliversolomon.dev/media" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakingEngagementsStructuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-[#f8f7f3] text-black font-['Times New Roman']">
      {/* Navigation */}
      <nav
        className={`flex justify-between items-center py-6 px-4 md:px-10 sticky top-0 z-50 bg-[#f8f7f3]/80 backdrop-blur-sm transition-transform duration-300 ${
          visible ? "transform-none" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-['Times New Roman'] hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link href="/media" className="text-sm font-['Times New Roman'] text-amber-600 font-semibold">
            Media
          </Link>
          <Link href="/#about" className="text-sm font-['Times New Roman'] hover:text-amber-600 transition-colors">
            About
          </Link>
          <Link href="/#projects" className="text-sm font-['Times New Roman'] hover:text-amber-600 transition-colors">
            Projects
          </Link>
          <Link href="/#contact" className="text-sm font-['Times New Roman'] hover:text-amber-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8f7f3] border-t">
          <div className="flex flex-col gap-4 p-6">
            <Link href="/" className="text-sm font-['Times New Roman']" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/media" className="text-sm font-['Times New Roman'] text-amber-600 font-semibold" onClick={closeMobileMenu}>
              Media
            </Link>
            <Link href="/#about" className="text-sm font-['Times New Roman']" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/#projects" className="text-sm font-['Times New Roman']" onClick={closeMobileMenu}>
              Projects
            </Link>
            <Link href="/#contact" className="text-sm font-['Times New Roman']" onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="px-4 md:px-10 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold italic font-['Times New Roman'] mb-6 text-black">
            Talks & Media Coverage
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-lg font-['Times New Roman'] text-black/70 max-w-2xl mx-auto">
            Explore my speaking engagements, presentations, and video content showcasing technology solutions and insights.
          </p>
        </div>

        {/* Speaking Engagements Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold italic font-['Times New Roman'] mb-12 text-center text-black">
            Speaking Engagements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakingEngagements.map((engagement, index) => (
              <div
                key={engagement.id}
                className="group relative cursor-pointer"
                onClick={() => openEngagementModal(engagement)}
              >
                <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300 text-black">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                  <div>
                    <h3 className="text-2xl font-bold italic font-['Times New Roman'] mb-3 text-black">
                      {engagement.title}
                    </h3>
                    <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                    
                    <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                      <Image
                        src={engagement.image}
                        alt={engagement.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center top' }}
                      />
                    </div>
                    
                    <div className="space-y-2 text-sm text-black/70">
                      <p><strong>Event:</strong> {engagement.event}</p>
                      <p><strong>Date:</strong> {engagement.date}</p>
                      <p><strong>Location:</strong> {engagement.location}</p>
                    </div>
                    
                    <p className="font-['Times New Roman'] text-black/80 mt-4 text-sm">
                      {engagement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggest Speaking Engagement Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Suggest a Speaking Engagement
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
                Interested in having me speak at your event, conference, or workshop? 
                I&apos;d love to hear about your opportunity and discuss how I can contribute.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="break-words">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">Email:</span>
                      <a 
                        href="mailto:oliverwai9na@gmail.com?subject=Speaking Engagement Inquiry" 
                        className="text-amber-600 hover:text-amber-700 ml-2 underline text-sm sm:text-base break-all"
                      >
                        oliverwai9na@gmail.com
                      </a>
                    </div>
                    <div className="break-words">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">Phone:</span>
                      <a 
                        href="tel:+254742949664" 
                        className="text-amber-600 hover:text-amber-700 ml-2 underline text-sm sm:text-base"
                      >
                        +254742949664
                      </a>
                    </div>
                    <div className="break-words">
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">LinkedIn:</span>
                      <a 
                        href="https://www.linkedin.com/in/oliver-s-wainaina" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 ml-2 underline text-sm sm:text-base break-all"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Speaking Topics */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Speaking Topics</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Full Stack Development & Modern Web Technologies</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">IoT Solutions for Agriculture & Healthcare</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Design Thinking & Problem-Solving Methodologies</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">AI/ML Integration & Innovation</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Youth Leadership & Digital Policy</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Tech Entrepreneurship & Startup Mentoring</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Ready to Collaborate?</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 px-4">
                    Whether it&apos;s a keynote, workshop, panel discussion, or mentoring session, 
                    I&apos;m excited to share insights and inspire your audience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
                    <a
                      href="mailto:oliverwai9na@gmail.com?subject=Speaking Engagement Inquiry&body=Hi Oliver,%0D%0A%0D%0AI'm interested in having you speak at our event. Here are the details:%0D%0A%0D%0AEvent Name:%0D%0ADate:%0D%0ALocation:%0D%0AAudience Size:%0D%0ATopic/Theme:%0D%0A%0D%0APlease let me know if you're available and interested.%0D%0A%0D%0AThank you!"
                      className="bg-amber-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto"
                    >
                      Send Speaking Inquiry
                    </a>
                    <a
                      href="/contact"
                      className="bg-gray-800 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto"
                    >
                      View Contact Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section>
          <h2 className="text-4xl md:text-5xl font-bold italic font-['Times New Roman'] mb-12 text-center text-black">
            Featured Videos
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {youtubeVideos.map((video, index) => (
              <div key={video.id} className="group relative">
                <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300 text-black">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                  <div>
                    <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-black">
                      {video.title}
                    </h3>
                    <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <iframe
                        className="w-full h-full"
                        src={video.embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <p className="font-['Times New Roman'] text-black/80 mt-6">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Speaking Engagement Modal */}
      {selectedEngagement && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-hidden">
          <div className="bg-white rounded-lg w-[95%] sm:w-[90%] h-[95vh] sm:h-[90vh] flex flex-col sm:flex-row overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeEngagementModal}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Side - Media */}
            <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col">
              <h3 className="text-lg sm:text-2xl font-bold italic font-['Times New Roman'] mb-4 text-black">
                {selectedEngagement.title}
              </h3>
              
              <div className="flex-1 relative">
                <div className="w-full h-full min-h-[250px] sm:min-h-[400px] flex items-center justify-center rounded-lg bg-gray-100 overflow-hidden relative group">
                  {/* Navigation toggles */}
                  {selectedEngagement.media.filter(item => item.type === 'image' || item.type === 'video').length > 1 && (
                    <>
                      {/* Previous toggle - mid left */}
                      <button
                        onClick={prevMedia}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* Next toggle - mid right */}
                      <button
                        onClick={nextMedia}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Carousel indicators - inside carousel */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {selectedEngagement.media
                          .filter(item => item.type === 'image' || item.type === 'video')
                          .map((_, index) => {
                            const imageItems = selectedEngagement.media.filter(item => item.type === 'image' || item.type === 'video');
                            const currentImageIndex = imageItems.findIndex((_, idx) => idx === activeMediaIndex);
                            const isActive = index === currentImageIndex;
                            
                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  const imageItems = selectedEngagement.media.filter(item => item.type === 'image' || item.type === 'video');
                                  const targetIndex = imageItems.findIndex((_, idx) => idx === index);
                                  setActiveMediaIndex(targetIndex);
                                  setIsAutoPlaying(false); // Stop auto-play when user manually navigates
                                }}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                                  isActive ? 'bg-amber-400 scale-125' : 'bg-white/80 hover:bg-white'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                              />
                            );
                          })}
                      </div>
                    </>
                  )}

                  {selectedEngagement.media[activeMediaIndex].type === 'video' ? (
                    selectedEngagement.media[activeMediaIndex].url.includes('youtube.com') || selectedEngagement.media[activeMediaIndex].url.includes('youtu.be') ? (
                      <iframe
                        className="w-full h-full min-h-[250px] sm:min-h-[400px]"
                        src={selectedEngagement.media[activeMediaIndex].url}
                        title={selectedEngagement.media[activeMediaIndex].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        className="w-full h-full min-h-[250px] sm:min-h-[400px] object-contain"
                        controls
                        title={selectedEngagement.media[activeMediaIndex].title}
                      >
                        <source src={selectedEngagement.media[activeMediaIndex].url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )
                  ) : selectedEngagement.media[activeMediaIndex].type === 'link' ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-black mb-2">
                        {selectedEngagement.media[activeMediaIndex].title}
                      </h4>
                      <a
                        href={selectedEngagement.media[activeMediaIndex].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        View Resource
                      </a>
                    </div>
                  ) : (
                    <Image
                      src={selectedEngagement.media[activeMediaIndex].url}
                      alt={selectedEngagement.media[activeMediaIndex].alt || selectedEngagement.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Auto-play indicator and pause/play button - Desktop only */}
                {selectedEngagement.media.filter(item => item.type === 'image' || item.type === 'video').length > 1 && (
                  <div className="hidden sm:flex justify-center mt-4">
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="bg-black/10 hover:bg-black/20 px-4 py-2 rounded transition-colors text-sm"
                    >
                      {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotate
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full sm:w-1/2 p-4 sm:p-6 bg-gray-50 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-black mb-2">Event Details</h4>
                  <div className="space-y-1 text-xs sm:text-sm text-black/70">
                    <p><strong>Event:</strong> {selectedEngagement.event}</p>
                    <p><strong>Date:</strong> {selectedEngagement.date}</p>
                    <p><strong>Location:</strong> {selectedEngagement.location}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-black mb-2">Description</h4>
                  <p className="text-xs sm:text-sm text-black/80">{selectedEngagement.description}</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-black mb-2">Key Takeaways</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-black/80">
                    {selectedEngagement.takeaways.map((takeaway: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-8 h-8 border border-black rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/" className="text-sm font-['Times New Roman']">
              Home
            </Link>
            <Link href="/media" className="text-sm font-['Times New Roman'] text-amber-600 font-semibold">
              Media
            </Link>
            <Link href="/#about" className="text-sm font-['Times New Roman']">
              About
            </Link>
            <Link href="/#projects" className="text-sm font-['Times New Roman']">
              Projects
            </Link>
            <Link href="/#contact" className="text-sm font-['Times New Roman']">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm font-['Times New Roman']">
          <p>Email: oliverwai9na@gmail.com </p>
          <p>
            <a
              href="https://www.linkedin.com/in/oliver-s-wainaina"
              className="underline"
            >
              LinkedIn
            </a>
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
    </>
  );
}

