import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-title">
      <div className="page-container">
        <header className={styles.intro}>
          <span className="eyebrow"><span aria-hidden="true" /> Selected Work</span>
          <h2 id="work-title" className="display-title">Projects I&apos;ve built<br />from idea to <span className="text-accent">interface.</span></h2>
          <p className="section-description">
            A selection of websites and web applications I&apos;ve worked on, from professional
            work at Advolve to freelance projects. Each project brings ideas to life
            through thoughtful interfaces and clean code.
          </p>
        </header>

        <div className={styles.agencyGrid}>
          {projects.filter(p => p.group === "agency").map(project => (
            <article id={project.slug} key={project.slug} className={styles.textCard} aria-labelledby={`${project.slug}-title`}>
              <span className={styles.projectEyebrow}><span aria-hidden="true" /> Professional experience &middot; Advolve</span>
              <h3 id={`${project.slug}-title`}>{project.title}</h3>
              <p className={styles.meta}>{project.category}<span aria-hidden="true">&middot;</span>{project.source}</p>
              <p className={styles.description}>{project.description}</p>
              <ProjectStack stack={project.stack} />
              <ProjectActions project={project} />
            </article>
          ))}
        </div>

        <div className={styles.featured}>
          {projects.filter(p => p.group === "featured").map((project, index) => (
            <article id={project.slug} key={project.slug} className={`${styles.featuredCard} ${index % 2 ? styles.reversed : ""}`} aria-labelledby={`${project.slug}-title`}>
              <div className={styles.copy}>
                <span className={styles.projectEyebrow}><span aria-hidden="true" /> Freelance project</span>
                <h3 id={`${project.slug}-title`}>{project.title}</h3>
                <p className={styles.meta}>{project.category}<span aria-hidden="true">&middot;</span>{project.source}</p>
                <div className={styles.contribution}>
                  <h4>My contribution</h4>
                  <ul>{project.contribution?.map(item => <li key={item}>{item}</li>)}</ul>
                </div>
                <ProjectStack stack={project.stack} />
                <ProjectActions project={project} />
              </div>
              <div className={styles.media}>
                <Image src={project.image!} alt={`${project.title} website on desktop and mobile`} width={1672} height={941}
                  sizes="(max-width: 760px) 85vw, 530px" className={styles.mockup} />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.otherProjects}>
          <h3 className={styles.otherTitle}><span aria-hidden="true" />Other Projects</h3>
          <div className={styles.otherGrid}>
            {projects.filter(p => p.group === "other").map(project => (
              <article id={project.slug} key={project.slug} className={styles.textCard} aria-labelledby={`${project.slug}-title`}>
                <div className={styles.smallHeader}>
                  <h4 id={`${project.slug}-title`}>{project.title}</h4>
                  <span className={styles.clientBadge}>Client project &middot; WordPress</span>
                </div>
                <p className={styles.meta}>{project.category}<span aria-hidden="true">&middot;</span>{project.source}</p>
                <p className={styles.description}>{project.description}</p>
                <ProjectStack stack={project.stack} />
                <ProjectActions project={project} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectStack({ stack }: { stack: string[] }) {
  return <div className={styles.stack}><h4>Tech stack</h4><ul>{stack.map(tech => <li key={tech}>{tech}</li>)}</ul></div>;
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className={styles.actions}>
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live project <ArrowUpRight size={13} aria-hidden="true" /></a>}
      <Link href={`/work/${project.slug}`} className="btn btn-light">Case study <ArrowUpRight size={13} aria-hidden="true" /></Link>
    </div>
  );
}
