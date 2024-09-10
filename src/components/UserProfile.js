const UserProfile = ({ display_name, images }) => {
  const srcTiny = images[0]?.url;
  return (
    <div className="profile">
      <img src={srcTiny} className="avatar" alt="user avatar" />
      <span>{display_name}</span>
    </div>
  );
};
export default UserProfile;
