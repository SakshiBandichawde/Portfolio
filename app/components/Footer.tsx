import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page-container ${styles.content}`}>
        <p>&copy; {new Date().getFullYear()} Sakshi Bandichawde</p>
        <p>Built with passion <span aria-hidden="true">&middot;</span> React <span aria-hidden="true">&middot;</span> Next.js <span aria-hidden="true">&middot;</span> Tailwind CSS</p>
      </div>
    </footer>
  );
}
