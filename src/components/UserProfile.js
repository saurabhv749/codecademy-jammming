const UserProfile = ({ display_name, images }) => {
  return (
    <div className="profile">
      <img src={images[0]?.url} alt="user avatar" />
      <span>{display_name}</span>
    </div>
  );
};
export default UserProfile;
