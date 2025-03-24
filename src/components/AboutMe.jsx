const AboutMe = () => {
    return (
        <section className="pb-20">
          <h1 className="text-center text-2xl text-blue-950 mb-1">Ayşe Nur Özer</h1>
          <h2 className="text-center text-2xl text-gray-950 mb-1">Creative thinker</h2>
          <h2 className="text-center text-2xl text-gray-950 mb-1">Minimalism lover</h2>
          
          <p className="text-lg mb-8 leading-relaxed max-w-2xl">
            Hi, I'm Ayşe Nur. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition text-lg">
                Hire Me
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition text-lg">
              Github
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition text-lg">
                LinkedIn
            </button>
          </div>
        </section>
      );
  };
  
  export default AboutMe;
  