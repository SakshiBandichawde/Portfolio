import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, CornerDownRight, Layers3, ShoppingBag } from "lucide-react";
import styles from "./Experience.module.css";

const entries = [
  {
    id: "advolve", period: "Jan 2024 - Present", type: "Full-time", title: "Frontend Developer", company: "Advolve",
    description: "Built client websites and web applications with React/Next.js, focusing on responsive UI, animations, API integration and deployment.",
    icon: ShoppingBag,
    linksTitle: "Selected work at Advolve",
    links: [{ label: "Advolve Website", href: "/work/advolve" }, { label: "Villa Gulposh Booking System", href: "/work/villa-gulposh" }],
  },
  {
    id: "freelance", period: "Freelance Projects", title: "Freelance Full-Stack Developer",
    description: "Built and delivered websites and web applications for clients, including booking platforms, ecommerce stores and business websites.",
    icon: Layers3,
    linksTitle: "Selected projects",
    links: [{ label: "Karabook", href: "/work/karabook" }, { label: "Woodan", href: "/work/woodan" }, { label: "EcoClay Solutions", href: "/work/ecoclay" }, { label: "Komal Enterprises", href: "/work/komal-enterprises" }],
  },
  {
    id: "internship", period: "Jul 2023 - Jan 2024", type: "Internship", title: "Web Developer Intern", company: "Advolve",
    description: "Worked on WordPress websites, customised page layouts and handled responsive design updates.",
    icon: BriefcaseBusiness,
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-title">
      <div className="page-container">
        <span className="eyebrow"><span aria-hidden="true" /> Experience</span>
        <div className={styles.panel}>
          <header className={styles.intro}>
            <div>
              <h2 id="experience-title">Where I&apos;ve worked,<br /><span className="text-accent">and what I&apos;ve learned.</span></h2>
              <p>My experience spans agency development, freelance projects<br className={styles.break} /> and building responsive web applications.</p>
            </div>
            <div className={styles.note} aria-hidden="true">
              <span>Different projects,<br />same goal &mdash;<br />build great web experiences.</span>
              <CornerDownRight size={38} strokeWidth={1} />
            </div>
          </header>
          <ol className={styles.timeline}>
            {entries.map(entry => {
              const Icon = entry.icon;
              return (
                <li className={styles.entry} key={entry.id}>
                  <span className={styles.icon} aria-hidden="true"><Icon size={23} strokeWidth={1.6} /></span>
                  <div className={styles.entryBody}>
                    <div className={styles.entryCopy}>
                      <p className={styles.period}>{entry.period}{entry.type && <><span aria-hidden="true">&middot;</span>{entry.type}</>}</p>
                      <h3>{entry.title}{entry.company && <><span aria-hidden="true">&middot;</span><span className={styles.company}>{entry.company}</span></>}</h3>
                      <p className={styles.description}>{entry.description}</p>
                    </div>
                    {entry.links && <div className={styles.related}>
                      <h4>{entry.linksTitle}</h4>
                      <ul>{entry.links.map(link => <li key={link.href}><Link href={link.href}>{link.label}{entry.id === "advolve" && <ArrowUpRight size={11} aria-hidden="true" />}</Link></li>)}</ul>
                    </div>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
