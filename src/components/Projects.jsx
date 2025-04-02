import { useSelector } from "react-redux";
import { data } from "../data";
const Projects = () => {
  const language = useSelector((state) => state.language.language);
  const projects = data[language].projects

    return (
        <section id="skills" className="py-12 border-t-2 border-border">
          <h2 className="text-5xl font-bold mb-12 text-title">{projects.title}</h2>
          
          <div className="flex">
          {projects.list.map((project) => (
            <div key={project.id} className="flex-1 div-hover-effect p-2">
              <img src={project.img} className="mb-4"/>
              <h3 className="text-3xl font-semibold mb-4 text-primary">{project.name}</h3>
              <p className="text-text mb-2">
                {project.description}
              </p>
               {project.technologies.map((technology) => (
                  <button className="px-3 py-2 rounded-md border border-secondary text-primary transition text-md font-semibold mr-2 mt-2">
                    {technology}
                  </button>
               ))}
    <div className="flex justify-between mt-4">
      <a 
        href={project.github} 
        className="text-primary text-md transition underline decoration-primary font-semibold"
      >
        Github
      </a>
      <a 
        href={project.vercel} 
        className="text-primary text-md transition underline decoration-primary font-semibold"
      >
        {language === "en" ? "View Site" : "Siteyi Ziyaret Et"}
      </a>
    </div>
            </div>))}
            
          </div>
        </section>
    );
}

export default Projects;