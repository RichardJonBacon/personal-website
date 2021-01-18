import React from 'react';
import Project from './project';
import styles from './projects.module.css';

const Projects = ({ id, projects }) => {
  return (
    <div className={styles.content}>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};

export default Projects;
