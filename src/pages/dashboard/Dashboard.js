import { useState } from "react";
import ProjectList from "../../components/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import ProjectFilter from "./ProjectFilter";
import { Link } from "react-router-dom";

// styles and assests
import "./Dashboard.css";

const Dashboard = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { documents, error } = useCollection("projects");
  const { user } = useAuthContext();

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects = documents?.filter((document) => {
    switch (currentFilter) {
      case "all":
        return true;

      case "mine":
        let assignedToMe = false;
        document.assignedUsersList.forEach((u) => {
          if (user.uid === u.id) {
            assignedToMe = true;
          }
        });
        return assignedToMe;

      case "development":
      case "design":
      case "finance":
      case "marketing":
        console.log(document.category, currentFilter);
        return document.category === currentFilter;

      default:
        return true;
    }
  });

  return (
    <>
      <div className="dashboard-main">
        <h2 className="page-title">Dashboard</h2>
        <Link to="/create" className="btn dashboard-add-project">
          + New Project
        </Link>
      </div>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {projects && <ProjectList projects={projects} />}
    </>
  );
};

export default Dashboard;
