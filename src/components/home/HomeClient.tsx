"use client";

import { useState } from "react";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Tools from "@/components/home/Tools";
import { content, languageOptions, Language, ThemeMode } from "./content";
import styles from "./Home.module.scss";

export default function HomeClient() {
  const [language, setLanguage] = useState<Language>("id");
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const copy = content[language];

  return (
    <main className={styles.page} data-theme={theme}>
      <button
        type="button"
        className={styles.preferenceButton}
        aria-label={copy.controls.title}
        aria-haspopup="dialog"
        aria-expanded={isPreferencesOpen}
        onClick={() => setIsPreferencesOpen(true)}
      >
        <span>R</span>
      </button>

      {isPreferencesOpen ? (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onClick={() => setIsPreferencesOpen(false)}
        >
          <div
            className={styles.preferenceModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="preferences-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2 id="preferences-title">{copy.controls.title}</h2>
              <button
                type="button"
                className={styles.modalClose}
                aria-label="Close preferences"
                onClick={() => setIsPreferencesOpen(false)}
              >
                x
              </button>
            </div>

            <div className={styles.preferenceGroup}>
              <span>{copy.controls.theme}</span>
              <div className={styles.segmented}>
                <button
                  type="button"
                  className={theme === "dark" ? styles.activeSegment : ""}
                  onClick={() => setTheme("dark")}
                >
                  {copy.controls.dark}
                </button>
                <button
                  type="button"
                  className={theme === "light" ? styles.activeSegment : ""}
                  onClick={() => setTheme("light")}
                >
                  {copy.controls.light}
                </button>
              </div>
            </div>

            <div className={styles.preferenceGroup}>
              <span>{copy.controls.language}</span>
              <div className={styles.segmented}>
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={
                      language === option.value ? styles.activeSegment : ""
                    }
                    onClick={() => setLanguage(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <section id="home" className={styles.hero}>
        <nav className={styles.navbar}>
          <a href="#home" className={styles.logo}>
            {copy.nav.brand}
          </a>
          <div className={styles.navLinks}>
            <a href="#about">{copy.nav.about}</a>
            <a href="#skills">{copy.nav.skills}</a>
            <a href="#experience">{copy.nav.experience}</a>
            <a href="#projects">{copy.nav.projects}</a>
            <a href="#tools">{copy.nav.tools}</a>
            <a href="#contact">{copy.nav.contact}</a>
          </div>
        </nav>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}</h1>
            <p className={styles.lead}>{copy.hero.lead}</p>
            <div className={styles.heroActions}>
              <a href="#projects" className={styles.primaryButton}>
                {copy.hero.primary}
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                {copy.hero.secondary}
              </a>
            </div>
          </div>

          <div className={styles.photoStage} aria-label="Area foto profil">
            <div className={styles.photoFrame}>
              <div className={styles.photoPlaceholder}>
                <span>{copy.hero.photo}</span>
              </div>
            </div>
            <div className={styles.heroBadge}>
              <span>5+</span>
              <p>{copy.hero.badge}</p>
            </div>
          </div>
        </div>
      </section>

      <About content={copy.about} />
      <Skills content={copy.skills} />
      <Experience content={copy.experience} />
      <Projects content={copy.projects} />
      <Tools content={copy.tools} />
      <Contact content={copy.contact} />
    </main>
  );
}
