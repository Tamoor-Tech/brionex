import {
  AppWindow,
  Bot,
  Code2,
  Figma,
  Gauge,
  Globe2,
  Layers3,
  Megaphone,
  Search,
  ShoppingBag,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  label: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    title: "Website Development",
    description: "A thoughtful, responsive website shaped around your brand, goals, and customers.",
    icon: Globe2,
    features: ["Custom responsive design", "Contact forms & integrations", "On-page SEO foundations"],
  },
  {
    title: "E-commerce Development",
    description: "A smooth online shopping experience, from product discovery through checkout.",
    icon: ShoppingBag,
    features: ["Product catalogue & cart", "Supported payment integrations", "Storefront built for mobile"],
  },
  {
    title: "Website Redesign",
    description: "Make an existing site clearer, more usable, and more compelling on every screen.",
    icon: AppWindow,
    features: ["Modern visual direction", "Improved mobile usability", "Navigation & performance review"],
  },
  {
    title: "Mobile App Development",
    description: "Purpose-built app interfaces and integrations planned around real user needs.",
    icon: Smartphone,
    features: ["Custom app interfaces", "API integration", "Testing & deployment planning"],
  },
  {
    title: "Custom Software",
    description: "Web applications and connected systems that make your unique workflows work better.",
    icon: Code2,
    features: ["Database-backed systems", "Purpose-built web applications", "Third-party integrations"],
  },
  {
    title: "AI Chatbots & Automation",
    description: "Practical AI interactions and workflow automation, thoughtfully applied.",
    icon: Bot,
    features: ["Customer-facing chat flows", "Workflow automation", "Relevant AI integrations"],
  },
  {
    title: "UI/UX Design",
    description: "Clear, considered interfaces that make digital products easier to understand and use.",
    icon: Figma,
    features: ["User flows & wireframes", "Responsive interface design", "Prototyping & refinement"],
  },
  {
    title: "Search Engine Optimization",
    description: "Build a stronger search foundation with relevant, ongoing optimization.",
    icon: Search,
    features: ["Technical improvements", "On-page optimization", "Keyword research"],
  },
  {
    title: "Digital Marketing",
    description: "Plan, launch, and measure marketing activity tailored to your business.",
    icon: Megaphone,
    features: ["Campaign implementation", "Content planning", "Performance measurement"],
  },
  {
    title: "Website Maintenance",
    description: "Keep your website cared for with agreed updates and technical assistance.",
    icon: Wrench,
    features: ["Routine checks & updates", "Backups where supported", "Ongoing technical help"],
  },
];

export const projects: Project[] = [
  {
    name: "The Modern Stay",
    category: "Hospitality · Website concept",
    description: "A calm, editorial booking experience concept for an independent boutique stay.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm, contemporary boutique hotel bedroom used to illustrate a hospitality website concept",
    label: "SPECULATIVE CONCEPT",
  },
  {
    name: "Form & Field",
    category: "E-commerce · Website concept",
    description: "A considered digital storefront concept for a contemporary homeware brand.",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85",
    alt: "Sunlit interior with carefully arranged homeware objects for an e-commerce concept",
    label: "SPECULATIVE CONCEPT",
  },
  {
    name: "Daily Ritual",
    category: "Wellness · Website concept",
    description: "A warm, mobile-first concept for a modern wellness and self-care studio.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    alt: "Peaceful spa interior used to illustrate a wellness website concept",
    label: "SPECULATIVE CONCEPT",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Website",
    price: "$149",
    description: "A clear, confident start for portfolios and small businesses.",
    features: ["Up to 4 pages", "Responsive design", "Contact section & basic form", "WhatsApp button", "Basic on-page SEO", "2 revision rounds"],
  },
  {
    name: "Business Website",
    price: "$299",
    description: "A tailored presence for businesses ready to grow.",
    features: ["Up to 8 pages", "Tailored visual design", "Services, gallery, or testimonials", "Contact form & WhatsApp", "Maps integration where required", "Mobile & browser testing", "2 revision rounds"],
    recommended: true,
  },
  {
    name: "Premium Website",
    price: "$499",
    description: "More room for custom design and considered functionality.",
    features: ["Up to 12 pages, based on scope", "Extensive custom UI", "Advanced forms or booking integrations", "Agreed third-party integrations", "Performance optimization", "Technical testing", "3 revision rounds"],
  },
  {
    name: "Custom Project",
    price: "Let's scope it",
    description: "For ambitious builds that need a more considered approach.",
    features: ["E-commerce & web applications", "Custom software & integrations", "AI automation & mobile apps", "Requirements-based scope", "Agreed timeline & deliverables"],
  },
];

