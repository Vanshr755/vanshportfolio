import { useState } from "react";
import { FaMoon, FaSun, FaDownload, FaBars, FaXmark } from "react-icons/fa6";
import { navLinks, profile } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="logo">
          {profile.firstName}<span>{profile.lastName}</span>
        </a>

        <nav className={`navbar__links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <a className="btn btn--light navbar__resume" href={profile.resume} download>
            <FaDownload /> Resume
          </a>
          <button className="icon-btn burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
