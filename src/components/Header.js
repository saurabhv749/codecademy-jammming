import UserProfile from "./UserProfile";

const Header = ({ userProfile }) => {
  return (
    <div className="App-header">
      <h1 className="logo">
        Ja
        <span className="m m-1">m</span>
        <span className="m m-2">m</span>
        <span className="m m-3">m</span>
        ing
      </h1>
      {userProfile && userProfile.email && (
        <div className="user-profile">
          <UserProfile {...userProfile} />
        </div>
      )}
    </div>
  );
};
export default Header;
