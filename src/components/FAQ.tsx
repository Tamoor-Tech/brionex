import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section-light" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="eyebrow"><span className="eyebrow-dot" /> GOOD TO KNOW</span>
          <h2 className="section-title">Frequently asked <span className="text-lime-dark">questions.</span></h2>
          <p>Have another question? Tell us a little about your project and we’ll help you find the right next step.</p>
          <a className="text-link" href="#contact">Talk through your project <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-answer-${index}`;
            return (
              <article className={`faq-item ${isOpen ? "faq-item-open" : ""}`} key={item.question}>
                <h3>
                  <button
                    className="faq-question"
                    id={`faq-question-${index}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span><span className="faq-number">{String(index + 1).padStart(2, "0")}</span>{item.question}</span>
                    <ChevronDown className="faq-chevron" size={19} aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="faq-answer-wrap"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                    >
                      <p className="faq-answer">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
