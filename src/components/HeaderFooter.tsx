import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

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
  const scrolled = useScrolled();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " brx-scrolled" : ""}`}>
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
  const footerLink = (label: string, href: string) => (
    <a href={href} key={`${label}-${href}`}>
      <span className="footer-link-arrow" aria-hidden="true">&gt;</span>
      <span>{label}</span>
    </a>
  );

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Websites, online stores, mobile apps, and custom software built around your business goals.</p>
          <span className="footer-tagline">Your Vision. Our Code. Global Success.</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {footerLink("Services", "#services")}
          {footerLink("Projects", "#projects")}
          {footerLink("Pricing", "#pricing")}
          {footerLink("Our process", "#process")}
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {footerLink("Web development", "#services")}
          {footerLink("E-commerce", "#services")}
          {footerLink("Mobile apps", "#services")}
          {footerLink("Custom software", "#services")}
          {footerLink("AI & automation", "#services")}
        </div>
        <div className="footer-column">
          <h2>Let’s talk</h2>
          {footerLink("Request a quote", "#contact")}
          {footerLink("Frequently asked questions", "#faq")}
          <a href="#contact">
            <span className="footer-link-arrow" aria-hidden="true">&gt;</span>
            <span>Project enquiry</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BRIONEX Technologies. All rights reserved.</span>
        <span>Made for what’s next <span className="footer-spark">✳</span></span>
      </div>
    </footer>
  );
}
