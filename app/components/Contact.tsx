import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import styles from "./Contact.module.css";

const contactEmail = "sakshibandichawade@gmail.com";
const enquiryHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent("Hi Sakshi,\n\nI'd like to discuss a project.\n\nName:\nProject details:\nTimeline:\n\nThank you.")}`;

export default function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={`page-container ${styles.band}`}>
        <div>
          <span className="eyebrow"><span aria-hidden="true" /> Let&apos;s Connect</span>
          <h2 id="contact-title">Have a project in mind?</h2>
          <p>Let&apos;s talk about your next website or web application.</p>
        </div>
        <div className={styles.actions}>
          <a href={enquiryHref} className="btn btn-primary" title="Email Sakshi about your project">Get in touch <ArrowRight size={14} aria-hidden="true" /></a>
          <div className={styles.socials}>
            <a href={`mailto:${contactEmail}`} aria-label={`Email Sakshi at ${contactEmail}`}><Mail size={14} aria-hidden="true" />Email</a>
            <button type="button" disabled title="LinkedIn profile will be added later"><Linkedin size={14} aria-hidden="true" />LinkedIn</button>
            <button type="button" disabled title="GitHub profile will be added later"><Github size={14} aria-hidden="true" />GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
}
