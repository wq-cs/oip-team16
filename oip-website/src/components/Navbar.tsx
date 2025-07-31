import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-xl font-bold hover:text-blue-500">OIP</Link>
        <div className="flex space-x-6">
          <Link to="/journey" className="hover:text-blue-500">Journey</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/problem" className="hover:text-blue-500">Problem</Link>
          <Link to="/solution" className="hover:text-blue-500">Solution</Link>
          <Link to="/reflection" className="hover:text-blue-500">Reflection</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
