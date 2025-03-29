import { useSelector } from "react-redux";
import { data } from "../data";
const Skills = () => {

  const language = useSelector((state) => state.language.language);
  const darkMode = useSelector((state) => state.theme.darkMode)

    return (
        <section id="skills" className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-12 text-[#1F2937]">{data[language].skills.title}</h2>
          
          <div className="flex gap-8">
            
            <div className="flex-1 p-6 ">
              <h3 className="text-2xl font-semibold mb-4 text-[#6f66d6]">{data[language].skills.list[0].name}</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="flex-1 p-6 ">
              <h3 className="text-2xl font-semibold mb-4 text-[#6f66d6]">{data[language].skills.list[1].name}</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#6f66d6]">{data[language].skills.list[2].name}</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

          </div>
        </section>
    );
}

export default Skills;
