const UserProfile = ({ display_name, images }) => {
  return (
    <div>
      <img src={images[0]?.url} alt="user avatar" />
      <p>{display_name}</p>
    </div>
  );
};
export default UserProfile;
