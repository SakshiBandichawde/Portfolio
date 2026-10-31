import Image from "next/image";
import { Cable, CodeXml, Github, Paintbrush, type LucideIcon } from "lucide-react";
import styles from "./TechStack.module.css";

type Technology = {
  name: string;
  image?: string;
  mark?: string;
  variant?: "next" | "javascript" | "typescript";
  icon?: LucideIcon;
};

const core: Technology[] = [
  { name: "React", image: "/images/logos/react.png" },
  { name: "Next.js", mark: "N", variant: "next" },
  { name: "JavaScript", mark: "JS", variant: "javascript" },
  { name: "TypeScript", mark: "TS", variant: "typescript" },
];

const groups: { id: string; title: string; technologies: Technology[] }[] = [
  {
    id: "ui-development",
    title: "UI development",
    technologies: [
      { name: "HTML", icon: CodeXml },
      { name: "CSS", icon: Paintbrush },
      { name: "Tailwind CSS", image: "/images/logos/tailwind.png" },
    ],
  },
  {
    id: "supporting-skills",
    title: "Supporting skills",
    technologies: [
      { name: "REST API integration", icon: Cable },
      { name: "Git", image: "/images/logos/git.png" },
      { name: "GitHub", icon: Github },
    ],
  },
  {
    id: "additional-experience",
    title: "Additional experience",
    technologies: [
      { name: "Node.js", image: "/images/logos/nodejs.png" },
      { name: "Express.js", image: "/images/logos/express.png" },
      { name: "MongoDB", image: "/images/logos/mongodb.png" },
    ],
  },
];

function TechnologyIcon({ technology }: { technology: Technology }) {
  if (technology.image) return <Image src={technology.image} width={30} height={30} alt="" />;
  if (technology.icon) {
    const Icon = technology.icon;
    return <Icon size={30} strokeWidth={1.7} aria-hidden="true" />;
  }
  return (
    <span className={`${styles.mark} ${technology.variant ? styles[technology.variant] : ""}`} aria-hidden="true">
      {technology.mark}
    </span>
  );
}

export default function TechStack() {
  return (
    <section className={styles.stack} aria-labelledby="tech-stack-title">
      <h2 id="tech-stack-title" className={styles.title}><span aria-hidden="true" />Technologies I work with</h2>
      <div className={styles.core} aria-labelledby="core-technologies-title">
        <h3 id="core-technologies-title" className={styles.groupTitle}>Core</h3>
        <ul className={styles.list}>
          {core.map(technology => (
            <li className={styles.item} key={technology.name}>
              <TechnologyIcon technology={technology} />
              <span>{technology.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.groups}>
        {groups.map(group => (
          <section className={styles.group} key={group.id} aria-labelledby={group.id}>
            <h3 id={group.id} className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.secondaryList}>
              {group.technologies.map(technology => (
                <li key={technology.name}>
                  <TechnologyIcon technology={technology} />
                  <span>{technology.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
