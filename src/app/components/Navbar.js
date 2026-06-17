"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
        <Logo height={52} />
      </Link>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navLinks${open ? " navOpen" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/About" onClick={() => setOpen(false)}>About</Link>
        <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
