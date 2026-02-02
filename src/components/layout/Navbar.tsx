import { useState } from 'react'
import traverselogo from '../../assets/images/traverse-logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0A1628] py-4 px-6 md:px-16 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={traverselogo} alt="Traverse Logo" className="h-8" />
        <span className="text-white text-xl font-bold">Traverse Pro</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[#D1D5DC] text-sm">
        <li className="hover:text-white cursor-pointer">Features</li>
        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
        <li className="hover:text-white cursor-pointer">Terms of Service</li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#D1D5DC] focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">✖</span> // X icon
          ) : (
            <span className="text-2xl">☰</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#0A1628] flex flex-col items-center gap-4 py-4 md:hidden text-[#D1D5DC] text-sm">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Terms of Service</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar