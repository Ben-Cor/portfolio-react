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
        <div className="grid grid-cols-1 gap-10 my-2 md:flex md:flex-wrap md:items-center md:justify-start md:gap-[30px]">
          {projectsInfo.map(function (project) {
            return (
              <div
                key={project.key}
                className="inline-block relative max-w-[350px]"
              >
                <img
                  src={`src/projects/${project.image}`}
                  alt={project.alt}
                  className="h-auto w-[70vw] object-contain border-[1px] border-slate-900 md:h-[300px] md:w-auto"
                />
                <div
                  className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 pt-8
                            text-center transition-opacity duration-500 opacity-0 hover:opacity-100
                            bg-white bg-opacity-90 border-[1px] border-slate-900"
                >
                  <h4 className="text-2xl pb-4">{project.title}</h4>
                  <br/>
                  <p className="px-3">{project.description}</p>
                  <br/>
                  <a className="p-2 mx-4" target="_blank" href={project.link}>
                    <FontAwesomeIcon className="p-2 mx-4 text-4xl hover:text-blue-300" icon={faSquareGithub} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    