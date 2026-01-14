"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import QRCodeModal from "./components/QRCodeModal";
import {
  SiPython,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiFlutter,
  SiLinux,
  SiOpenai,
  SiTypescript,
} from "react-icons/si";

import {
  FaPhone,
  FaMicrochip,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaFileAlt,
  FaGolfBall,
  FaLanguage,
  FaGlobeAfrica,
  FaYenSign,
  FaHandPaper,
  FaJava,
  FaAws,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { MdDeviceHub } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

interface ProjectCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  websiteUrl: string;
  projectUrl: string;
  imageSrc: string;
}

const ProjectCard = ({
  number,
  title,
  subtitle,
  description,
  technologies,
  websiteUrl,
  imageSrc,
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={`${title} Project`}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6">
            <span className="text-amber-400 font-mono text-sm">{number}</span>
            <h3 className="text-3xl font-bold italic font-['Times New Roman'] text-white mb-1">
              {title}
            </h3>
            <p className="text-white/80 text-sm font-['Times New Roman']">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="font-['Times New Roman'] text-gray-700 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          {websiteUrl && (
            <Link
              href={websiteUrl}
              className="text-amber-600 hover:text-amber-800 transition-colors font-['Times New Roman']"
              target="_blank"
            >
              Visit Website →
            </Link>
          )}

          <Link
            href={websiteUrl}
            className="px-4 py-2 border border-black rounded-full text-sm font-['Times New Roman'] hover:bg-black hover:text-white transition-colors"
            target="_blank"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

