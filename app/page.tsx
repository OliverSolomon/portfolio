"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
        "projects",
        "experience",
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

  const toggleContactModal = () => {
    setContactModalOpen(!contactModalOpen);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  // Email and phone details
  const emailAddress = "oliverwai9na@gmail.com";
  const phoneNumber = "+254742949664";

  // Function to handle navbar item click
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    closeMobileMenu();
  };

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
          <button
            onClick={toggleContactModal}
            className={`font-medium text-sm font-['Times New Roman'] ${
              contactModalOpen ? "text-amber-600 font-bold" : ""
            }`}
          >
            Contact
          </button>
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
          <button
            onClick={() => {
              toggleContactModal();
              closeMobileMenu();
            }}
            className={`font-medium text-2xl font-['Times New Roman'] hover:text-amber-400 transition-colors ${
              contactModalOpen ? "text-amber-400" : ""
            }`}
          >
            Contact
          </button>
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

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-2xl max-w-md w-full p-8 relative transform transition-all duration-300 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeContactModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
              aria-label="Close modal"
            >
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
            </button>

            <h3 className="text-3xl font-bold italic font-['Times New Roman'] mb-6 text-center">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <a
                href={`mailto:${emailAddress}`}
                target="_blank"
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-amber-50 transition-colors group w-full"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 group-hover:bg-amber-200 transition-colors">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="font-bold font-['Times New Roman']">
                    Email
                  </div>
                  <div className="text-gray-600 text-sm">{emailAddress}</div>
                </div>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-amber-50 transition-colors group w-full"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 group-hover:bg-amber-200 transition-colors">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-bold font-['Times New Roman']">
                    Phone
                  </div>
                  <div className="text-gray-600 text-sm">{phoneNumber}</div>
                </div>
              </a>

              <div className="pt-4 text-center text-sm text-gray-500">
                I&apos;ll get back to you as soon as possible!
              </div>
            </div>
          </div>
        </div>
      )}

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
            Highly motivated and skilled Software Developer with a passion for
            using technology to solve real-world problems.
          </p>

          <p className="mt-2 mb-10 max-w-md text-left md:text-right font-['Times New Roman']">
            Always open for a round of Golf!
          </p>

          {/* CTA Buttons */}
          <div className="my-8 md:my-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={toggleContactModal}
              className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full text-base md:text-lg font-['Times New Roman'] hover:bg-amber-600 transition-colors text-center"
            >
              Get in Touch
            </button>
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
                      Full Stack Developer | 2023 - Present
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
    </div>
  );
}
