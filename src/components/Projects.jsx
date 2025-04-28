import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { data } from "../data";

const Projects = () => {
  const language = useSelector((state) => state.language.language);
  const projects = data[language].projects;
  const containerRef = useRef(null);

  const scroll = (offset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="skills" className="py-12 border-t-2 border-border">
      <h2 className="text-5xl font-bold mb-12 text-title text-left">
        {projects.title}
      </h2>

      {/* wrapper: relative + yatayda padding */}
      <div className="relative px-12">
        {/* Sol ok */}
        <button
          onClick={() => scroll(-300)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-primary p-2 rounded-full shadow-md z-20 hover:bg-opacity-100"
        >
          ‹
        </button>

        {/* Kaydırılabilir scroll-snap container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6"
        >
          {projects.list.map((project) => (
            <div
              key={project.id}
              className="snap-start flex-shrink-0 w-[80%] sm:w-[50%] lg:w-[33.333%] p-4 rounded-lg shadow-lg text-left div-hover-effect"
            >
              <img
                src={project.img}
                alt={project.name}
                className="mb-4 w-full h-40 object-cover rounded"
              />
              <h3 className="text-3xl font-semibold mb-2 text-primary">
                {project.name}
              </h3>
              <p className="text-text mb-4">{project.description}</p>

              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, i) => (
                  <button
                    key={i}
                    className="px-3 py-2 rounded-md border border-secondary text-primary text-sm font-semibold mr-2 mt-2"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  className="text-primary text-md underline decoration-primary font-semibold"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sağ ok */}
        <button
          onClick={() => scroll(300)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-primary p-2 rounded-full shadow-md z-20 hover:bg-opacity-100"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Projects;
