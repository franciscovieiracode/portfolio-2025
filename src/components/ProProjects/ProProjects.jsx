import styles from "./ProProjectsStyles.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectsInfo from '../../proProjects.json'

function ProProjects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Professional Projects</h1>
      <div className={styles.projectsContainer}>
        {ProjectsInfo.map((project, index) => (
          <ProjectCard key={index} project = {project}/>
        ))}
      </div>
    </section>
  );
}

export default ProProjects;
