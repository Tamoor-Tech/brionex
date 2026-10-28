import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

const services = [
  "Website Development",
  "E-commerce",
  "Website Redesign",
  "Mobile App",
  "UI/UX Design",
  "Custom Software",
  "AI Chatbot / Automation",
  "SEO",
  "Digital Marketing",
  "Website Maintenance",
  "Multiple Services",
  "Other",
  "Starter Website",
  "Business Website",
  "Premium Website",
  "Custom Project",
  "Landing page",
  "Basic e-commerce website",
  "Website AI chatbot",
  "Custom web application",
  "Mobile application",
  "Logo design",
  "Website Care",
  "Website Care Plus",
  "SEO Starter",
  "SEO Growth",
];
const budgets = ["Under $150", "$150–$300", "$300–$500", "$500–$1,000", "$1,000–$3,000", "$3,000+", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Flexible"];

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid business email."),
  company: z.string().optional(),
  country: z.string().trim().min(2, "Please enter your country."),
  service: z.string().min(1, "Please choose a service."),
  budget: z.string().min(1, "Please choose an estimated budget."),
  timeline: z.string().min(1, "Please choose a preferred timeline."),
  details: z.string().trim().min(20, "Please share at least 20 characters about your project."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass = "form-control";

function FieldError({ message }: { message?: string }) {
  return message ? <span className="field-error">{message}</span> : null;
}

export default function ContactForm({ initialService }: { initialService?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: services.includes(initialService ?? "") ? initialService : "",
      budget: "",
      timeline: "",
    },
  });

  useEffect(() => {
    if (initialService) setValue("service", initialService);
  }, [initialService, setValue]);

  const submit = async (values: ContactFormValues) => {
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setStatus("unconfigured");
      setStatusMessage("Your details have not been sent. The contact form needs a secure submission endpoint before enquiries can be received.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(`Contact endpoint returned ${response.status}.`);
      }
      setStatus("success");
      setStatusMessage("Thanks for reaching out. Your project enquiry has been sent.");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
      setStatusMessage("We couldn't send your enquiry. Please try again later.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-grid">
        <label className="form-field">
          Full name <span aria-hidden="true">*</span>
          <input className={inputClass} autoComplete="name" placeholder="Your name" {...register("fullName")} aria-invalid={Boolean(errors.fullName)} />
          <FieldError message={errors.fullName?.message} />
        </label>
        <label className="form-field">
          Business email <span aria-hidden="true">*</span>
          <input className={inputClass} type="email" autoComplete="email" placeholder="you@company.com" {...register("email")} aria-invalid={Boolean(errors.email)} />
          <FieldError message={errors.email?.message} />
        </label>
        <label className="form-field">
          Company <span className="optional">(optional)</span>
          <input className={inputClass} autoComplete="organization" placeholder="Company name" {...register("company")} />
        </label>
        <label className="form-field">
          Country <span aria-hidden="true">*</span>
          <input className={inputClass} autoComplete="country-name" placeholder="Where are you based?" {...register("country")} aria-invalid={Boolean(errors.country)} />
          <FieldError message={errors.country?.message} />
        </label>
        <label className="form-field">
          Service required <span aria-hidden="true">*</span>
          <select className={inputClass} {...register("service")} aria-invalid={Boolean(errors.service)}>
            <option value="">Select a service</option>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
          <FieldError message={errors.service?.message} />
        </label>
        <label className="form-field">
          Estimated budget <span aria-hidden="true">*</span>
          <select className={inputClass} {...register("budget")} aria-invalid={Boolean(errors.budget)}>
            <option value="">Select a range</option>
            {budgets.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
          <FieldError message={errors.budget?.message} />
        </label>
        <label className="form-field form-field-wide">
          Preferred timeline <span aria-hidden="true">*</span>
          <select className={inputClass} {...register("timeline")} aria-invalid={Boolean(errors.timeline)}>
            <option value="">Select a timeline</option>
            {timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
          </select>
          <FieldError message={errors.timeline?.message} />
        </label>
        <label className="form-field form-field-wide">
          Tell us about your project <span aria-hidden="true">*</span>
          <textarea className={`${inputClass} min-h-32 resize-y`} placeholder="What are you looking to build, improve, or automate?" {...register("details")} aria-invalid={Boolean(errors.details)} />
          <FieldError message={errors.details?.message} />
        </label>
      </div>
      <div className="form-submit-row">
        <button className="button button-lime" type="submit" disabled={status === "loading"}>
          {status === "loading" ? <LoaderCircle className="animate-spin" size={18} /> : null}
          {status === "loading" ? "Sending…" : "Send project enquiry"}
          {status !== "loading" ? <ArrowUpRight size={17} /> : null}
        </button>
        <p>By submitting, you agree to be contacted about your project.</p>
      </div>
      {statusMessage ? (
        <div className={`form-status form-status-${status}`} role={status === "error" || status === "unconfigured" ? "alert" : "status"}>
          {status === "success" ? <CheckCircle2 size={18} /> : null}
          {statusMessage}
        </div>
      ) : null}
      <p className="form-integration-note">
        Form delivery requires a configured <code>VITE_CONTACT_ENDPOINT</code>. Submissions are not stored or sent until an endpoint is connected.
      </p>
    </form>
  );
}
