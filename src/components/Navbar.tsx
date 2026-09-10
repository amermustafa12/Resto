"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname(); // 2. Get current URL path
  const isAuthPage = pathname === "/signin" || pathname === "/signup"; // 3. Check if we are on signin/signup

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isAuthPage // 4. Force solid/visible background if on auth pages
          ? "bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md shadow-sm py-0" 
          : "bg-transparent py-2"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-colors ${
              !isScrolled && !isAuthPage ? "text-white" : "text-gray-900 dark:text-white"
            }`}
          >
            Resto
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#about" 
              className={`hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}
            >
              About
            </Link>
            <Link 
              href="/#menu" 
              className={`hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}
            >
              Menu
            </Link>
            <Link 
              href="/#contact" 
              className={`hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}
            >
              Contact
            </Link>
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${
                !isScrolled && !isAuthPage
                  ? "text-white hover:bg-white/20" 
                  : "text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
            
            <Link 
              href="/signin" 
              className={`font-medium hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-white" : "text-gray-900 dark:text-white"}`}
            >
              Sign In
            </Link>

            <Link 
              href="/signup" 
              className="bg-brand-accent text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>
          {/* ... mobile menu code stays standard ... */}
        </div>
      </nav>
    </header>
  );
}