import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { projects } from "../../data/projects";
import styles from "./page.module.css";
import KarabookCaseStudy from "./KarabookCaseStudy";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  const title = slug === "karabook" ? "KaraBook Case Study | Sakshi Bandichawde" : project ? `${project.title} | Sakshi Bandichawde` : "Project not found";
  return { title, description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  if (project.slug === "karabook") {
    return (
      <>
        <Header />
        <KarabookCaseStudy project={project} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={`page-container ${styles.main}`}>
        <Link href="/#work" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> Selected work</Link>
        <span className="eyebrow"><span aria-hidden="true" /> {project.group === "agency" ? "Professional experience" : "Project case study"}</span>
        <h1>{project.title}</h1>
        <p className={styles.meta}>{project.category} &middot; {project.source}</p>
        {project.image && <Image src={project.image} alt={`${project.title} project mockup`} width={1672} height={941} sizes="(max-width: 760px) 90vw, 900px" className={styles.image} priority />}
        <div className={styles.details}>
          <section><h2>Overview</h2><p>{project.description}</p></section>
          {project.contribution && <section><h2>My contribution</h2><ul>{project.contribution.map(item => <li key={item}>{item}</li>)}</ul></section>}
          {project.technicalHighlights && <section><h2>Technical highlights</h2><p>{project.technicalHighlights}</p></section>}
          <section><h2>Tech stack</h2><ul className={styles.stack}>{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul></section>
        </div>
        <div className={styles.actions}>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live project <ArrowUpRight size={14} aria-hidden="true" /></a>}
          <Link href="/#work" className="btn btn-light"><ArrowLeft size={14} aria-hidden="true" /> Back to all work</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
