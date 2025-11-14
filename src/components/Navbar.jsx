import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

  render() {
    return (
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-blue-900 text-white shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">Piracy in anime</div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li className="cursor-pointer hover:text-yellow-300 transition" >
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition">
            <Link to="/origins">Origins</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition">
            <Link to="/relationship">The Relationship</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 transition">
            <Link to="/ethics">Ethics</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl hover:text-yellow-300 transition">☰</button>
      </nav>
    );
  }
}

export default NavBar;
