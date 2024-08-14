"use client"
import React, { useState, useEffect } from "react";
import {
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Player Stats", href: "/playerStats" },
    { label: "Team Stats", href: "/teamStats" },
    { label: "Match Predictor", href: "/matchPredictor" },
    { label: "Mini Games", href: "/miniGames" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-opacity-80 bg-white' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Champions League Dashboard</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-800 hover:text-blue-300 hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/playerStats" className="text-gray-800 hover:text-blue-300 hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">Player stats</Link>
              <Link href="/teamStats" className="text-gray-800 hover:text-blue-300 hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">Team stats</Link>
              <Link href="/matchPredictor" className="text-gray-800 hover:text-blue-300 hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">Match Predictor</Link>
              <Link href="/miniGames" className="text-gray-800 hover:text-blue-300 hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium">Mini-games</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-300 hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
              <div className="flex justify-end mb-4">
                <h2 className="font-bold text-2xl">Champions League Dashboard</h2>
                <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-300 hover:cursor-pointer">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <Link href="/" onClick={toggleMenu} className="text-gray-800 hover:text-blue-300 hover:cursor-pointer block text-xl">Home</Link>
                <Link href="/playerStats" onClick={toggleMenu} className="text-gray-800 hover:text-blue-300 hover:cursor-pointer block text-xl">Player stats</Link>
                <Link href="/teamStats" onClick={toggleMenu} className="text-gray-800 hover:text-blue-300 hover:cursor-pointer block text-xl">Team stats</Link>
                <Link href="/matchPredictor" onClick={toggleMenu} className="text-gray-800 hover:text-blue-300 hover:cursor-pointer block text-xl">Match Predictor</Link>
                <Link href="/miniGames" onClick={toggleMenu} className="text-gray-800 hover:text-blue-300 hover:cursor-pointer block text-xl">Mini-games</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
    
  );
}
