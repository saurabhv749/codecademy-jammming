import { NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <header>
      <div className="header-container">
        <NavLink to="/" className="logo">
          Ja
          <span className="m m-1">m</span>
          <span className="m m-2">m</span>
          <span className="m m-3">m</span>
          ing
        </NavLink>
        {user && (
          <div className="user-profile">
            <UserProfile {...user} />
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
