import Image from "next/image";
import styles from "./TechStack.module.css";

const technologies = [
  { name: "React", image: "/images/logos/react.png" },
  { name: "Next.js", mark: "N", style: "next" },
  { name: "JavaScript", mark: "JS", style: "javascript" },
  { name: "TypeScript", mark: "TS", style: "typescript" },
  { name: "MongoDB", image: "/images/logos/mongodb.png" },
  { name: "Tailwind CSS", image: "/images/logos/tailwind.png" },
  { name: "Git", image: "/images/logos/git.png" },
];

export default function TechStack() {
  return (
    <section className={styles.stack} aria-labelledby="tech-stack-title">
      <h2 id="tech-stack-title" className={styles.title}><span aria-hidden="true" />Technologies I work with</h2>
      <ul className={styles.list}>
        {technologies.map((tech) => (
          <li className={styles.item} key={tech.name}>
            {tech.image ? <Image src={tech.image} width={30} height={30} alt="" /> :
              <span className={`${styles.mark} ${styles[tech.style!]}`} aria-hidden="true">{tech.mark}</span>}
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
