import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* SVG gradient definition - this only needs to be defined once */}
      <svg width="0" height="0" className="absolute">
        <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2dd4bf" /> {/* teal-400 */}
          <stop offset="100%" stopColor="#10b981" /> {/* emerald-500 */}
        </linearGradient>
      </svg>

      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <Link 
          to="/" 
          className={`hover:opacity-80 transition-opacity ${
            location.pathname === "/" 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500" 
              : "text-gray-600"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={location.pathname === "/" ? "url(#nav-gradient)" : "currentColor"}
            strokeWidth={location.pathname === "/" ? 2.5 : 2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75M4.5 10.5V21h15V10.5" />
          </svg>
        </Link>
        <div className="flex space-x-6">
          {[
            { path: "/journey", name: "Journey" },
            { path: "/about", name: "About" },
            { path: "/problem", name: "Problem" },
            { path: "/solution", name: "Solution" },
            { path: "/reflection", name: "Reflection" },
            { path: "/dailybriefs", name: "Dailies" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`
                font-medium
                hover:opacity-80 transition-opacity
                ${
                  location.pathname === item.path
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 font-semibold"
                    : "text-gray-600"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
