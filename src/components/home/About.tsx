import styles from "./Home.module.scss";

type AboutProps = {
  content: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
};

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className={`${styles.section} ${styles.sectionLight}`}>
      <div className={styles.sectionGrid}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <div className={styles.aboutHeroIcon} aria-hidden>
            <svg viewBox="-10 0 380 230">
              <g className={styles.aboutCircleMark}>
                <circle cx="54" cy="126" r="46" />
                <circle cx="180" cy="98" r="46" />
                <circle cx="306" cy="124" r="46" />
              </g>
              <g className={styles.aboutBusinessMark}>
                <path d="M34 144h40" />
                <path d="M40 134l12-13 10 8 16-21" />
                <path d="M72 108h9v9" />
              </g>
              <g className={styles.aboutDesignMark}>
                <rect x="162" y="70" width="36" height="46" rx="8" />
                <path d="M172 86h16M172 98h20M172 110h12" />
                <circle cx="198" cy="116" r="10" />
                <path d="M194 116l4 4 8-12" />
              </g>
              <g className={styles.aboutCodeMark}>
                <path d="M294 112l-14 12 14 12" />
                <path d="M318 112l14 12-14 12" />
                <path d="M314 104l-14 40" />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.textStack}>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
