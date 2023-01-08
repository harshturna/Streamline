import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

// styles
import "./OnlineUser.css";

function OnlineUser() {
  const { error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => {
          const displayName =
            user.displayName.charAt(0).toUpperCase() +
            user.displayName.slice(1);
          return (
            <div key={user.id} className="user-list-item">
              {user.online && <span className="online-user"></span>}
              <span>{displayName}</span>
              <Avatar src={user.photoURL} />
            </div>
          );
        })}
    </div>
  );
}

export default OnlineUser;
