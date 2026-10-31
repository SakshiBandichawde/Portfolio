import Link from "next/link";
import { projects } from "../data/projects";
import { ArrowUpRight, BriefcaseBusiness, CornerDownRight, Layers3, ShoppingBag } from "lucide-react";
import styles from "./Experience.module.css";

const entries = [
  {
    id: "advolve", period: "Jan 2024 - Present", type: "Full-time", title: "Frontend Developer", company: "Advolve",
    description: "Built client websites and web applications with React/Next.js, focusing on responsive UI, animations, API integration and deployment.",
    icon: ShoppingBag,
    linksTitle: "Selected work at Advolve",
    links: projects.filter(project => project.group === "agency").map(project => ({ label: project.title, href: project.liveUrl ?? `/work/${project.slug}` })),
  },
  {
    id: "freelance", period: "Freelance Projects", title: "Freelance Web Developer",
    description: "Independently developed and deployed websites and web applications, including e-commerce platforms and booking systems, working across frontend interfaces, backend integration and deployment.",
    icon: Layers3,
    linksTitle: "Selected projects",
    links: projects.filter(project => project.group === "featured" || project.group === "other").map(project => ({ label: project.title, href: project.group === "featured" ? `/work/${project.slug}` : project.liveUrl ?? `/work/${project.slug}` })),
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
              <p>My experience spans agency development, freelance projects and responsive web applications, including basic SEO and analytics setup with Google Analytics, Search Console and Google Tag Manager.</p>
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
                      <ul>{entry.links.map(link => {
                        const isExternal = link.href.startsWith("https://");
                        return (
                          <li key={link.href}>
                            <Link href={link.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                              {link.label}{isExternal && <ArrowUpRight size={11} aria-hidden="true" />}
                            </Link>
                          </li>
                        );
                      })}</ul>
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
