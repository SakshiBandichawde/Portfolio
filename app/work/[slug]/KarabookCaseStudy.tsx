import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, Check, ClipboardCheck, CreditCard, ExternalLink,
  FileSearch, Github, Lightbulb, MapPin, MonitorSmartphone,
  Quote, Search, ServerCog, ShieldCheck, UsersRound,
} from "lucide-react";
import type { Project } from "../../data/projects";
import styles from "./KarabookCaseStudy.module.css";

const responsibilities = [
  "Full-stack development (frontend + backend)",
  "Deployment and server configuration",
  "UI/UX collaboration and implementation",
  "Environment management",
  "Developer testing and debugging",
  "Coordination with the project manager",
];

const challenges = [
  {
    title: "Multi-role authentication",
    description: "Implementing OTP login for travellers and owners with a shared account model, while keeping role-based access clear.",
    icon: UsersRound,
  },
  {
    title: "Booking and payment flow",
    description: "Integrating Razorpay, backend verification, and booking states, including cancellations and refunds.",
    icon: CreditCard,
  },
  {
    title: "Deployment and environment setup",
    description: "Managing multiple applications, domains, environment variables and production updates.",
    icon: ServerCog,
  },
  {
    title: "Working with limited documentation",
    description: "Clarifying requirements and making implementation decisions with the designer and project manager during development.",
    icon: FileSearch,
  },
];

const outcomes = [
  {
    title: "Delivered a complete, multi-role platform",
    description: "Connected the public website, owner dashboard and admin dashboard into one application workflow.",
    icon: ShieldCheck,
  },
  {
    title: "Deployed and managed the live environment",
    description: "Handled configuration, production updates and troubleshooting across the applications.",
    icon: ServerCog,
  },
  {
    title: "Strengthened end-to-end product development skills",
    description: "Gained hands-on experience with payments, authentication, API integration and multi-role systems.",
    icon: ClipboardCheck,
  },
];

const technologyImages: Record<string, string> = {
  React: "/images/logos/react.png",
  "Node.js": "/images/logos/nodejs.png",
  Express: "/images/logos/express.png",
  MongoDB: "/images/logos/mongodb.png",
  "Tailwind CSS": "/images/logos/tailwind.png",
};

function SectionHeading({ number, id, children }: { number: string; id: string; children: string }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.number} aria-hidden="true">{number}</span>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function ProjectActions({ liveUrl }: { liveUrl?: string }) {
  return (
    <div className={styles.actions}>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <ExternalLink size={15} aria-hidden="true" /> View live website
        </a>
      )}
      <button type="button" className="btn btn-light" disabled title="GitHub repository link has not been added yet">
        <Github size={16} aria-hidden="true" /> GitHub
      </button>
    </div>
  );
}

export default function KarabookCaseStudy({ project }: { project: Project }) {
  return (
    <main className={styles.main}>
      <div className="page-container">
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className="eyebrow"><span aria-hidden="true" /> Full-stack development &middot; Freelance project</span>
            <h1>KaraBook</h1>
            <p className={styles.lead}>A multi-role property discovery and booking platform for villas, resorts, homestays, tents and apartments around Pune.</p>
            <p className={styles.summary}>KaraBook helps travellers discover and book unique stays, while giving property owners and administrators full control through dedicated dashboards.</p>
            <ProjectActions liveUrl={project.liveUrl} />
          </div>
          {project.image && (
            <figure className={styles.heroVisual}>
              <Image
                src={project.image}
                alt="KaraBook property discovery website displayed on a laptop and mobile phone"
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
              <p>KaraBook connects travellers with unique stays and helps property owners manage their listings, bookings and operations. The platform supports three user types: travellers, owners and administrators, with separate dashboards and role-based access.</p>
              <ul className={styles.features}>
                <li><UsersRound size={18} aria-hidden="true" /><span>Multi-role access<small>Traveller / Owner / Admin</small></span></li>
                <li><Search size={18} aria-hidden="true" /><span>Property discovery<small>and booking</small></span></li>
                <li><CreditCard size={18} aria-hidden="true" /><span>Availability<small>and payments</small></span></li>
              </ul>
            </div>
          </div>
          <aside className={styles.goal} aria-labelledby="goal-title">
            <span className={styles.iconCircle} aria-hidden="true"><MapPin size={20} /></span>
            <div>
              <h3 id="goal-title">The Goal</h3>
              <p>Build a scalable, full-featured platform that is easy to use, secure and reliable, with a seamless booking experience for travellers and practical management tools for owners and admins.</p>
            </div>
          </aside>
        </section>

        <div className={styles.middle}>
          <section className={styles.role} aria-labelledby="role-title">
            <SectionHeading number="02" id="role-title">My Role &amp; Responsibilities</SectionHeading>
            <div className={styles.sectionCopy}>
              <p>I worked as the sole developer on this project, handling development and deployment end to end. I collaborated with the UI designer and project manager, and performed developer testing before final API testing by the QA team.</p>
              <ul className={styles.responsibilities}>
                {responsibilities.map(item => (
                  <li key={item}><span className={styles.check} aria-hidden="true"><Check size={13} /></span>{item}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className={styles.challenges} aria-labelledby="challenges-title">
            <SectionHeading number="03" id="challenges-title">Key Challenges</SectionHeading>
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
          <div className={styles.sectionCopy}>
            <p>The technologies used to build the platform and connect its user-facing and backend workflows.</p>
            <ul className={styles.stack}>
              {project.stack.map(technology => (
                <li key={technology}>
                  {technologyImages[technology] ? (
                    <Image src={technologyImages[technology]} alt="" width={25} height={25} />
                  ) : (
                    <span className={styles.nextMark} aria-hidden="true">N</span>
                  )}
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="page-container">
        <section className={styles.outcomes} aria-labelledby="outcomes-title">
          <div>
            <SectionHeading number="05" id="outcomes-title">Outcome &amp; Learnings</SectionHeading>
            <ul className={styles.detailList}>
              {outcomes.map(({ title, description, icon: Icon }) => (
                <li key={title}>
                  <span className={styles.iconCircle} aria-hidden="true"><Icon size={18} /></span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <aside className={styles.learning} aria-label="Personal reflection">
            <Quote size={23} className={styles.quoteIcon} aria-hidden="true" />
            <blockquote>This project helped me strengthen my full-stack skills, work closely with cross-functional teams, and understand the complete lifecycle of a production product, from design and development to deployment and maintenance.</blockquote>
            <div className={styles.takeaway}>
              <Lightbulb size={21} aria-hidden="true" />
              <div><h3>Key takeaway</h3><p>Better planning, clear documentation and early testing can save a lot of time during deployment and integration.</p></div>
            </div>
          </aside>
        </section>
      </div>

      <section className={styles.ctaBand} aria-labelledby="live-project-title">
        <div className={`page-container ${styles.cta}`}>
          <span className={styles.ctaIcon} aria-hidden="true"><MonitorSmartphone size={25} /></span>
          <div className={styles.ctaCopy}>
            <h2 id="live-project-title">Want to explore the live product?</h2>
            <p>Visit KaraBook to explore the property discovery and booking experience.</p>
          </div>
          <ProjectActions liveUrl={project.liveUrl} />
        </div>
      </section>
      <div className="page-container">
        <Link href="/#work" className={styles.back}><ArrowLeft size={15} aria-hidden="true" /> Back to all work</Link>
      </div>
    </main>
  );
}
