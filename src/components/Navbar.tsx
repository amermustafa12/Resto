"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

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
        isScrolled || isAuthPage 
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

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className={`hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}>About</Link>
            <Link href="/#menu" className={`hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}>Menu</Link>
            <Link href="/#contact" className={`hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}>Contact</Link>
            
            <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full transition-colors ${!isScrolled && !isAuthPage ? "text-white hover:bg-white/20" : "text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"}`}>
              {isDark ? "☀️" : "🌙"}
            </button>
            
            <Link href="/signin" className={`font-medium hover:text-brand-accent transition-colors ${!isScrolled && !isAuthPage ? "text-white" : "text-gray-900 dark:text-white"}`}>Sign In</Link>
            <Link href="/signup" className="bg-brand-accent text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors">Sign Up</Link>
          </div>

          {/* Mobile Menu Button (Visible only on Mobile) */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className={`p-2 ${!isScrolled && !isAuthPage ? "text-white" : "text-gray-900 dark:text-white"}`}>
              {isDark ? "☀️" : "🌙"}
            </button>
            <button 
              className={`p-2 text-2xl focus:outline-none ${!isScrolled && !isAuthPage ? "text-white" : "text-gray-900 dark:text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-brand-dark p-6 shadow-xl border-t border-gray-100 dark:border-gray-800 flex flex-col space-y-4 transition-all">
            <Link href="/#about" onClick={() => setIsOpen(false)} className="text-lg text-gray-800 dark:text-gray-200 font-medium">About</Link>
            <Link href="/#menu" onClick={() => setIsOpen(false)} className="text-lg text-gray-800 dark:text-gray-200 font-medium">Menu</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-lg text-gray-800 dark:text-gray-200 font-medium">Contact</Link>
            
            <hr className="border-gray-200 dark:border-gray-700 my-2" />
            
            <Link href="/signin" onClick={() => setIsOpen(false)} className="text-lg text-gray-800 dark:text-gray-200 font-medium">Sign In</Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="bg-brand-accent text-white text-center py-3 rounded-lg font-medium text-lg mt-2">Sign Up</Link>
          </div>
        )}
      </nav>
    </header>
  );
}