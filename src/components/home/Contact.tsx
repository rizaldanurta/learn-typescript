import styles from "./Home.module.scss";

type ContactProps = {
  content: {
    eyebrow: string;
    title: string;
    summary: string;
  };
};

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className={`${styles.section} ${styles.contact}`}>
      <div className={styles.contactGrid}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>

        <div className={styles.contactPanel}>
          <p>{content.summary}</p>
          <div className={styles.contactLinks}>
            <a href="mailto:hello@example.com">hello@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              github.com/rizal
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              linkedin.com/in/rizal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
