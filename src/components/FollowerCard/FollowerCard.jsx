import "./FollowerCard.css";
import noProfile from "../../assets/noprofile.jpg";
import { Link } from "react-router-dom";

const FollowerCard = ({ user }) => {
  return (
    <div className="FollowerCard">
      <div className="followerLogo">
        <img
          src={noProfile}
          alt="pic"
        />
      </div>
      <div className="followerInfo">
        <div className="usernames">
          {/* <Link to={`/user/${user._id}`}> */}
            <span>{user.email}</span>
          {/* </Link> */}
          {/* <Link to={`/user/${user._id}`}>
            <span>@{user.username}</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default FollowerCard;
