"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import Next.js router

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);



  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
  
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling Down - Hide Header
        setIsVisible(false);
      } else {
        // Scrolling Up - Show Header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default navigation
    if (isDropdownOpen) {
      router.push("/allcourses"); // Navigate to /allcourses if dropdown is already open
    } else {
      setIsDropdownOpen(true); // Open the dropdown
    }
  };
  return (
    <header
      className={`w-[95%] fixed top-0 left-1/2 transform -translate-x-1/2 mx-auto text-center 
      bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-lg py-6 px-4 md:px-12 rounded-xl z-50 
      transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
    <div className="container mx-auto ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        
        <div className="flex items-center">
<Link href={"/"}>
<Image
            src="/Headerlogo.png"
            alt="Prep Academy Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
</Link>
          
        </div>
  
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-white text-xl  font-semibold">
            Home
          </Link>
          <Link href="/aboutus" className="text-white hover:text-white text-xl font-semibold">
            About Us
          </Link>
  
          {/* All Courses Dropdown */}
         {/* <div 
              className="relative group" 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => router.push("/allcourses")} // Redirects when clicked
                className="text-white hover:text-white text-xl font-semibold flex items-center"
              >
                All Courses ▼
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-black shadow-lg rounded-lg w-48">
                  <Link href="/school-courses" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                    School Courses
                  </Link>
                  <Link href="/college-courses" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                    College Courses
                  </Link>
                  <Link href="/study-abroad" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                    Study Abroad
                  </Link>
                  <Link href="/career-counseling" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                    Career Counseling
                  </Link>
                </div>
              )}
            </div> */}
       <div 
              ref={dropdownRef}
              className="relative group"
            >
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-white text-xl font-semibold flex items-center cursor-pointer"
              >
                All Courses {isDropdownOpen ? '▲' : '▼'}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-black shadow-lg rounded-lg w-48 z-50">
                  <Link 
                    href="/schoolcourse" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    School Courses
                  </Link>
                  <Link 
                    href="/collegecourse" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    College Courses
                  </Link>
                  <Link 
                    href="/studyabroad" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Study Abroad
                  </Link>
                  <Link 
                    href="/careercounseling" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Career Counseling
                  </Link>
                </div>
              )}
            </div>
          <Link href="/blogs" className="text-white hover:text-white text-xl font-semibold">
            Blogs
          </Link>
          <a href="/contact" className="text-white hover:text-white text-xl font-semibold">
            Contact
          </a>
          <a 
  href="https://test.prepacademy.in/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-xl font-semibold"
>
  Take A Quick Test
</a>

        </nav>
  
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
  
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-gray-100 py-4 px-6 space-y-4">
          <Link href="/" className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold">
            Home
          </Link>
          <Link href="/aboutus" className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold">
            About Us
          </Link>
  
          {/* Mobile Dropdown for All Courses */}
        {/* Mobile Dropdown for All Courses */}
{/* Mobile Dropdown for All Courses */}
<div className="relative" ref={dropdownRef}>
  {/* Button to toggle the dropdown */}
  <button
    onClick={(e) => {
      e.preventDefault();
      if (isDropdownOpen) {
        router.push("/allcourses"); // Navigate to /allcourses if dropdown is already open
      } else {
        setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
      }
    }}
    className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold flex items-center"
  >
    All Courses {isDropdownOpen ? '▲' : '▼'}
  </button>

  {/* Dropdown Menu */}
  {isDropdownOpen && (
    <div className="absolute left-0 mt-2 bg-black shadow-lg rounded-lg w-48 z-50">
      <Link
        href="/schoolcourse"
        className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
      >
        School Courses
      </Link>
      <Link
        href="/collegecourse"
        className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
      >
        College Courses
      </Link>
      <Link
        href="/studyabroad"
        className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
      >
        Study Abroad
      </Link>
      <Link
        href="/careercounseling"
        className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
        onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
      >
        Career Counseling
      </Link>
    </div>
  )}
</div>
         <Link href="/blogs" className="text-gray-800 hover:text-white text-sm font-semibold">
            Blogs
          </Link>
  <a href="/contact" className="text-gray-800 hover:text-white text-sm font-semibold">
            Contact
          </a>
          <a 
  href="https://test.prepacademy.in/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-xl font-semibold"
>
  Take A Quick Test
</a>
        </nav>
      )}
    </div>
  </header>
  
  );
}
