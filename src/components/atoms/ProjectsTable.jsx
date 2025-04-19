import { useEffect, useState } from "react";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectsTable() {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  function getProjects() {
    fetch("src/projects/projects.json")
      .then(response => response.json())
      .then(data => setProjectsInfo(data.projects));
  }

  useEffect(getProjects, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setHoveredProject(project);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
      <div className="flex flex-col gap-4 h-auto">
        {projectsInfo.map((project) => (
          <div
            key={project.key}
            className={`border-[1px] font-primary border-slate-900 p-3 cursor-pointer hover:text-white focus-within:text-white hover:bg-slate-900 active:bg-slate-900 active:text-white transition-colors duration-200 ${selectedProject === project ? 'bg-slate-900 text-white' : ''}`}
            onMouseEnter={() => setHoveredProject(project)}
            onTouchStart={() => handleProjectClick(project)}
            onClick={() => handleProjectClick(project)}
          >
            <h4 className="text-2xl">{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <div className="sticky lg:top-4 bottom-0 lg:h-auto lg:w-[500px] bg-white border-[1px] lg:border-0 lg:bg-transparent z-10">
        {hoveredProject && (
          <div className="flex flex-col items-center justify-center gap-4 p-4 lg:p-0">
            <img
              src={`src/projects/${hoveredProject.image}`}
              alt={hoveredProject.alt}
              className="w-[300px] lg:w-[400px] h-auto object-contain border-slate-900 border-2 shadow-2xl"
            />
            <div className="flex items-center justify-center gap-4">
              <a
                className="p-2 text-4xl hover:text-blue-700 focus-within:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                href={hoveredProject.link}
              >
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a
                className="hover:text-blue-700 focus-within:text-blue-700 font-secondary"
                href={hoveredProject.projectLink}
              >
                View project here
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}