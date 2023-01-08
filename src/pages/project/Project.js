import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectComments from "./ProjectComments";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

// styles and assets
import "./Project.css";
import BackLogo from "../../assets/back.svg";

const Project = () => {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <Link to="/">
        <img src={BackLogo} className="back-btn mg-b-lg" />
        {/* <span>Back</span> */}
      </Link>
      <div className="project-details">
        <ProjectSummary project={document} />
        <ProjectComments project={document} />
      </div>
    </>
  );
};

export default Project;