export const additionalPrices = [
  ["Landing page", "From $79"],
  ["Website redesign", "From $149"],
  ["Basic e-commerce website", "From $349"],
  ["Website AI chatbot", "From $99"],
  ["Custom web application", "From $500"],
  ["Mobile application", "From $700"],
  ["Logo design", "From $30"],
];

export const monthlyPlans = [
  {
    name: "Website Care",
    price: "$25",
    period: "/ month",
    icon: Wrench,
    features: ["Basic maintenance within agreed limits", "Routine checks", "Minor updates within agreed allowance"],
  },
  {
    name: "Website Care Plus",
    price: "$49",
    period: "/ month",
    icon: Gauge,
    features: ["Care plan features", "Agreed content updates", "Additional maintenance allowance", "Routine performance checks"],
  },
  {
    name: "SEO Starter",
    price: "$99",
    period: "/ month",
    icon: Search,
    features: ["Agreed SEO tasks", "Keyword research", "Monthly work summary"],
  },
  {
    name: "SEO Growth",
    price: "$199",
    period: "/ month",
    icon: Layers3,
    features: ["SEO Starter features", "Additional content optimization", "Relevant local SEO work", "Monthly progress reporting"],
  },
];

export const processSteps = [
  ["01", "Discover", "We learn about your business, requirements, and goals."],
  ["02", "Plan", "We agree on scope, deliverables, price, and timeline."],
  ["03", "Design", "We create and refine an interface that fits your brand."],
  ["04", "Develop & test", "We build your solution and test it across devices."],
  ["05", "Launch & support", "We deploy and provide the support we've agreed."],
];

export const faqItems: FAQItem[] = [
  {
    question: "What services does BRIONEX Technologies provide?",
    answer: "We work on responsive websites, e-commerce, website redesigns, web and mobile applications, custom software, UI/UX design, AI automation, SEO, digital marketing, and ongoing website care.",
  },
  {
    question: "How do we start a project?",
    answer: "Share your goals, preferred service, budget, timeline, and any useful references in the project enquiry form. We can then discuss the requirements and agree on a clear scope before work begins.",
  },
  {
    question: "How much does a BRIONEX website cost?",
    answer: "Starter Website packages begin at $149, Business Websites at $299, and Premium Websites at $499. E-commerce, custom software, and other advanced projects are scoped individually. Final pricing depends on pages, functionality, integrations, and requirements.",
  },
  {
    question: "How long does website development take?",
    answer: "Timelines depend on the agreed scope, content readiness, integrations, and feedback. We confirm a realistic timeline during planning before work begins.",
  },
  {
    question: "Is domain and hosting included?",
    answer: "Domain registration and hosting are not included in the listed package prices. We can help you choose and configure suitable services; their subscription costs are paid separately.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. Redesigns can improve visual design, mobile usability, navigation, and performance. We first review your existing site and agree what should change; redesigns start at $149.",
  },
  {
    question: "Can I request custom features?",
    answer: "Yes. Share what you need in the project form and we'll assess the requirements, integrations, feasibility, cost, and timeline before agreeing on the work.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer: "Yes. E-commerce projects can include an agreed catalogue, cart, checkout, and supported payment integrations. Payment-provider fees, hosting, and paid third-party tools are separate.",
  },
  {
    question: "Do you offer AI chatbots?",
    answer: "We build practical AI-powered customer interactions and workflow automation. A website chatbot starts at $99; the final cost depends on integrations, provider usage, and the agreed scope.",
  },
  {
    question: "How do payments work?",
    answer: "Payment milestones and methods are agreed in writing before work begins. Third-party subscriptions, domain and hosting fees, and other agreed external costs are separate.",
  },
  {
    question: "How many revisions are included?",
    answer: "Starter and Business packages include two revision rounds; Premium includes three. A revision round covers agreed design refinements. New features, major scope changes, or extra rounds may be quoted separately.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes. Website Care starts at $25 per month and Website Care Plus at $49 per month. Each plan has an agreed maintenance and update allowance.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We welcome enquiries from clients worldwide. We agree on communication, project scope, delivery, payment arrangements, and time-zone expectations together.",
  },
  {
    question: "How can I request a quotation?",
    answer: "Use the project form below to share the service, budget, timeline, and requirements. Once form submission is connected to an active contact endpoint, we can receive and review your enquiry.",
  },
  {
    question: "What information should I include in a project enquiry?",
    answer: "A short description of what you want to build or improve, who it is for, your preferred timeline, an estimated budget, and any relevant examples will help us understand your needs.",
  },
];
