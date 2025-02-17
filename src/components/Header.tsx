// src/components/Header.tsx
import React, { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-[#17153B] text-white p-4 sticky top-0 z-50 bg-opacity-75">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shivam Kumar</h1>
        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/s"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Navigation Links for Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-[#C8ACD6]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#C8ACD6]">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#C8ACD6]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#C8ACD6]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#17153B] text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <button className="mb-4" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/s"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <a href="#home" className="hover:text-[#C8ACD6]" onClick={toggleSidebar}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#C8ACD6]" onClick={toggleSidebar}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#C8ACD6]" onClick={toggleSidebar}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#C8ACD6]" onClick={toggleSidebar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;