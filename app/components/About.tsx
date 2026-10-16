import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className="page-container">
        <span className="eyebrow"><span aria-hidden="true" /> About</span>
        <div className={styles.content}>
          <div>
            <h2 id="about-title">A little about me.</h2>
            <p>I enjoy turning designs into responsive, useful interfaces<br className={styles.break} /> and working through the details to feel right.</p>
          </div>
          <p className={styles.workflow}>
            I use AI-assisted development tools like Codex and Claude as part of my
            workflow &mdash; from exploring implementation ideas to debugging and
            refining code. They help me work more efficiently while I stay involved
            in the technical decisions, integration and final implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
