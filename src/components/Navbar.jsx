import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-blue-900 text-white shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">MySite</div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li className="cursor-pointer hover:text-yellow-300 transition">Home</li>
          <li className="cursor-pointer hover:text-yellow-300 transition">About</li>
          <li className="cursor-pointer hover:text-yellow-300 transition">Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl hover:text-yellow-300 transition">☰</button>
      </nav>
    );
  }
}

export default NavBar;
