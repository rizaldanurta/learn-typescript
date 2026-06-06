"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.scss";

type NavbarProps = {
  nav: {
    brand: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    tools: string;
    contact: string;
  };
  activeSection: SectionId;
  onActiveSectionChange: (section: SectionId) => void;
};

const links = [
  ["about", "about"],
  ["skills", "skills"],
  ["experience", "experience"],
  ["projects", "projects"],
  ["tools", "tools"],
  ["contact", "contact"],
] as const;

type SectionId = (typeof links)[number][1] | "home";

export default function Navbar({
  nav,
  activeSection,
  onActiveSectionChange,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSectionRef = useRef<SectionId>(activeSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sectionIds: SectionId[] = ["home", ...links.map(([, href]) => href)];
    let animationFrame = 0;

    const updateActiveSection = () => {
      const scrollElement = document.scrollingElement ?? document.documentElement;
      const pageHeight = Math.max(
        scrollElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );
      const scrollTop = scrollElement.scrollTop || window.scrollY;
      const isAtPageBottom =
        Math.ceil(scrollTop + window.innerHeight) >= pageHeight - 8;
      const viewportLine = window.innerHeight * 0.5;
      let currentSection: SectionId = "home";

      if (isAtPageBottom) {
        if (activeSectionRef.current !== "contact") {
          activeSectionRef.current = "contact";
          onActiveSectionChange("contact");
        }
        return;
      }

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportLine && rect.bottom >= viewportLine) {
          currentSection = id;
        }
      });

      if (currentSection === "home") {
        sectionIds.forEach((id) => {
          const section = document.getElementById(id);

          if (!section) {
            return;
          }

          if (section.getBoundingClientRect().top <= viewportLine) {
            currentSection = id;
          }
        });
      }

      if (activeSectionRef.current !== currentSection) {
        activeSectionRef.current = currentSection;
        onActiveSectionChange(currentSection);
      }
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [onActiveSectionChange]);

  return (
    <header className={styles.siteHeader}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <a
          href="#home"
          className={styles.logo}
          onClick={() => setIsOpen(false)}
        >
          {nav.brand}
        </a>

        <button
          type="button"
          className={styles.navToggle}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div
          className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
        >
          {links.map(([key, href]) => (
            <a
              key={key}
              href={`#${href}`}
              className={activeSection === href ? styles.activeNavLink : ""}
              aria-current={activeSection === href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {nav[key]}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
