"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import styles from "./Header.module.css";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

type ThemeViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
  skipTransition: () => void;
};

type ThemeDocument = Document & {
  startViewTransition?: (update: () => void) => ThemeViewTransition;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const themeTransition = useRef<ThemeViewTransition | null>(null);

  useEffect(() => () => themeTransition.current?.skipTransition(), []);

  useEffect(() => {
    let savedTheme: string | null = null;
    try {
      savedTheme = localStorage.getItem("portfolio-theme");
    } catch {
      // Browser storage is optional.
    }
    const dark = savedTheme === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const frame = requestAnimationFrame(() => setIsDark(dark));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  async function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    if (root.dataset.themeAnim === "1") return;

    const nextIsDark = root.dataset.theme !== "dark";
    const theme = nextIsDark ? "dark" : "light";
    function applyTheme() {
      setIsDark(nextIsDark);
      root.dataset.theme = theme;
      try {
        localStorage.setItem("portfolio-theme", theme);
      } catch {
        // The current theme still works without persistence.
      }
    }

    const themeDocument = document as ThemeDocument;
    if (typeof themeDocument.startViewTransition !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme();
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    root.style.setProperty("--theme-cx", `${x}px`);
    root.style.setProperty("--theme-cy", `${y}px`);
    root.style.setProperty("--theme-r", `${radius}px`);
    root.dataset.themeAnim = "1";

    try {
      // Capture the updated icon and theme together in the new view.
      const transition = themeDocument.startViewTransition(() => flushSync(applyTheme));
      themeTransition.current = transition;
      void transition.ready.catch(() => {});
      await transition.finished;
    } catch {
      applyTheme();
    } finally {
      themeTransition.current = null;
      delete root.dataset.themeAnim;
      root.style.removeProperty("--theme-cx");
      root.style.removeProperty("--theme-cy");
      root.style.removeProperty("--theme-r");
    }
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Sakshi portfolio home">
        SB<span>.</span>
      </Link>

      <nav className={styles.navigation} aria-label="Main navigation">
        {navigation.map(({ label, href }) => (
          <a key={href} href={href} className={styles.link}>{label}</a>
        ))}
      </nav>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.iconButton}
          onClick={toggleTheme}
          aria-pressed={isDark}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          <span className={styles.themeIcon} data-dark={isDark} aria-hidden="true">
            <Sun size={18} strokeWidth={1.8} className={styles.sun} />
            <Moon size={18} strokeWidth={1.8} className={styles.moon} />
          </span>
        </button>
        <button
          type="button"
          className={`${styles.iconButton} ${styles.menuButton}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          title={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={styles.mobileNavigation}
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        {navigation.map(({ label, href }) => (
          <a key={href} href={href} className={styles.link} onClick={() => setIsMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}


