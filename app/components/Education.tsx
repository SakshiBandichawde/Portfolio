import { GraduationCap } from "lucide-react";
import styles from "./Experience.module.css";

const qualifications = [
  { title: "Master of Computer Applications (MCA)", institution: "SRTMUN, Nanded", period: "Completed" },
  { title: "Bachelor of Science in Computer Science (BSc)", period: "2020 - 2023" },
];

export default function Education() {
  return (
    <section id="education" className={styles.education} aria-labelledby="education-title">
      <div className="page-container">
        <h2 id="education-title" className="eyebrow"><span aria-hidden="true" /> Education</h2>
        <div className={styles.panel}>
          <ol className={styles.timeline}>
            {qualifications.map(item => (
              <li className={styles.entry} key={item.title}>
                <span className={styles.icon} aria-hidden="true"><GraduationCap size={23} strokeWidth={1.6} /></span>
                <div className={styles.entryBody}>
                  <div className={styles.entryCopy}>
                    <p className={styles.period}>{item.period}</p>
                    <h3>{item.title}</h3>
                    {item.institution && <p className={styles.description}>{item.institution}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
