const Projects = () => {
    return (
        <section id="skills" className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-12 text-[#1F2937]">Projects</h2>
          
          <div className="flex gap-8">
            
            <div className="flex-1 p-6 ">
              <h3 className="text-2xl font-semibold mb-4 text-[#6f66d6]">JavaScript</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="flex-1 p-6 ">
              <h3 className="text-2xl font-semibold mb-4 text-[#6f66d6]">React.js</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#6f66d6]">Node.js</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

          </div>
        </section>
    );
}

export default Projects;