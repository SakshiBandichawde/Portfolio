import { ArrowRight, Download } from "lucide-react";
import HeroVisual from "./HeroVisual";
import TechStack from "./TechStack";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="page-container">
        <div className={styles.row}>
          <div className={styles.copy}>
            <span className={`eyebrow ${styles.eyebrow}`}><span aria-hidden="true" /> Frontend Developer</span>
            <h1 id="hero-title">Hi, I&apos;m Sakshi.</h1>
            <p className={styles.tagline}>I turn ideas into thoughtful<br className={styles.desktopBreak} /> web experiences.</p>
            <p className={styles.description}>
              I build responsive websites and web applications with React,
              Next.js, JavaScript and TypeScript. I also work on full-stack
              freelance projects, from user-facing interfaces to the
              functionality behind them.
            </p>
            <div className={styles.actions}>
              <a href="#work" className="btn btn-primary">View my work <ArrowRight size={14} aria-hidden="true" /></a>
              <button type="button" className="btn btn-light" disabled title="Resume will be added later">Download resume <Download size={14} aria-hidden="true" /></button>
            </div>
          </div>
          <HeroVisual />
        </div>
        <TechStack />
      </div>
    </section>
  );
}
