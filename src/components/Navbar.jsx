"use client"

import { useState } from "react"
import { BrainCircuit } from "lucide-react"
import "./Navbar.css"

function Navbar({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Explore", value: "explore" },
    { label: "Platform", value: "platform" },
    { label: "Contact", value: "contact" },
  ]

  return (
    <nav className="navbar">
      <div className="container flex-between">
        <div className="navbar-brand">
          <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5em'}}>
            <BrainCircuit size={28} style={{marginRight: '0.25em'}} /> BrainBuzz Academy
          </h3>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.value}
              className={`nav-link ${currentPage === item.value ? "active" : ""}`}
              onClick={() => {
                setCurrentPage(item.value)
                setIsMobileMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
