import styles from "./Home.module.scss";

type ExperienceProps = {
  content: {
    eyebrow: string;
    title: string;
    summary: string;
    items: readonly {
      period: string;
      role: string;
      description: string;
      details?: readonly string[];
    }[];
  };
};

export default function Experience({ content }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`${styles.section} ${styles.experience}`}
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <p>{content.summary}</p>
        </div>

        <div className={styles.timeline}>
          {content.items.map((item) => (
            <article key={item.role} className={styles.timelineItem}>
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
                {item.details ? (
                  <ul className={styles.timelineDetails}>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
