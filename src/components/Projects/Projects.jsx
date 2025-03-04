import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsInfo from '../../projectsInfo.json'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Personal Projects</h1>
      <div className={styles.projectsContainer}>
        {ProjectsInfo.map((project, index) => (
          <ProjectCard key={index} project = {project}/>
        ))}
      </div>
    </section>
  );
}

export default Projects;
