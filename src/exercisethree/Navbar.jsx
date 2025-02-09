import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
const [dropdownOpen, setDropdownOpen] = useState(false);

return (
    <nav className="navbar">

    <ul className="navbar-links">
        {/* Dropdown Section */}
        <li className="dropdown">
        <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>Router ▼</button>
        {dropdownOpen && (
        <ul className="dropdown-menu">
        <li><NavLink to="/home" className="dropdown-link" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" className="dropdown-link" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" className="dropdown-link" activeClassName="active">Contact</NavLink></li>
        </ul>
        )}
        </li>
        <li><NavLink to="/" className="navbar-link" activeClassName="active">Color</NavLink></li>
        <li><NavLink to="/quote" className="navbar-link" activeClassName="active">Quote</NavLink></li>
        <li><NavLink to="/ps" className="navbar-link" activeClassName="active">Shop</NavLink></li>
        <li><NavLink to="/tic-tac-toe" className="navbar-link" activeClassName="active">Tic-Tac-Toe</NavLink></li>
        </ul>
    </nav>
);
}
