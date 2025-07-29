import { NavLink } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../supabaseClient"; // <-- import supabase

export default function Nav({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="sticky top-0 bottom-0 z-50 p-4 shadow-lg backdrop-blur-md bg-white/20 bg-opacity-50 font-semibold text-black-900 border-b border-white/30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo1.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Events", "Vendors", "Contact"].map(page => (
            <li key={page}>
              <NavLink
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "text-brand-gold font-bold" : "hover:text-brand-gold"
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
          <li>
            {session ? (
              <NavLink
                onClick={handleSignOut}
                className="px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-200"
              >
                Sign Out
              </NavLink>
            ) : (
              <NavLink
                to="/signup"
                className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-200"
              >
                Sign-up
              </NavLink>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-black text-black mt-4">
          <ul className="flex flex-col space-y-4 px-4 py-2">
            {["Home", "About", "Events", "Vendors", "Contact"].map(page => (
              <li key={page}>
                <NavLink
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-brand-gold font-semibold" : "hover:text-brand-gold"
                  }
                >
                  {page}
                </NavLink>
              </li>
            ))}
            <li>
              {session ? (
                <NavLink
                  onClick={handleSignOut}
                  className="block w-full text-center px-6 py-2 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-200"
                >
                  Sign Out
                </NavLink>
              ) : (
                <NavLink
                  to="/signup"
                  className="block w-full text-center px-6 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-200"
                >
                  Sign-up
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
