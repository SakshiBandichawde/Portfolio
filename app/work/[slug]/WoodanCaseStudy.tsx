import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, CalendarClock, Check, ClipboardList, Code2, CreditCard,
  ExternalLink, Github, ImageDown, ListChecks, PackageCheck,
  Search, ServerCog, ShoppingBag, UsersRound,
} from "lucide-react";
import type { Project } from "../../data/projects";
import styles from "./CaseStudy.module.css";
import woodan from "./WoodanCaseStudy.module.css";

const contributions = [
  { title: "Storefront Development", description: "Built the customer-facing website for product discovery and online shopping.", icon: ShoppingBag },
  { title: "Admin Dashboard", description: "Developed administrative functionality for product and order management.", icon: ClipboardList },
  { title: "E-commerce Workflow", description: "Worked across shopping, checkout, payment integration, and order processing.", icon: CreditCard },
  { title: "Product Catalogue", description: "Uploaded and organised product information and images for the online store.", icon: PackageCheck },
  { title: "Competitor Analysis", description: "Collaborated with the team to analyse gifting websites and evaluate product presentation, category structure, and shopping experiences.", icon: Search },
  { title: "Deployment", description: "Handled the technical setup and deployment of the application.", icon: ServerCog },
  { title: "Basic SEO & Analytics Setup", description: "Connected Google Analytics, Google Search Console and Google Tag Manager as part of the website setup.", icon: Search },
];

const challenges = [
  { title: "Balancing delivery requirements", description: "Balanced development, product uploads, and deployment within a tight timeline.", icon: CalendarClock },
  { title: "Coordinating image preparation", description: "Coordinated with a team member to convert product images into WebP format, streamlining image preparation.", icon: ImageDown },
  { title: "Working across parallel tasks", description: "Managed development alongside catalogue setup rather than treating them as separate phases.", icon: ListChecks },
];

const learnings = [
  { title: "E-commerce lifecycle", description: "Understood how product selection, checkout, order processing, and order tracking connect.", icon: ShoppingBag },
  { title: "Deadline management", description: "Learned to balance development with content preparation and delivery requirements.", icon: CalendarClock },
  { title: "Image optimisation", description: "Gained practical experience preparing product assets in WebP format.", icon: ImageDown },
  { title: "Competitor research", description: "Learned how competitor analysis can inform product presentation and shopping experience decisions.", icon: Search },
  { title: "Team collaboration", description: "Coordinated supporting tasks to keep development moving towards delivery.", icon: UsersRound },
];

const stackGroups = [
  { label: "Frontend", technologies: ["Next.js", "React"], icon: Code2 },
  { label: "Backend", technologies: ["Node.js"], icon: ServerCog },
  { label: "Database", technologies: ["MongoDB"], icon: ClipboardList },
  { label: "Payments", technologies: ["Razorpay"], icon: CreditCard },
  { label: "Other", technologies: ["Admin Dashboard", "Git/GitHub", "Production Deployment"], icon: Check },
];

function SectionHeading({ number, id, children }: { number: string; id: string; children: string }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.number} aria-hidden="true">{number}</span>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className={styles.actions}>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <ExternalLink size={15} aria-hidden="true" /> View live website
        </a>
      )}
      <a href="https://github.com/SakshiBandichawde" target="_blank" rel="noopener noreferrer" className="btn btn-light" title="View Sakshi's public GitHub profile and contribution activity">
        <Github size={16} aria-hidden="true" /> GitHub activity
      </a>
    </div>
  );
}

export default function WoodanCaseStudy({ project }: { project: Project }) {
  return (
    <main className={styles.main}>
      <div className="page-container">
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className="eyebrow"><span aria-hidden="true" /> E-commerce platform &middot; Freelance project</span>
            <h1>Woodan</h1>
            <p className={styles.lead}>A custom e-commerce website for wooden gifts, home decor, personalised products, and corporate gifting.</p>
            <p className={styles.summary}>End-to-end application development and deployment, from the customer-facing storefront to the admin dashboard.</p>
            <ProjectActions project={project} />
            <p className={styles.repositoryNote}>Private client repository. My GitHub profile shows anonymised contribution activity across projects, not project-specific commits.</p>
          </div>
          {project.image && (
            <figure className={styles.heroVisual}>
              <Image
                src={project.image}
                alt="Woodan storefront on a laptop and mobile phone, alongside its product and order management dashboard"
                width={1672}
                height={941}
                sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1248px) 54vw, 650px"
                className={styles.mockup}
                preload
              />
            </figure>
          )}
        </header>

        <section className={styles.overview} aria-labelledby="overview-title">
          <div>
            <SectionHeading number="01" id="overview-title">Project Overview</SectionHeading>
            <div className={styles.sectionCopy}>
              <p>Developed and deployed an e-commerce platform with a customer-facing storefront and an admin dashboard for managing products and orders.</p>
            </div>
          </div>
          <aside className={woodan.projectDetails} aria-label="Project details">
            <dl className={woodan.facts}>
              <div><dt><CalendarClock size={17} aria-hidden="true" /> Timeline</dt><dd>1.5 months</dd></div>
              <div><dt><Code2 size={17} aria-hidden="true" /> Role</dt><dd>End-to-end Application Development &amp; Deployment</dd></div>
            </dl>
          </aside>
        </section>

        <div className={styles.middle}>
          <section className={styles.role} aria-labelledby="contributions-title">
            <SectionHeading number="02" id="contributions-title">Key Contributions</SectionHeading>
            <ul className={styles.detailList}>
              {contributions.map(({ title, description, icon: Icon }) => (
                <li key={title}>
                  <span className={styles.iconCircle} aria-hidden="true"><Icon size={18} /></span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.challenges} aria-labelledby="challenge-title">
            <SectionHeading number="03" id="challenge-title">Key Challenge</SectionHeading>
            <p className={woodan.challengeLead}>Delivering the complete platform within 1.5 months.</p>
            <ul className={styles.detailList}>
              {challenges.map(({ title, description, icon: Icon }) => (
                <li key={title}>
                  <span className={styles.iconCircle} aria-hidden="true"><Icon size={18} /></span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className={styles.stackBand} aria-labelledby="stack-title">
        <div className="page-container">
          <SectionHeading number="04" id="stack-title">Tech Stack</SectionHeading>
          <dl className={woodan.technologyGroups}>
            {stackGroups.map(({ label, technologies, icon: Icon }) => (
              <div key={label}>
                <dt><Icon size={17} aria-hidden="true" />{label}</dt>
                <dd><ul>{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={woodan.learnings} aria-labelledby="learnings-title">
        <div className="page-container">
          <SectionHeading number="05" id="learnings-title">What I Learned</SectionHeading>
          <ul className={`${styles.detailList} ${woodan.learningList}`}>
            {learnings.map(({ title, description, icon: Icon }) => (
              <li key={title}>
                <span className={styles.iconCircle} aria-hidden="true"><Icon size={18} /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.ctaBand} aria-labelledby="outcome-title">
        <div className={`page-container ${woodan.outcome}`}>
          <div>
            <SectionHeading number="06" id="outcome-title">Outcome</SectionHeading>
            <p className={woodan.outcomeCopy}>Delivered the e-commerce platform within a <strong>1.5-month timeline</strong>, combining application development, product catalogue setup, team coordination, and deployment.</p>
          </div>
          <ProjectActions project={project} />
        </div>
      </section>
      <div className="page-container">
        <Link href="/#work" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> Back to all work</Link>
      </div>
    </main>
  );
}
