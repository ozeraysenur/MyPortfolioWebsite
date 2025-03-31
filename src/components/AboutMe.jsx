import { FaGithub, FaLinkedin } from "react-icons/fa";
import { data } from "../data";
import { useSelector } from "react-redux";
const AboutMe = () => {

    const language = useSelector((state) => state.language.language);

    return (
        <section className="pb-20 flex items-center">
            <div className="flex-1 pr-10">
                <div className="flex items-center">
                    <div className="flex-1 border-t-2 border-secondary mr-3" />
                    <span className="flex-1 text-primary h-5 font-semibold m-2 font-noto text-lg">{data[language].aboutMe.name}</span>
                    <div className="flex-1" />
                </div>
                <h1 className="text-left text-6xl font-bold mb-2 mt-12 text-title">{data[language].aboutMe.title1}</h1>
                <h1 className="text-left text-6xl font-bold mb-12 text-title">{data[language].aboutMe.title2}</h1>

                <p className="text-lg mb-8 leading-relaxed max-w-2xl text-text">
                {data[language].aboutMe.description}
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="text-primary border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition text-lg font-medium text-2xl">
                        {data[language].aboutMe.hireMe}
                    </button>
                    <button className="text-primary border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition text-lg font-medium flex items-center gap-2">
                        <FaGithub className="text-2xl" />
                        {data[language].aboutMe.github}
                    </button>
                    <button className="text-primary border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition text-lg font-medium flex items-center gap-2">
                        <FaLinkedin className="text-2xl" />
                        {data[language].aboutMe.linkedin}
                    </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <img 
                    src="portfolio_drawing.jpg"
                    alt="Drawing"
                    className="w-96 h-96 object-cover rounded-lg shadow-2xl"
                />
            </div>
        </section>
    );
};

export default AboutMe;
