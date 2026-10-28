import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Check,
  CircleCheck,
  Headphones,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { additionalPrices, monthlyPlans, pricingPlans, processSteps, projects, services } from "../data";
import ContactForm from "./ContactForm";

/* Scroll-reveal observer: adds .brx-visible to .brx-reveal elements when in view */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("brx-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".brx-reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}


export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.62, ease: "easeOut" }}
        >
          <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> DIGITAL SOLUTIONS FOR AMBITIOUS BUSINESSES</span>
          <h1>We build digital experiences that move <span>businesses forward.</span></h1>
          <p className="hero-description">
            From high-performance websites and custom software to mobile apps and intelligent automation, BRIONEX helps turn ambitious ideas into practical digital solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#contact">Start your project <ArrowUpRight size={18} /></a>
            <a className="button button-outline" href="#projects">Explore our work <ArrowDown size={16} /></a>
          </div>
          <div className="hero-signature">
            <span className="signature-icon"><Sparkles size={16} /></span>
            <span><strong>From first idea to launch.</strong><small>One thoughtful team, every step of the way.</small></span>
          </div>
          <div className="hero-benefits">
            <span><CircleCheck size={16} /> Modern, responsive experiences</span>
            <span><CircleCheck size={16} /> Transparent project pricing</span>
            <span><CircleCheck size={16} /> Solutions tailored to your goals</span>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
        >
          <div className="visual-topbar">
            <span className="visual-dots"><i /><i /><i /></span>
            <span>AN IDEA, MADE REAL</span>
            <span className="visual-topbar-icon"><MoveUpRight size={15} /></span>
          </div>
          <div className="visual-website">
            <div className="visual-site-nav">
              <span className="visual-logo">nōva<span>.</span></span>
              <span>STAYS&nbsp;&nbsp; EXPERIENCES&nbsp;&nbsp; JOURNAL</span>
              <span className="visual-book">BOOK A STAY ↗</span>
            </div>
            <div className="visual-image">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=85" alt="Sunlit modern interior in an illustrative website design concept" fetchPriority="high" />
              <div className="visual-image-copy">
                <span>FIND YOUR SLOW</span>
                <strong>A little more<br />room to breathe.</strong>
                <span className="visual-discover">DISCOVER THE COLLECTION <ArrowRight size={12} /></span>
              </div>
              <div className="visual-image-mark">01 — 03</div>
            </div>
            <div className="visual-caption">
              <span>A PLACE TO PAUSE</span>
              <span>DESIGNED FOR THE IN BETWEEN.</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="container trust-strip">
        {[
          { icon: Smartphone, label: "Responsive by design" },
          { icon: MessageCircle, label: "Clear communication" },
          { icon: BadgeDollarSign, label: "Transparent pricing" },
          { icon: Headphones, label: "Support after launch" },
        ].map(({ icon: Icon, label }) => (
          <div className="trust-item" key={label}><Icon size={16} aria-hidden="true" /><strong>{label}</strong></div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  useReveal();
  return (
    <section className="section section-light" id="services">
      <div className="container">
        <div className="section-heading brx-reveal">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> WHAT WE DO</span>
            <h2 className="section-title">The right digital<br />tools for your <span className="text-lime-dark">next move.</span></h2>
          </div>
          <p>Everything you need to establish, improve, and grow your digital presence. Thoughtfully scoped, built to fit.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className={`service-card brx-reveal brx-delay-${Math.min(index + 1, 5)} ${index === 0 ? "service-card-featured" : ""}`} key={service.title}>
                <div className="service-card-top"><span className="service-icon"><Icon size={20} strokeWidth={1.7} /></span><span className="card-index">0{index + 1}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.features.slice(0, 2).map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
                <a className="card-link" href="#contact" onClick={(event) => {
                  event.preventDefault();
                  window.history.replaceState(null, "", "#contact");
                  document.getElementById("contact")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
                  window.dispatchEvent(new CustomEvent("brionex:select-service", { detail: service.title }));
                }}>Discuss this service <ArrowUpRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  useReveal();
  return (
    <section className="section section-white" id="projects">
      <div className="container">
        <div className="section-heading brx-reveal">
          <div><span className="eyebrow"><span className="eyebrow-dot" /> THE WORK, IN CONCEPT</span><h2 className="section-title">Good ideas deserve<br /><span className="text-lime-dark">great digital homes.</span></h2></div>
          <p>A glimpse of the digital experiences we can create. Each preview is clearly identified as a concept—not presented as commissioned client work.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1} brx-reveal brx-delay-${index + 1}`} key={project.name}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-label">{project.label}</span>
                <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
              </div>
              <div className="project-info"><div><span>{project.category}</span><h3>{project.name}</h3></div><p>{project.description}</p></div>
            </article>
          ))}
        </div>
        <p className="projects-note brx-reveal">Concept imagery is illustrative; no client engagement or project results are implied.</p>
      </div>
    </section>
  );
}

export function Pricing() {
  useReveal();
  return (
    <>
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-heading brx-reveal">
            <div><span className="eyebrow"><span className="eyebrow-dot" /> INVEST WITH CLARITY</span><h2 className="section-title">Simple pricing.<br /><span className="text-lime-dark">Clear expectations.</span></h2></div>
            <p>A starting point for the conversation. We’ll confirm your project’s scope, deliverables, and timeline before work begins.</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <article className={`pricing-card brx-reveal brx-delay-${index + 1} ${plan.recommended ? "pricing-card-recommended" : ""}`} key={plan.name}>
                {plan.recommended ? <span className="recommended-pill">A GOOD PLACE TO START</span> : null}
                <div className="pricing-card-heading"><h3>{plan.name}</h3><p>{plan.description}</p></div>
                <div className="pricing-amount">{plan.price === "Let's scope it" ? <span className="price-custom">{plan.price}</span> : <><strong>{plan.price}</strong><span>one-time · starting at</span></>}</div>
                <a className={`button ${plan.recommended ? "button-lime" : "button-pricing"}`} href="#contact" onClick={() => {
                  sessionStorage.setItem("brionex:service", plan.name);
                  window.dispatchEvent(new CustomEvent("brionex:select-service", { detail: plan.name }));
                }}>{plan.name === "Custom Project" ? "Request a custom quote" : "Discuss this package"} <ArrowUpRight size={16} /></a>
                <div className="pricing-divider"><span>WHAT’S INCLUDED</span></div>
                <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="pricing-disclaimer brx-reveal">Domain, hosting, paid tools, third-party subscriptions, complex backend work, and major scope changes may be charged separately. Final pricing depends on agreed requirements.</p>
        </div>
      </section>
      <AdditionalPricing />
      <MonthlyPricing />
    </>
  );
}

function AdditionalPricing() {
  return (
    <section className="section section-light additional-section">
      <div className="container additional-layout">
        <div className="additional-intro"><span className="eyebrow"><span className="eyebrow-dot" /> A FEW STARTING POINTS</span><h2 className="section-title">Individual services,<br /><span className="text-lime-dark">made clear.</span></h2><p>Indicative starting prices to help frame your plans. More involved requirements are scoped separately.</p><a className="text-link" href="#contact">Tell us what you need <ArrowUpRight size={15} /></a></div>
        <div className="additional-list">{additionalPrices.map(([name, price], index) => <a className="additional-row" href="#contact" key={name} onClick={() => {
          sessionStorage.setItem("brionex:service", name);
          window.dispatchEvent(new CustomEvent("brionex:select-service", { detail: name }));
        }}><span className="additional-number">0{index + 1}</span><strong>{name}</strong><span className="additional-price">{price}</span><ArrowUpRight size={16} /></a>)}</div>
      </div>
      <p className="container additional-footnote">Final pricing depends on scope, functionality, integrations, and delivery requirements. Complex production-ready apps and custom backends are scoped to your needs.</p>
    </section>
  );
}

function MonthlyPricing() {
  return (
    <section className="section monthly-section">
      <div className="container">
        <div className="section-heading monthly-heading"><div><span className="eyebrow"><span className="eyebrow-dot" /> HERE WHEN YOU NEED US</span><h2 className="section-title">Good work, <span className="text-lime-dark">kept in good shape.</span></h2></div><p>Flexible ongoing care and SEO services with an agreed scope and monthly allowance.</p></div>
        <div className="monthly-grid">
          {monthlyPlans.map((plan) => {
            const Icon = plan.icon;
            return <article className="monthly-card" key={plan.name}><span className="monthly-icon"><Icon size={19} /></span><h3>{plan.name}</h3><p className="monthly-price">{plan.price}<span>{plan.period}</span></p><ul>{plan.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul><a href="#contact" onClick={() => {
              sessionStorage.setItem("brionex:service", plan.name);
              window.dispatchEvent(new CustomEvent("brionex:select-service", { detail: plan.name }));
            }}>Talk about this plan <ArrowUpRight size={15} /></a></article>;
          })}
        </div>
        <p className="monthly-note">Ad spend, third-party subscriptions, and external tools are separate. SEO rankings and outcomes cannot be guaranteed.</p>
      </div>
    </section>
  );
}

export function Process() {
  useReveal();
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-heading brx-reveal"><div><span className="eyebrow"><span className="eyebrow-dot" /> NO GUESSWORK</span><h2 className="section-title">A clear process<br />from idea to <span className="text-lime-dark">launch.</span></h2></div><p>Good work starts with a shared understanding. Every project has clear steps and agreed expectations.</p></div>
        <div className="process-grid">
          {processSteps.map(([number, title, description], index) => <article className={`process-step brx-reveal brx-delay-${index + 1}`} key={number}><div className="process-step-top"><span>{number}</span>{index < processSteps.length - 1 ? <span className="process-connector" /> : null}</div><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </div>
    </section>
  );
}

export function Commitment() {
  useReveal();
  const commitments = ["Clear communication", "Agreed project scope", "Responsive design", "Transparent pricing", "Quality-focused delivery"];
  return (
    <section className="commitment-section" id="testimonials">
      <div className="container commitment-layout">
        <div className="commitment-copy brx-reveal"><span className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> A PROMISE WE CAN KEEP</span><h2>Good work.<br />No guesswork.</h2><p>We’d rather earn your trust with a clear plan and thoughtful execution than make promises we can’t stand behind.</p><a className="button button-lime" href="#contact">Let’s talk about your project <ArrowUpRight size={17} /></a></div>
        <div className="commitment-list">{commitments.map((item, index) => <div className={`commitment-item brx-reveal brx-delay-${index + 1}`} key={item}><span>0{index + 1}</span><strong>{item}</strong><Check size={17} /></div>)}</div>
        <span className="commitment-watermark" aria-hidden="true">B.</span>
      </div>
    </section>
  );
}

export function Contact() {
  const [initialService, setInitialService] = useState<string | undefined>(() => {
    const queryService = new URLSearchParams(window.location.hash.split("?")[1] ?? "").get("service");
    return queryService ?? sessionStorage.getItem("brionex:service") ?? undefined;
  });
  useEffect(() => {
    const handleService = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      setInitialService(detail);
      sessionStorage.setItem("brionex:service", detail);
    };
    window.addEventListener("brionex:select-service", handleService);
    return () => window.removeEventListener("brionex:select-service", handleService);
  }, []);
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy"><span className="eyebrow eyebrow-dark"><span className="eyebrow-dot" /> START A CONVERSATION</span><h2>Have a project<br />in <span>mind?</span></h2><p>Tell us what you want to build, improve, or automate. We’ll review your requirements and discuss the next steps.</p><div className="contact-assurances"><span><Check size={16} /> Clear next steps</span><span><Check size={16} /> No-pressure conversation</span><span><Check size={16} /> Scope before commitment</span></div><div className="contact-side-note"><span className="contact-note-line" /><p>YOUR VISION.<br />OUR CODE.<br /><strong>GLOBAL SUCCESS.</strong></p></div></div>
        <div className="contact-form-wrap"><div className="contact-form-heading"><div><span>THE FIRST STEP</span><h3>Tell us a little more.</h3></div><span>01 — 02</span></div><ContactForm initialService={initialService} /></div>
      </div>
    </section>
  );
}
