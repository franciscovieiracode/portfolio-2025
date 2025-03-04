import styles from './ProjectCardStyles.module.css'

function ProjectCard({index, project}) {
  return (
    <a className={styles.projectCard}
      href={project.link}
      target="_blank"
    >
      <img className="hover" src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </a>
  );
}

export default ProjectCard;
