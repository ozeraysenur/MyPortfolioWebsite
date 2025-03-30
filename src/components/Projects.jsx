import { useSelector } from "react-redux";
import { data } from "../data";
const Projects = () => {
  const language = useSelector((state) => state.language.language);
  const projects = data[language].projects

    return (
        <section id="skills" className="py-12 border-t-2 border-[#d2ccef]">
          <h2 className="text-5xl font-bold mb-12 text-[#1F2937]">{projects.title}</h2>
          
          <div className="flex">
          {projects.list.map((project) => (
            <div key={project.id} className="flex-1 ">
              <img src={project.img} className="mb-4"/>
              <h3 className="text-3xl font-semibold mb-4 text-[#4338ca]">{project.name}</h3>
              <p className="text-gray-600 mr-4">
                {project.description}
              </p>
              <p><strong>Technologies: </strong> {project.technologies.join(", ")}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href={project.vercel} target="_blank" rel="noopener noreferrer"> Live Demo</a>
            </div>))}
            
          </div>
        </section>
    );
}

export default Projects;