import { useEffect } from "react";
import { Footer, Navbar } from "./components/HeaderFooter";
import FAQ from "./components/FAQ";
import { Commitment, Contact, Hero, Pricing, Process, Projects, Services } from "./components/Sections";

export default function App() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;
      const destination = anchor.getAttribute("href");
      if (!destination || destination.includes("?")) return;
      const section = document.querySelector(destination);
      if (!section) return;
      event.preventDefault();
      window.history.replaceState(null, "", destination);
      section.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <Process />
        <Commitment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