// Back to server component
export default function Home() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedTalk, setSelectedTalk] = useState<{ title: string; description: string; images: string[] } | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);

      // Determine active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "talks",
        "projects",
        "awards",
        "community",
        "featured",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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




  // Function to handle navbar item click
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    closeMobileMenu();
  };

  // Talks data
  const talks = [
    {
      title: "Stars of Innovation U.S. Kenya AI Challenge",
      description: `I had the incredible honor of training startup founders for the Stars of Innovation U.S. Kenya AI Challenge, hosted by the US Embassy Kenya.

I guided participants through Design Thinking integrated with AI tools. Drawing from my experience as a solutions builder for Non-Profits I emphasized the importance of empathy mapping and co-creating with the users since they are the first source of evidence.

Some of the outstanding solutions included maternal health systems designed to support mothers and track pregnancies, Agricultural solutions to prevent food waste, and financial solutions to track creditworthiness. 

I am deeply proud of this mission by the department of state and look forward to continue the collaboration with American Spaces to pus the boundaries of technology in the greater sub-Saharan region.`,
      images: [
        "/media/US-Kenya AI Hackathon/stars-of-innovation.png",
        "/media/US-Kenya AI Hackathon/Answering-Questions.jpg",
        "/media/US-Kenya AI Hackathon/panel.jpg",
        "/media/US-Kenya AI Hackathon/teaching.jpg",
        "/media/US-Kenya AI Hackathon/Poster.jpg",
      ],
    },
    {
      title: "DevFest 2025",
      description: `One of my standout moments for 2025 was the opportunity to speak at Google DevFest hashtag#Nairobi alongside Winnie Mandela. We spent our session diving deep into Building Technology for Social Impact, moving beyond just writing code to understanding the human responsibility behind it.

The reality is that "Digital-First" thinking is often flawed. Outside of platforms like M-Pesa, very few homegrown apps truly penetrate the daily lives of Kenyans. This led us to a critical takeaway: we must build People-First solutions that are later automated and scaled by digital tools, rather than the other way around.

Key Insights from the Session:
The Principle of Co-creation: We emphasized that if the person the solution is meant for isn't in the room during the design process, the solution is effectively against them.
Empathy-Driven Design: At Sauti Salama, we use "Survivor Cafe" sessions to ensure our features are built on real feedback and safe spaces, not just assumptions.
Privacy by Design: Privacy shouldn't be a legal footnote. For vulnerable communities, it is a foundational safety requirement.
Practical Impact: We hosted a live session using Firebase Studio to redesign and test an anonymous reporting feature. It was rewarding to see developers, many of whom come from a for-profit background, engage with the complexities of data privacy and tech policies surrounding violence.

The questions from the audience were a highlight - ranging from concerns about re-traumatisation to how we effectively refer survivors to professionals. At its core, Sauti Salama functions like a simplified "Uber" model, connecting survivors to the essential legal, medical, shelters and psychosocial help they need.

It was inspiring to see the developer community so eager to tackle these challenges. Thank you to the organizers for a platform that celebrates tech with a purpose.`,
      images: [
        "/media/DevFest 2025/0J0A0549(1).jpg",
        "/media/DevFest 2025/0J0A0551(1).jpg",
        "/media/DevFest 2025/Devfest 1.jpg",
        "/media/DevFest 2025/devfest.jpeg",
        "/media/DevFest 2025/madii.jpeg",
        "/media/DevFest 2025/Mandela & I.jpeg",
      ],
    },
    {
      title: "The Brand Africa Summit",
      description: `A few months ago, I had the opportunity to join a panel at The Brand Africa Summit to discuss the intersection of AI and technology in business. The conversation was a necessary dive into how these tools are reshaping both our creative and ethical landscapes.

One of the most profound shifts we explored is how AI has democratized creation. In the same way the internet made information accessible to all, AI has dismantled many of the traditional gatekeepers of production and storytelling.

Key Points from the Discussion:
1. Lowering the Barrier to Entry: For brands and independent creators, the cost and technical skills previously required for high-level production have dropped significantly. This allows emerging African brands to compete on a globally polished level from day one, making storytelling more about the clarity of the vision than the size of the budget.
2. The Evolution of Branding: As AI tools make high-quality visuals and content more accessible, the true value of a brand shifts toward authenticity, cultural relevance, and a strong ethical backbone.
3. The Dark Side of Innovation: As Technical Lead at Sauti Salama, I highlighted the rise of Technology-Facilitated Gender-Based Violence (TFGBV), where AI-generated imagery is being misused for bullying and harassment. This reality demands urgent attention as these tools scale.
4. Freedom of Speech vs. Digital Harm: We unpacked the tension between protecting expression and preventing digital harm. Innovation should never be an excuse for compromising human dignity or safety.
5. Homegrown LLMs vs. Bias Correction: We discussed whether Africa should build its own models from scratch or focus on retraining existing global models so they accurately reflect African languages, contexts, and data. Both paths seek to correct bias embedded in current systems.
6. The Need for Guardrails: The panel agreed on the importance of robust AI policies that protect the most vulnerable while still enabling creativity and innovation. We also acknowledged the risk of over-regulating too early, in ways that could be used to suppress progress rather than steward it.

Connecting with such impactful organizations at the summit reinforced a simple truth: technology must be a tool for empowerment. As we lower barriers to entry, we also have a responsibility to raise our standards for digital safety and ethical use.`,
      images: [
        "/media/The Brand Africa Summit/Poster.jpg",
        "/media/The Brand Africa Summit/Close-Up.jpg",
        "/media/The Brand Africa Summit/In-Depth-Explanation.jpg",
        "/media/The Brand Africa Summit/Highlight.jpg",
        "/media/The Brand Africa Summit/final.jpg",
      ],
    },
    {
      title: "Safe and Inclusive Digital Spaces Policy Development",
      description:
        "A policy hackathon focused on building responses for safer digital environments — addressing technology-facilitated GBV, data protection, and content moderation challenges.",
      images: [
        "/media/Kictanet Hackathon/whole-team.jpg",
        "/media/Kictanet Hackathon/small-group-closeup.jpg",
      ],
    },
  ];

  const openTalkModal = useCallback((talk: typeof talks[0]) => {
    setSelectedTalk(talk);
    setActiveImageIndex(0);
  }, []);

  const closeTalkModal = useCallback(() => {
    setSelectedTalk(null);
    setActiveImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedTalk) {
      setActiveImageIndex((prev) => (prev + 1) % selectedTalk.images.length);
    }
  }, [selectedTalk]);

  const prevImage = useCallback(() => {
    if (selectedTalk) {
      setActiveImageIndex((prev) => (prev === 0 ? selectedTalk.images.length - 1 : prev - 1));
    }
  }, [selectedTalk]);

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedTalk) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeTalkModal();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedTalk, prevImage, nextImage, closeTalkModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedTalk) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTalk]);

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-black font-['Times New Roman'] snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Navigation - with transition for smooth hiding/showing */}
      <nav
        className={`flex justify-between items-center py-6 px-4 md:px-10 sticky top-0 z-50 bg-[#f8f7f3]/80 backdrop-blur-sm transition-transform duration-300 ${
          visible ? "transform-none" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on md and up */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/media"
            className="font-medium text-sm font-['Times New Roman'] hover:text-amber-600 transition-colors"
          >
            Media
          </Link>
          <Link
            href="#about"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "about" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("about")}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "skills" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "projects" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "experience" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </Link>
          <Link
            href="#talks"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "talks" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("talks")}
          >
            Talks
          </Link>
          <Link
            href="#awards"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "awards" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("awards")}
          >
            Awards
          </Link>
          <Link
            href="#community"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "community" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("community")}
          >
            Community
          </Link>
          <Link
            href="#featured"
            className={`font-medium text-sm font-['Times New Roman'] ${
              activeSection === "featured" ? "text-amber-600 font-bold" : ""
            }`}
            onClick={() => handleNavClick("featured")}
          >
            Featured
          </Link>
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="md:hidden">
          <button
            className="p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* User Info */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-['Times New Roman']">
            <span className="text-amber-500">+</span> Oliver Wainaina,
            {new Date().toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
            })}
          </span>
          <div className="w-6 h-6 bg-amber-500 rounded-sm"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 z-40 flex flex-col justify-center items-center transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-white">
          <Link
            href="/media"
            className="font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors"
            onClick={closeMobileMenu}
          >
            Media
          </Link>
          <button
            onClick={() => {
              setQrModalOpen(true);
              closeMobileMenu();
            }}
            className="font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors"
          >
            QR-Scan
          </button>
          <Link
            href="#about"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "about" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("about")}
          >
            About
          </Link>
          <Link
            href="#skills"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "skills" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "projects" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "experience" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </Link>
          <Link
            href="#talks"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "talks" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("talks")}
          >
            Talks
          </Link>
          <Link
            href="#awards"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "awards" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("awards")}
          >
            Awards
          </Link>
          <Link
            href="#community"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "community" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("community")}
          >
            Community
          </Link>
          <Link
            href="#featured"
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              activeSection === "featured" ? "text-amber-400" : ""
            }`}
            onClick={() => handleNavClick("featured")}
          >
            featured
          </Link>
        </div>

        <div className="mt-12 flex gap-6">
          <a
            href="https://www.linkedin.com/in/oliver-s-wainaina/"
            target="_blank"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={closeMobileMenu}
          >
            <FaLinkedin size={20} className="text-white" />
          </a>
          <a
            href="https://github.com/oliversolomon"
            target="_blank"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={closeMobileMenu}
          >
            <FaGithub size={20} className="text-white" />
          </a>
          <a
            href="https://x.com/oliversolomon10"
            target="_blank"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={closeMobileMenu}
          >
            <FaXTwitter size={20} className="text-white" />
          </a>
        </div>
      </div>


      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row align-center justify-around px-4 md:px-10 pt-10 md:pt-30 pb-20 snap-start"
        id="home"
      >
        <div className="w-full md:w-1/2 pr-0 md:pr-10 mb-10 md:mb-0">
          <h1 className="text-6xl md:text-[120px] font-bold leading-[0.9] tracking-tight font-['Times New Roman'] mt-10">
            software
            <br />
            engineer
          </h1>
          <p className="mt-8 max-w-md text-left md:text-right font-['Times New Roman']">
          A visionary multidisciplinary engineer building high-impact, human-centered solutions at the intersection of hardware, software, and community empowerment.
          </p>

          <p className="mt-2 mb-10 max-w-md text-left md:text-right font-['Times New Roman']">
            Always open for a round of Golf!
          </p>

          {/* CTA Buttons */}
          <div className="my-8 md:my-12 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:oliverwai9na@gmail.com"
              className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full text-base md:text-lg font-['Times New Roman'] hover:bg-amber-600 transition-colors text-center"
            >
              Get in Touch
            </a>
            <Link
              href="https://docs.google.com/document/d/1zUHarjm9ktrOpnMlwR2aWcku3f3nBdIBYqbdm-MwEpE/edit?usp=sharing"
              className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full text-base md:text-lg font-['Times New Roman'] hover:bg-amber-600 transition-colors text-center"
              target="_blank"
            >
              Download Resume
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16 mt-8 md:mt-16">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold font-['Times New Roman']">
                +1500
              </span>
              <p className="text-xs mt-2 max-w-[150px] font-['Times New Roman']">
                Children taught programming in underserved communities
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold font-['Times New Roman']">
                4
              </span>
              <p className="text-xs mt-2 max-w-[150px] font-['Times New Roman']">
                Languages: English, Swahili, Chinese, and Sign Language
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold font-['Times New Roman']">
                + 4
              </span>
              <p className="text-xs mt-2 max-w-[150px] font-['Times New Roman']">
                International and national awards
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image with Social Media Circles */}
        <div className="w-full md:w-1/3 relative h-[500px] md:h-auto">
          {/* Main Image Container */}
          <div className="absolute right-0 top-0 w-full h-[500px] md:h-[800px] bg-amber-400 rounded-3xl overflow-hidden">
            <Image
              src="/full-afro.jpg"
              alt="Oliver Wainaina"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Signature overlay */}
            <div className="absolute top-6 right-6">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                className="text-white"
              >
                <path
                  d="M10,40 C30,10 50,60 80,30 S100,50 110,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Social Media Circles - positioned to create curved edge effect */}
          <div className="absolute left-[-15px] md:left-[-30px] top-[150px] md:top-[200px] flex flex-col gap-4 z-10">
            {/* LinkedIn icon */}
            <a
              href="https://www.linkedin.com/in/oliver-s-wainaina/"
              target="_blank"
              className="w-10 h-10 md:w-14 md:h-14 bg-[#f8f7f3] rounded-full flex items-center justify-center hover:border-gray-300 transition-all duration-300 group"
            >
              <FaLinkedin
                size={16}
                className="text-black group-hover:scale-110 transition-all duration-300 md:text-[20px]"
              />
            </a>

            {/* Github icon */}
            <a
              href="https://github.com/oliversolomon"
              target="_blank"
              className="w-10 h-10 md:w-14 md:h-14 bg-[#f8f7f3] rounded-full flex items-center justify-center hover:border-gray-300 transition-all duration-300 group"
            >
              <FaGithub
                size={16}
                className="text-black group-hover:scale-110 transition-all duration-300 md:text-[20px]"
              />
            </a>

            {/* X (Twitter) icon */}
            <a
              href="https://x.com/oliversolomon10"
              target="_blank"
              className="w-10 h-10 md:w-14 md:h-14 bg-[#f8f7f3] rounded-full flex items-center justify-center hover:border-gray-300 transition-all duration-300 group"
            >
              <FaXTwitter
                size={16}
                className="text-black group-hover:scale-110 transition-all duration-300 md:text-[20px]"
              />
            </a>
          </div>

          {/* Stats Indicator */}
          <div className="absolute bottom-[30%] right-[-10px] md:right-[-20px]">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-6 md:h-6"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="bg-[#171622] text-white py-16 md:py-20 px-4 md:px-6 snap-end"
        id="about"
      >
        <h2 className="text-5xl md:text-8xl font-bold mb-10 md:mb-20 font-['Times New Roman'] overflow-hidden">
          About <span className="text-amber-400">.</span> About{" "}
          <span className="text-amber-400">.</span> About{" "}
          <span className="text-amber-400">.</span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col items-center justify-center">
            <div className="relative">
              <span className="absolute -left-8 md:-left-16 -top-6 md:-top-10 text-5xl md:text-8xl text-amber-400 font-['Space Grotesk'] font-bold">
                &quot;
              </span>
              <p className="text-xl md:text-2xl font-light leading-relaxed tracking-wide font-['Times New Roman']">
                Highly motivated and skilled Software Developer with a passion
                for using technology to solve real-world problems. Extensive
                experience in developing web, mobile, and IoT applications, with
                a strong focus on innovation for community development.
              </p>
              <p className="text-xl md:text-2xl font-light leading-relaxed tracking-wide mt-6 font-['Times New Roman']">
                Proven ability to design, develop, and deploy cloud-based
                solutions using AWS. Dedicated to making a positive impact
                through technology, particularly in the areas of education,
                agriculture, and social good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section
        className="px-4 md:px-6 bg-[#171622] text-white snap-start pt-16 md:pt-20 pb-40 md:pb-60"
        id="skills"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl sm:text-8xl md:text-[150px] font-bold mb-10 md:mb-16 font-['Times New Roman'] opacity-90 leading-none">
            toolkit<span className="text-amber-400">.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Programming Languages Card */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                01
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-white">
                    Programming Languages
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        {/* Python Icon */}
                        <SiPython size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Python
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          APIs, Data Automation
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
                        {/* Java Icon */}
                        <FaJava size={24} />
                      </div>
                      <span className="text-white font-['Times New Roman']">
                        Java
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        {/* C++ Icon */}
                        <SiCplusplus size={24} />
                      </div>
                      <span className="text-white font-['Times New Roman']">
                        C++
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black">
                        {/* JavaScript Icon */}
                        <SiTypescript size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          JavaScript
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          TypeScript
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white">
                        {/* USSD Icon - Using phone icon as closest alternative */}
                        <FaPhone size={20} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          USSD Programming
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Africa&apos;s Talking API, Safaricom Daraja API
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        {/* Hardware Icon */}
                        <FaMicrochip size={20} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Hardware
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Embedded Systems Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    href="#projects"
                    className="px-4 py-2 border border-white/30 rounded-full text-sm font-['Times New Roman'] text-white hover:bg-white hover:text-[#171622] transition-colors"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Web & Mobile Development Card */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                02
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-white">
                    Web & Mobile Development
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        {/* React Icon */}
                        <SiReact size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          React.js
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Next.js
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white">
                        {/* Tailwind Icon */}
                        <SiTailwindcss size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Tailwind
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          CSS, HTML
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                        {/* UI/UX Icon */}
                        <SiFigma size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          UI/UX Design
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Figma, Adobe XD
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white">
                        {/* Flutter Icon */}
                        <SiFlutter size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Flutter
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Mobile Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    href="#projects"
                    className="px-4 py-2 border border-white/30 rounded-full text-sm font-['Times New Roman'] text-white hover:bg-white hover:text-[#171622] transition-colors"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Infrastructure & Tools Card */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                03
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-white">
                    Infrastructure & Tools
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                        {/* AWS Icon */}
                        <FaAws size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          AWS
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Cloud Architecture
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                        {/* IoT Icon */}
                        <MdDeviceHub size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          IoT
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Embedded Systems
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white border border-white/20">
                        {/* Linux Icon */}
                        <SiLinux size={24} />
                      </div>
                      <span className="text-white font-['Times New Roman']">
                        Linux
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                        {/* AI Tools Icon */}
                        <SiOpenai size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          AI Tools
                        </span>
                        <div className="text-xs text-white/60 mt-1">
                          Cursor, ChatGPT, Claude, Gemini, Groq, Ollama
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    href="#projects"
                    className="px-4 py-2 border border-white/30 rounded-full text-sm font-['Times New Roman'] text-white hover:bg-white hover:text-[#171622] transition-colors"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Professional Skills Card */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                04
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-white">
                    Professional Skills
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        {/* Project Management Icon */}
                        <FaProjectDiagram size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Project Management
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        {/* Training Icon */}
                        <FaChalkboardTeacher size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Training & Mentorship
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                        {/* Documentation Icon */}
                        <FaFileAlt size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Documentation
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                        {/* Golfing Icon */}
                        <FaGolfBall size={24} />
                      </div>
                      <div>
                        <span className="text-white font-['Times New Roman']">
                          Golfing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    href="#experience"
                    className="px-4 py-2 border border-white/30 rounded-full text-sm font-['Times New Roman'] text-white hover:bg-white hover:text-[#171622] transition-colors"
                  >
                    View Experience
                  </Link>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="group relative md:col-span-2">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                05
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-white">
                    Languages
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                        {/* English Icon */}
                        <FaLanguage size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-['Times New Roman']">
                            English
                          </span>
                          <span className="text-xs text-white/60">Fluent</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full mt-1.5">
                          <div className="w-full h-full bg-amber-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                        {/* Swahili Icon */}
                        <FaGlobeAfrica size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-['Times New Roman']">
                            Swahili
                          </span>
                          <span className="text-xs text-white/60">Fluent</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full mt-1.5">
                          <div className="w-3/5 h-full bg-amber-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white">
                        {/* Chinese Icon */}
                        <FaYenSign size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-['Times New Roman']">
                            Chinese
                          </span>
                          <span className="text-xs text-white/60">Good</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full mt-1.5">
                          <div className="w-3/5 h-full bg-amber-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        {/* Sign Language Icon */}
                        <FaHandPaper size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-['Times New Roman']">
                            Sign Language
                          </span>
                          <span className="text-xs text-white/60">Good</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full mt-1.5">
                          <div className="w-3/5 h-full bg-amber-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Link
                    href="#about"
                    className="px-4 py-2 border border-white/30 rounded-full text-sm font-['Times New Roman'] text-white hover:bg-white hover:text-[#171622] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="my-16 md:my-20 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-20"></div>
              <Link
                href="https://docs.google.com/document/d/1zUHarjm9ktrOpnMlwR2aWcku3f3nBdIBYqbdm-MwEpE/edit?usp=sharing"
                className="relative px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-base md:text-lg font-['Times New Roman'] text-white hover:bg-white hover:text-[#171622] transition-colors"
                target="_blank"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        className="pt-16 md:pt-25 pb-40 md:pb-60 px-4 md:px-6 bg-[#f8f7f3] min-h-screen snap-start"
        id="experience"
      >
        <h2 className="text-5xl md:text-8xl font-bold mb-8 md:mb-10 font-['Times New Roman'] opacity-90 overflow-hidden">
          experience <span className="text-amber-400">.</span> experience{" "}
          <span className="text-amber-400">.</span> experience
          <span className="text-amber-400">.</span>
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Experience Item 01 */}
          <div className="border-t border-black pt-6 md:pt-8 pb-10 md:pb-16">
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <div className="w-12 text-2xl md:text-3xl font-bold">01</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 md:mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold font-['Times New Roman'] italic mb-2">
                      Iron Gate Technologies
                    </h3>
                    <p className="text-base md:text-lg font-['Times New Roman']">
                      Full Stack Developer | 2023 - December 2025
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 md:px-6 py-1 md:py-2 border border-black rounded-full text-sm font-['Times New Roman']">
                      USA
                    </span>
                  </div>
                </div>

                <p className="text-base md:text-lg font-['Times New Roman'] max-w-3xl">
                  Developed CAD software for building and simulating electrical
                  devices and components. Contributed to a collaborative team
                  environment, fostering knowledge sharing and efficient project
                  execution.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 02 */}
          <div className="border-t border-black pt-8 pb-16">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <div className="w-12 text-3xl font-bold">02</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                  <div>
                    <h3 className="text-4xl font-bold font-['Times New Roman'] italic mb-2">
                      Sauti Salama
                    </h3>
                    <p className="text-lg font-['Times New Roman']">
                      Co-Founder
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-6 py-2 border border-black rounded-full text-sm font-['Times New Roman']">
                      Kenya
                    </span>
                  </div>
                </div>

                <p className="text-lg font-['Times New Roman'] max-w-3xl">
                  Developed a platform for GBV survivors, offering anonymous
                  reporting and access to essential support services. Secured
                  funding rounds and showcased at COP28 and COP29.
                </p>
              </div>

              <div className="md:text-right whitespace-nowrap">
                <a
                  href="https://sautisalama.org"
                  className="inline-block px-6 py-2 border border-black rounded-full text-sm font-['Times New Roman'] hover:bg-black hover:text-white transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Experience Item 03 */}
          <div className="border-t border-black pt-8 pb-16">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <div className="w-12 text-3xl font-bold">03</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                  <div>
                    <h3 className="text-4xl font-bold font-['Times New Roman'] italic mb-2">
                      Robotics Educator
                    </h3>
                    <p className="text-lg font-['Times New Roman']">
                      2022 - 2025
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-6 py-2 border border-black rounded-full text-sm font-['Times New Roman']">
                      Nairobi
                    </span>
                  </div>
                </div>

                <p className="text-lg font-['Times New Roman'] max-w-3xl">
                  Designed and delivered comprehensive robotics education
                  programs reaching over 1,000 students across Nairobi.
                  Developed hands-on project-based learning experiences
                  introducing students to programming and engineering
                  principles.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Item 04 */}
          <div className="border-t border-black pt-8 pb-16">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <div className="w-12 text-3xl font-bold">04</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                  <div>
                    <h3 className="text-4xl font-bold font-['Times New Roman'] italic mb-2">
                      Microsoft Garage
                    </h3>
                    <p className="text-lg font-['Times New Roman']">
                      Project Lead | 2022 - September 2023
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-6 py-2 border border-black rounded-full text-sm font-['Times New Roman']">
                      Kenya
                    </span>
                  </div>
                </div>

                <p className="text-lg font-['Times New Roman'] max-w-3xl">
                  Led a team of campus students in building aquaponics systems
                  for deployment in underserved communities. Worked closely with
                  Microsoft Kenya to develop talent and empower the next
                  generation of engineers.
                </p>
              </div>

              <div className="md:text-right whitespace-nowrap">
                <a
                  href="https://www.linkedin.com/company/akili-factory"
                  className="inline-block px-6 py-2 border border-black rounded-full text-sm font-['Times New Roman'] hover:bg-black hover:text-white transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          {/* Experience Item 05 */}
          <div className="border-t border-black pt-8 pb-16">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              <div className="w-12 text-3xl font-bold">04</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                  <div>
                    <h3 className="text-4xl font-bold font-['Times New Roman'] italic mb-2">
                      Embed IoT
                    </h3>
                    <p className="text-lg font-['Times New Roman']">
                      Software Engineer | 2022 - 2025
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-6 py-2 border border-black rounded-full text-sm font-['Times New Roman']">
                      Kenya
                    </span>
                  </div>
                </div>

                <p className="text-lg font-['Times New Roman'] max-w-3xl">
                  Led a team in developing an IoT platform for agricultural
                  monitoring and management. Developed a mobile app for farmers
                  to monitor their crops and livestock.
                </p>
              </div>
              <div className="md:text-right whitespace-nowrap">
                <a
                  href="https://embed.co.ke"
                  className="inline-block px-6 py-2 border border-black rounded-full text-sm font-['Times New Roman'] hover:bg-black hover:text-white transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talks and Panel Discussions Section */}
      <section
        className="pt-16 md:pt-25 pb-40 md:pb-60 px-4 md:px-6 bg-gradient-to-br from-[#f9f4e8] to-[#f5efe0] min-h-screen snap-start"
        id="talks"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 md:mb-16 font-['Times New Roman'] opacity-90 overflow-hidden text-black">
            talks <span className="text-amber-500">.</span> talks{" "}
            <span className="text-amber-500">.</span> talks{" "}
            <span className="text-amber-500">.</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {talks.map((talk, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => openTalkModal(talk)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                  <div className="relative h-64 w-full">
                    <Image
                      src={talk.images[0]}
                      alt={`${talk.title} talk`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <span className="text-amber-400 font-mono text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold italic font-['Times New Roman'] text-white mb-1">
                          {talk.title}
                        </h3>
                        <p className="text-white/80 text-xs md:text-sm font-['Times New Roman']">
                          Talks & Panel Discussions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="font-['Times New Roman'] text-gray-700 mb-4 line-clamp-4">
                      {talk.description.split("\n")[0]}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-['Times New Roman']">
                        {talk.images.length} photos
                      </span>
                      <span className="px-4 py-2 border border-black rounded-full text-sm font-['Times New Roman'] hover:bg-black hover:text-white transition-colors">
                        View Talk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/media"
              className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full text-base md:text-lg font-['Times New Roman'] hover:bg-amber-600 transition-colors text-center"
            >
              See more talks →
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="pt-16 md:pt-25 pb-40 md:pb-60 px-4 md:px-6 bg-gradient-to-br from-[#f9f4e8] to-[#f5efe0] min-h-screen snap-start"
        id="projects"
      >
        <h2 className="text-5xl md:text-8xl font-bold mb-10 md:mb-20 font-['Times New Roman'] opacity-90 overflow-hidden">
          projects <span className="text-amber-400">.</span> projects{" "}
          <span className="text-amber-400">.</span> projects{" "}
          <span className="text-amber-400">.</span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <ProjectCard
            number="01"
            title="Sauti Salama"
            subtitle="Climate Change & Gender-based Violence"
            description="Spearheaded an innovative platform addressing the intersection of climate change and gender-based violence in vulnerable communities."
            technologies={["React Native", "AWS", "Firebase"]}
            websiteUrl="https://sautisalama.org"
            projectUrl="/projects/sauti-salama"
            imageSrc="/protest-sauti.webp"
          />

          <ProjectCard
            number="02"
            title="Laibu"
            subtitle="Remote Learning Platform"
            description="Developed a comprehensive remote learning platform during the COVID-19 pandemic to ensure educational continuity for students."
            technologies={["Next.js", "Firebase", "Tailwind"]}
            websiteUrl="https://laibu.netlify.app/"
            projectUrl="/projects/laibu"
            imageSrc="/5920.jpg"
          />

          <ProjectCard
            number="03"
            title="Agritech Solutions"
            subtitle="Smart Irrigation Systems"
            description="Designed and implemented smart irrigation systems that reduce water usage while improving crop yields through IoT technology."
            technologies={["IoT", "Python", "Raspberry Pi", "ESP32"]}
            websiteUrl="https://embed.co.ke"
            projectUrl="/projects/agritech"
            imageSrc="/plants.jpg"
          />

          <ProjectCard
            number="04"
            title="Embed IoT"
            subtitle="Agricultural IoT Solutions"
            description="Led the development of innovative IoT solutions for agriculture, helping farmers monitor crop conditions remotely and optimize yields."
            technologies={["IoT", "AWS", "Next Js", "flutter"]}
            websiteUrl="https://embed.co.ke"
            projectUrl="/projects/embed-iot"
            imageSrc="/embed1.jpeg"
          />
        </div>
      </section>

      {/* Awards Section */}
      <section
        className="pt-16 md:pt-25 pb-40 md:pb-60 px-4 md:px-6 bg-[#171622] text-white min-h-screen snap-start"
        id="awards"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 md:mb-16 font-['Times New Roman'] opacity-90 leading-none ml-0 md:ml-[-400px] overflow-hidden">
            awards<span className="text-amber-400"> . </span> awards
            <span className="text-amber-400"> . </span> awards
            <span className="text-amber-400"> . </span>
          </h2>

          <div className="space-y-8 md:space-y-12">
            {/* Award Item 01 */}
            <div className="flex flex-col md:flex-row items-start border-t border-white/20 pt-8 pb-8">
              <div className="w-12 text-2xl font-bold mb-4 md:mb-0">01</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/Gitex.png"
                      alt="UNICEF Logo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full p-2"
                      quality={100}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-2">
                      GITEX Africa Gender Responsive Innovation Challenge
                    </h3>
                    <p className="text-lg font-['Times New Roman'] text-white/70 mb-4">
                      First Position - Kenya | 2024
                    </p>
                    <p className="text-base font-['Times New Roman'] text-white/80 max-w-3xl">
                      Recognized for developing Sauti Salama, an innovative
                      platform that addresses gender-based violence in
                      climate-affected regions. The UNICEF-sponsored challenge
                      identifies solutions that empower women and girls through
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Award Item 02 */}
            <div className="flex flex-col md:flex-row items-start border-t border-white/20 pt-8 pb-8">
              <div className="w-12 text-2xl font-bold mb-4 md:mb-0">02</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/business.jpg"
                      alt="Daystar University Logo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full p-2"
                      quality={100}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-2">
                      Business Idea Marathon
                    </h3>
                    <p className="text-lg font-['Times New Roman'] text-white/70 mb-4">
                      Second Runner-up | 2024
                    </p>
                    <p className="text-base font-['Times New Roman'] text-white/80 max-w-3xl">
                      Awarded for the Sauti salama platform , which provides
                      support for survivors of Gender Based Violence in
                      climate-affected regions. The Business Idea Marathon at
                      Daystar University celebrates innovative entrepreneurial
                      concepts with social impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Award Item 03 */}
            <div className="flex flex-col md:flex-row items-start border-t border-white/20 pt-8 pb-8">
              <div className="w-12 text-2xl font-bold mb-4 md:mb-0">03</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/zet.png"
                      alt="Zetech University Logo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full p-2"
                      quality={100}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-2">
                      Zetech Innovation Week
                    </h3>
                    <p className="text-lg font-['Times New Roman'] text-white/70 mb-4">
                      First Position - Best Innovation Stand | 2023
                    </p>
                    <p className="text-base font-['Times New Roman'] text-white/80 max-w-3xl">
                      Honored for the Agritech Solutions exhibit showcasing
                      smart irrigation systems that reduce water usage while
                      improving crop yields. Zetech Innovation Week celebrates
                      technological solutions addressing local challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Award Item 04 */}
            <div className="flex flex-col md:flex-row items-start border-t border-white/20 pt-8 pb-8">
              <div className="w-12 text-2xl font-bold mb-4 md:mb-0">04</div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/nairobi-innovation-week.png"
                      alt="Nairobi International Trade Fair Logo"
                      width={48}
                      height={48}
                      className="object-contain w-full h-full p-2"
                      quality={100}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-2">
                      Nairobi Innovation Week
                    </h3>
                    <p className="text-lg font-['Times New Roman'] text-white/70 mb-4">
                      First Position - Best Innovation | 2022
                    </p>
                    <p className="text-base font-['Times New Roman'] text-white/80 max-w-3xl">
                      Recognized for the smart agriculture solutions, which
                      digitized farming. The project involved using IoT devices
                      in Bee farming as well as in irrigation systems. The
                      Nairobi Innovation Week is East Africa&apos;s largest
                      multi-sectoral technology exhibition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section
        className="pt-16 md:pt-25 pb-40 md:pb-60 px-4 md:px-6 bg-[#f8f7f3] min-h-screen snap-start"
        id="community"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 md:mb-16 font-['Times New Roman'] opacity-90 leading-none ml-0 md:ml-[-400px] overflow-hidden">
            community<span className="text-amber-400"> . </span>
            community<span className="text-amber-400"> . </span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {/* Community Item 01 */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                01
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-xl">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3">
                    Tech Education for Low-Income Communities
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                  <p className="font-['Times New Roman'] text-gray-700 mb-4">
                    Initiated and led a team to teach programming to over 1500
                    children (ages 4-19) in underserved communities.
                  </p>
                  <p className="font-['Times New Roman'] text-gray-700">
                    Developed a localized version of Scratch to enhance
                    accessibility for Kenyan students.
                  </p>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <span className="text-sm font-['Times New Roman'] text-gray-500">
                    2021-2024
                  </span>
                </div>
              </div>
            </div>

            {/* Community Item 02 */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                02
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-xl">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3">
                    IEEE University of Nairobi
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                  <p className="font-['Times New Roman'] text-gray-700 mb-4">
                    Led the Chiromo Campus chapter, organizing workshops and
                    hackathons that attracted over 300 engineering students.
                  </p>
                  <p className="font-['Times New Roman'] text-gray-700">
                    Facilitated connections between students and industry
                    professionals, resulting in 15 internship placements.
                  </p>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <span className="text-sm font-['Times New Roman'] text-gray-500">
                    2022-2023
                  </span>
                </div>
              </div>
            </div>

            {/* Community Item 03 */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                03
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-xl">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3">
                    One Quantum Kenya
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                  <p className="font-['Times New Roman'] text-gray-700 mb-4">
                    Served as Publicity Lead, increasing community engagement by
                    75% through strategic social media campaigns.
                  </p>
                  <p className="font-['Times New Roman'] text-gray-700">
                    Organized Kenya&apos;s first Quantum Computing awareness
                    workshop, attended by students from 5 universities.
                  </p>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <span className="text-sm font-['Times New Roman'] text-gray-500">
                    2023-Present
                  </span>
                </div>
              </div>
            </div>

            {/* Community Item 04 */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                04
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-xl">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3">
                    Akili Factory
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                  <p className="font-['Times New Roman'] text-gray-700 mb-4">
                    Collaborated with Microsoft Kenya as Projects Lead to
                    develop technology solutions for community challenges.
                  </p>
                  <p className="font-['Times New Roman'] text-gray-700">
                    Mentored 25 young developers, with 8 securing positions at
                    leading tech companies in East Africa.
                  </p>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <span className="text-sm font-['Times New Roman'] text-gray-500">
                    2022-2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* featured Section */}
      <section
        className="pt-16 md:pt-25 pb-40 md:pb-60 px-4 md:px-6 bg-[#171622] text-white min-h-screen snap-start"
        id="featured"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold mb-10 md:mb-16 font-['Times New Roman'] opacity-90 leading-none ml-0 md:ml-[-400px] overflow-hidden">
            featured<span className="text-amber-400"> . </span> featured
            <span className="text-amber-400"> . </span> featured
            <span className="text-amber-400"> . </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Video Item 01 */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                01
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-white">
                    IoT solutions to solve African Problems
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/cTGCtd0oY1U?si=2wWupCKGfklAiIWm"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p className="font-['Times New Roman'] text-white/80 mt-6">
                    Gearbox Europlacer circuit fabrication and embedded systems
                    development
                  </p>
                </div>
              </div>
            </div>

            {/* Video Item 02 */}
            <div className="group relative">
              <div className="absolute -left-6 -top-6 text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                02
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col justify-between transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_40px_rgba(255,176,59,0.15)]">
                <div>
                  <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-3 text-white">
                    Take On Tech: Using Technology To Address GBV
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>

                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/V6wfwCvb_bE?si=Mh4E3VKKk2cAvamj"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p className="font-['Times New Roman'] text-white/80 mt-6">
                    Daystar University Tech Talk | KBC TV
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t snap-start">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-8 h-8 border border-black rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/media" className="text-sm font-['Times New Roman']">
              Media
            </Link>
            <Link href="#about" className="text-sm font-['Times New Roman']">
              About
            </Link>
            <Link href="#skills" className="text-sm font-['Times New Roman']">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-['Times New Roman']">
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-sm font-['Times New Roman']"
            >
              Experience
            </Link>
            <Link href="#talks" className="text-sm font-['Times New Roman']">
              Talks
            </Link>
            <Link href="#awards" className="text-sm font-['Times New Roman']">
              Awards
            </Link>
            <Link
              href="#community"
              className="text-sm font-['Times New Roman']"
            >
              Community
            </Link>
            <Link href="#featured" className="text-sm font-['Times New Roman']">
              Featured
            </Link>
            <Link href="#" className="text-sm font-['Times New Roman']">
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

      {/* Talks Modal */}
      {selectedTalk && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4 overflow-hidden"
          onClick={closeTalkModal}
        >
          <div
            className="bg-white rounded-lg w-[95%] sm:w-[90%] max-w-6xl h-[95vh] sm:h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeTalkModal}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content Container */}
            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              {/* Left Side - Images */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col bg-gray-900">
                <h3 className="text-xl sm:text-2xl font-bold italic font-['Times New Roman'] mb-4 text-white">
                  {selectedTalk.title}
                </h3>

                <div
                  className="flex-1 relative group"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div className="w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center rounded-lg bg-gray-800 overflow-hidden relative">
                    {/* Navigation Buttons */}
                    {selectedTalk.images.length > 1 && (
                      <>
                        {/* Previous Button */}
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
                          aria-label="Previous image"
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        {/* Next Button */}
                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110"
                          aria-label="Next image"
                        >
                          <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                          {selectedTalk.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveImageIndex(index)}
                              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                                index === activeImageIndex
                                  ? "bg-amber-400 scale-125"
                                  : "bg-white/60 hover:bg-white/80"
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Current Image */}
                    <Image
                      src={selectedTalk.images[activeImageIndex]}
                      alt={`${selectedTalk.title} - Image ${activeImageIndex + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>

                  {/* Image Counter */}
                  {selectedTalk.images.length > 1 && (
                    <div className="mt-2 text-center text-white/60 text-sm">
                      {activeImageIndex + 1} / {selectedTalk.images.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Description */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 bg-gray-50 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-black mb-4">
                      About This Talk
                    </h4>
                    <div className="prose prose-sm max-w-none">
                      {selectedTalk.description.split("\n").map((paragraph, idx) => {
                        if (paragraph.trim() === "") return null;
                        // Check if it's a bullet point (starts with specific patterns)
                        if (
                          paragraph.trim().startsWith("Key Insights") ||
                          paragraph.trim().startsWith("The Principle") ||
                          paragraph.trim().startsWith("Empathy-Driven") ||
                          paragraph.trim().startsWith("Privacy by Design") ||
                          paragraph.trim().startsWith("Practical Impact") ||
                          paragraph.trim().startsWith("The questions") ||
                          paragraph.trim().startsWith("It was inspiring")
                        ) {
                          return (
                            <p
                              key={idx}
                              className="text-sm sm:text-base text-black/80 mb-3 font-['Times New Roman']"
                            >
                              {paragraph.trim()}
                            </p>
                          );
                        }
                        return (
                          <p
                            key={idx}
                            className="text-sm sm:text-base text-black/80 mb-3 font-['Times New Roman']"
                          >
                            {paragraph.trim()}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  {/* See the Impact Button */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a
                      href="https://www.linkedin.com/in/oliver-s-wainaina/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base"
                    >
                      <FaLinkedin size={20} />
                      See the impact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      <QRCodeModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} />
    </div>
  );
}
