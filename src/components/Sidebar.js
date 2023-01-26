import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// styles & images
import "./Sidebar.css";
import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

// components
import Avatar from "./Avatar";

// TODO: FIX: The sidebar should not collapse when visible on larger screens -> Repro steps: go to a single project page, the sidebar collapses for some of them.

const Sidebar = () => {
  const { user } = useAuthContext();

  const displayName =
    user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/" exact>
                <img src={DashboardIcon} alt="Dashboard Icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="Create Icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
