import styles from "./Home.module.scss";

type ToolsProps = {
  content: {
    eyebrow: string;
    title: string;
    summary: string;
    groups: readonly { title: string; items: readonly string[] }[];
  };
};

export default function Tools({ content }: ToolsProps) {
  return (
    <section id="tools" className={`${styles.section} ${styles.tools}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <p>{content.summary}</p>
        </div>

        <div className={styles.toolGrid}>
          {content.groups.map((group) => (
            <article key={group.title} className={styles.toolCard}>
              <h3>{group.title}</h3>
              <div className={styles.toolList}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
