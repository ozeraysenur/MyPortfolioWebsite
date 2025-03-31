import { data } from "../data";
import { useSelector } from "react-redux";
const Profile = () => {
  const language = useSelector((state) => state.language.language);
    return (
        <section id="skills" className="py-12 border-t-2 border-border">
          <h2 className="text-5xl font-bold mb-12 text-title">Profile</h2>
          
          <div className="flex">
            
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4 text-secondary">JavaScript</h3>
              <p className="text-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4 text-secondary">React.js</h3>
              <p className="text-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
    );
}

export default Profile;