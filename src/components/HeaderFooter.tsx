import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Get a quote <ArrowUpRight size={16} /></a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            {links.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
            <a className="mobile-nav-cta" href="#contact" onClick={closeMenu}>Get a quote <ArrowUpRight size={17} /></a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Digital experiences, thoughtfully built for your next chapter.</p>
          <span className="footer-tagline">Your Vision. Our Code. Global Success.</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#pricing">Pricing</a>
          <a href="#process">Our process</a>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          <a href="#services">Web development</a>
          <a href="#services">E-commerce</a>
          <a href="#services">Custom software</a>
          <a href="#services">AI & automation</a>
        </div>
        <div className="footer-column">
          <h2>Let’s talk</h2>
          <a href="#contact">Request a quote</a>
          <a href="#faq">Frequently asked questions</a>
          <a href="#contact">Project enquiry <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BRIONEX Technologies. All rights reserved.</span>
        <span>Made for what’s next <span className="footer-spark">✳</span></span>
      </div>
    </footer>
  );
}
