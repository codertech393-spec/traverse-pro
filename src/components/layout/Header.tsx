import { useState } from "react";
import { Link } from "react-router-dom";
import traverselogo from "../../assets/images/traverse-logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="bg-[#0A1628] py-4 px-6 md:px-16 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={traverselogo} alt="Traverse Logo" className="h-8" />
          <span className="text-white text-xl font-bold">Traverse Pro</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#D1D5DC] text-sm">
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#D1D5DC] text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#0A1628] flex flex-col items-center gap-4 py-6 md:hidden text-[#D1D5DC] text-sm">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                onClick={closeMenu}
                className="hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                onClick={closeMenu}
                className="hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;