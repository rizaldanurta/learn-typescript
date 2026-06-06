import styles from "./Home.module.scss";

type ProjectsProps = {
  content: {
    eyebrow: string;
    title: string;
    summary: string;
    items: readonly { title: string; description: string }[];
  };
};

export default function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <p>{content.summary}</p>
        </div>

        <div className={styles.projectGrid}>
          {content.items.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectVisual} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
