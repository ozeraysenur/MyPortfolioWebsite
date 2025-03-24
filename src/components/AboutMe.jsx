const AboutMe = () => {
    return (
        <section className="pb-20">
            <div className="flex items-center">
                <div className="flex-grow border-t-2 border-[#3730A3] mr-3" />
                    <span className="text-[#3730A3] h-5 font-bold m-2 mr-[950px]">Ayşe Nur Özer</span>
                </div>
          <h1 className="text-left text-2xl text-[#1F2937] text-6xl font-bold m-2">Creative thinker</h1>
          <h1 className="text-left text-2xl text-[#1F2937] text-6xl font-bold m-2">Minimalism lover</h1>
          
          <p className="text-lg mb-8 leading-relaxed max-w-2xl m-2 text-gray-500">
            Hi, I'm Ayşe Nur. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="text-[#3730A3] border border-[#3730A3] px-6 py-3 rounded-md hover:bg-[#3730A3] hover:text-white transition text-lg">
                Hire Me
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-6 py-3 rounded-md hover:bg-[#3730A3] hover:text-white transition text-lg">
              Github
            </button>
            <button className="text-[#3730A3] border border-[#3730A3] px-6 py-3 rounded-md hover:bg-[#3730A3] hover:text-white transition text-lg">
                LinkedIn
            </button>
          </div>
        </section>
      );
  };
  
  export default AboutMe;
  