import UserProfile from "./UserProfile";

const Header = ({ userProfile }) => {
  return (
    <header>
      <p className="logo">
        Ja
        <span className="m m-1">m</span>
        <span className="m m-2">m</span>
        <span className="m m-3">m</span>
        ing
      </p>
      {userProfile && userProfile.email && (
        <div className="user-profile">
          <UserProfile {...userProfile} />
        </div>
      )}
    </header>
  );
};
export default Header;
