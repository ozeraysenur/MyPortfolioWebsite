const Skills = () => {
    return (
        <section id="skills" className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          
          <div className="space-y-8">
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">Java Script</h3>
              <p className="text-gray-600 max-w-3xl">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="pb-8 border-b border-gray-200">
              <h3 className="text-2xl font-semibold mb-4">React.Js</h3>
              <p className="text-gray-600 max-w-3xl">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            {/* Node Skill */}
            <div className="pb-8">
              <h3 className="text-2xl font-semibold mb-4">Node.Js</h3>
              <p className="text-gray-600 max-w-3xl">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
    )
}

export default Skills;