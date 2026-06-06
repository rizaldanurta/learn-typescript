import styles from "./Home.module.scss";
import type { CSSProperties } from "react";

type ProjectPreviewStyle = CSSProperties & {
  "--project-image"?: string;
};

type ProjectsProps = {
  isActive: boolean;
  content: {
    eyebrow: string;
    title: string;
    summary: string;
    linkLabel: string;
    items: readonly {
      title: string;
      description: string;
      href?: string;
      image?: string;
    }[];
  };
};

export default function Projects({ content, isActive }: ProjectsProps) {
  const projectLoop = [...content.items, ...content.items];

  return (
    <section
      id="projects"
      className={`${styles.section} ${styles.projects}`}
      data-marquee-active={isActive ? "true" : undefined}
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <p>{content.summary}</p>
        </div>

        <div className={styles.projectGrid}>
          <div className={styles.projectTrack}>
            {projectLoop.map((project, index) => {
              const isDuplicate = index >= content.items.length;
              const previewStyle: ProjectPreviewStyle | undefined = project.image
                ? { "--project-image": `url(${project.image})` }
                : undefined;

              return (
                <article
                  key={`${project.title}-${index}`}
                  className={styles.projectCard}
                  tabIndex={isDuplicate ? -1 : 0}
                  aria-hidden={isDuplicate}
                  aria-label={`${project.title}: ${project.description}`}
                >
                  <div className={styles.projectCardInner}>
                    <div className={`${styles.projectFace} ${styles.projectFront}`}>
                      <div
                        className={styles.projectPreview}
                        aria-hidden
                        data-has-image={project.image ? "true" : undefined}
                        style={previewStyle}
                      >
                        <span />
                      </div>
                      <h3 title={project.title}>{project.title}</h3>
                    </div>
                    <div className={`${styles.projectFace} ${styles.projectBack}`}>
                      <p>{project.description}</p>
                      <a href={project.href ?? "#contact"}>{content.linkLabel}</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
