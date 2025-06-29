import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm px-4 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-primary">Furniro</Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-800">
            <li>
              <Link to="/" className="hover:text-primary transition">Home</Link>
            </li>
            <li className="hover:text-primary cursor-pointer transition">Shop</li>
            <li className="hover:text-primary cursor-pointer transition">About</li>
            <li className="hover:text-primary cursor-pointer transition">Contact</li>
          </ul>

          {/* Icons - Desktop Only */}
          <div className="hidden md:flex gap-5 text-2xl text-gray-700">
            <FiUser className="cursor-pointer hover:text-primary transition" />
            <FiSearch className="cursor-pointer hover:text-primary transition" />
            <FiHeart className="cursor-pointer hover:text-primary transition" />
            <FiShoppingCart className="cursor-pointer hover:text-primary transition" />
          </div>

          {/* Hamburger Icon - Mobile */}
          <div className="md:hidden text-3xl text-gray-700">
            <button onClick={() => setMenuOpen(true)}>
              <FiMenu className="hover:text-primary transition" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <FiX
            className="text-3xl text-gray-700 cursor-pointer hover:text-primary transition"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-6 px-6 text-gray-800 text-lg font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-primary">Home</Link>
          <li className="hover:text-primary cursor-pointer" onClick={() => setMenuOpen(false)}>Shop</li>
          <li className="hover:text-primary cursor-pointer" onClick={() => setMenuOpen(false)}>About</li>
          <li className="hover:text-primary cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
