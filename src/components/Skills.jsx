import { useSelector } from "react-redux";
import { data } from "../data";
const Skills = () => {

  const language = useSelector((state) => state.language.language);
  const skills = data[language].skills

    return (
        <section id="skills" className="py-12 ">
          <h2 className="text-5xl font-bold mb-12 text-title">{skills.title}</h2>
          
          <div className="flex ">
            {skills.list.map((skill) => (
            <div key={skills.id} className="flex-1 div-hover-effect p-2">
              <h3 className="text-3xl font-semibold mb-4 text-secondary">{skill.name}</h3>
              <p className="text-text">
                {skill.description}
              </p>
            </div>))}
          </div>
        </section>
    );
}

export default Skills;
