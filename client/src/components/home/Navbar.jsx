import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full text-sm font-normal relative z-50">
      {/* Logo */}
      <a href="/">
        <div className="h-10 w-10 bg-black rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-xl">L</span>
        </div>
      </a>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 text-gray-600">
        <a className="hover:text-black transition" href="#">
          Products
        </a>
        <a className="hover:text-black transition" href="#">
          Customer Stories
        </a>
        <a className="hover:text-black transition" href="#">
          Pricing
        </a>
        <a className="hover:text-black transition" href="#">
          Docs
        </a>
      </nav>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex space-x-4">
        <button
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-md font-medium 
                     hover:bg-gray-50 transition-all duration-300"
        >
          Login
        </button>
        <button
          className="bg-black text-white px-5 py-2 rounded-md font-medium 
                     hover:bg-gray-800 transition-all duration-300"
        >
          Sign up
        </button>
      </div>

      {/* Open Menu (Mobile) */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden text-gray-700 hover:text-black transition"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-lg text-slate-800 md:hidden"
        >
          {["Home", "Products", "Stories", "Pricing", "Docs"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black transition font-medium"
            >
              {link}
            </a>
          ))}

          {/* Auth Buttons (Mobile) */}
          <div className="flex flex-col gap-3 w-40">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="border border-gray-300 text-gray-700 px-5 py-2 rounded-md font-medium 
                         hover:bg-gray-50 transition-all duration-300 text-center"
            >
              Login
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white px-5 py-2 rounded-md font-medium 
                         hover:bg-gray-800 transition-all duration-300 text-center"
            >
              Sign up
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 