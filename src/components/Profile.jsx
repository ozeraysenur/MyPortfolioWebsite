import { data } from "../data";
import { useSelector } from "react-redux";

const Profile = () => {
  const language = useSelector((state) => state.language.language);
  const profileData = data[language].profile;

  return (
    <section id="profile" className="py-12 border-t-2 border-border">
      <h2 className="text-5xl font-bold mb-12 text-title">{profileData.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
        <div className="div-hover-effect p-2">
          <h3 className="text-3xl font-semibold mb-4 text-secondary">
            {profileData.profileTitle}
          </h3>
          <div className="space-y-4 ">
            <p className="text-title">
              <span className="font-bold ">{profileData.profileDetails.birth}:</span>{" "}
              {profileData.profileDetails.birthdate}
            </p>
            <p className="text-title">
              <span className="font-bold">{profileData.profileDetails.city}:</span>{" "}
              {profileData.profileDetails.cityName}
            </p>
            <p className="text-title">
              <span className="font-bold">{profileData.profileDetails.education}:</span>{" "}
              {profileData.profileDetails.educationName}
            </p>
            <p className="text-title">
              <span className="font-bold">{profileData.profileDetails.preferredRole}:</span>{" "}
              {profileData.profileDetails.roleName}
            </p>
          </div>
        </div>
        <div className="pr-24 div-hover-effect p-2">
          <h3 className="text-3xl font-semibold mb-4 text-secondary">
            {profileData.aboutMeTitle}
          </h3>
          <div className="space-y-4 text-text">
            {profileData.aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
