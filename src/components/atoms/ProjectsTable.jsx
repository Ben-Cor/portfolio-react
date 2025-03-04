import { useEffect, useState } from "react";
import {faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectsTable (){

    const [projectsInfo, setProjectsInfo] = useState([]);

    function getProjects (){
        fetch("src/projects/projects.json")
            .then(response => response.json())
            .then(data => {setProjectsInfo(data.projects)})
    }

    useEffect(getProjects, []);
    
    return (
        <div className="flex flex-wrap items-center justify-start gap-[5%] my-2 md:gap-20">
          {projectsInfo.map(function (project) {
            return (
              <div
                key={project.key}
                className="inline-block relative max-w-[350px]"
              >
                <img
                  src={`src/projects/${project.image}`}
                  alt={project.alt}
                  className="w-full h-auto"
                />
                <div
                  className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 pt-8
                            text-center transition-opacity duration-500 opacity-0 hover:opacity-100 
                            bg-amber-50 bg-opacity-90"
                >
                  <h4 className="text-2xl pb-4">{project.title}</h4>
                  <br/>
                  <p className="px-3">{project.description}</p>
                  <br/>
                  <a className="p-2 mx-4" target="_blank" href={project.link}>
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl" icon={faSquareGithub} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    