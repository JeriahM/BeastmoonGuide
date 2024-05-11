import ProfileForm from "./ProfileForm.js";

const Profile = ({handler}) => {
  return (
    <div>
       <ProfileForm handler={handler} />
    </div>
  );
};

export default Profile;