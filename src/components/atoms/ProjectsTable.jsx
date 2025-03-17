import { useEffect, useState } from "react";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectsTable() {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  function getProjects() {
    fetch("src/projects/projects.json")
      .then(response => response.json())
      .then(data => setProjectsInfo(data.projects));
  }

  useEffect(getProjects, []);

  return (
    <div className="grid grid-cols-[1fr_auto] gap-8">
      <div className="flex flex-col gap-4">
        {projectsInfo.map((project) => (
          <div
            key={project.key}
            className="border-[1px] font-primary border-slate-900 p-3 cursor-pointer hover:text-white focus-within:text-white hover:bg-slate-900"
            onMouseEnter={() => setHoveredProject(project)}
            onTouchStart={() => setHoveredProject(project)}
          >
            <h4 className="text-2xl">{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <div className="sticky top-4 h-min">
        {hoveredProject && (
          <div className="flex flex-col gap-4">
            <img
              src={`src/projects/${hoveredProject.image}`}
              alt={hoveredProject.alt}
              className="w-[400px] h-auto object-contain  border-slate-900 border-2 shadow-2xl"
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


  //   return (
  //     <div className="grid grid-cols-1 gap-10 my-2 font-secondary md:flex md:flex-wrap md:items-center md:justify-start md:gap-[30px]">
  //       {projectsInfo.map(function (project) {
  //         return (
  //           <div
  //             key={project.key}
  //             className="inline-block relative max-w-[650px]"
  //           >
  //             <img
  //               src={`src/projects/${project.image}`}
  //               alt={project.alt}
  //               className="h-auto w-[70vw] object-contain border-[1px] border-slate-900 md:h-[300px] md:w-auto"
  //             />
  //             <div
  //               className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 pt-3
  //                         text-center transition-opacity duration-500 opacity-0 hover:opacity-100 focus-within:opacity-100
  //                         bg-white bg-opacity-90 border-[1px] border-slate-900"
  //             >
  //               <h4 className="text-2xl pb-4">{project.title}</h4>
  //               <br/>
  //               <p className="px-3">{project.description}</p>
  //               <br/>
  //               <a className="p-2 mx-4" target="_blank" href={project.link}>
  //                 <FontAwesomeIcon className="p-2 mx-4 text-4xl focus-within:text-blue-300 md: hover:text-blue-300 md:focus-within:text-white" icon={faSquareGithub} />
  //               </a>
  //               <a className=" focus-within:text-blue-300 md: hover:text-blue-300 md:focus-within:text-white" href="https://2025-sql-seagulls-blog.dev.io-academy.uk/">View project here</a>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }
    