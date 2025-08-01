import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-amber-950 via-amber-800 to-amber-700 shadow-lg z-50 text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className={`hover:text-blue-500 ${location.pathname === "/" ? "text-blue-600" : "text-white"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${location.pathname === "/" ? "font-bold" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75M4.5 10.5V21h15V10.5" />
          </svg>
        </Link>
        <div className="flex space-x-6">
          <Link to="/journey" className={`hover:text-blue-500 ${location.pathname === "/journey" ? "font-bold text-blue-600" : ""}`}>Journey</Link>
          <Link to="/about" className={`hover:text-blue-500 ${location.pathname === "/about" ? "font-bold text-blue-600" : ""}`}>About</Link>
          <Link to="/problem" className={`hover:text-blue-500 ${location.pathname === "/problem" ? "font-bold text-blue-600" : ""}`}>Problem</Link>
          <Link to="/solution" className={`hover:text-blue-500 ${location.pathname === "/solution" ? "font-bold text-blue-600" : ""}`}>Solution</Link>
          <Link to="/reflection" className={`hover:text-blue-500 ${location.pathname === "/reflection" ? "font-bold text-blue-600" : ""}`}>Reflection</Link>
          <Link to="/dailies" className={`hover:text-blue-500 ${location.pathname === "/dailies" ? "font-bold text-blue-600" : ""}`}>Dailies</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
