const Profile = () => {
    return (
        <section id="skills" className="py-12 border-t-2 border-[#d2ccef]">
          <h2 className="text-5xl font-bold mb-12 text-[#1F2937]">Profile</h2>
          
          <div className="flex">
            
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4 text-[#4338ca]">JavaScript</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="flex-1 p-6 ">
              <h3 className="text-3xl font-semibold mb-4 text-[#4338ca]">React.js</h3>
              <p className="text-gray-600">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
    );
}

export default Profile;