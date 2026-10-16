import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import styles from "./Contact.module.css";

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
          <button type="button" className="btn btn-primary" disabled title="Contact link will be added later">Get in touch <ArrowRight size={14} aria-hidden="true" /></button>
          <div className={styles.socials}>
            <button type="button" disabled title="Email address will be added later"><Mail size={14} aria-hidden="true" />Email</button>
            <button type="button" disabled title="LinkedIn profile will be added later"><Linkedin size={14} aria-hidden="true" />LinkedIn</button>
            <button type="button" disabled title="GitHub profile will be added later"><Github size={14} aria-hidden="true" />GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
}
