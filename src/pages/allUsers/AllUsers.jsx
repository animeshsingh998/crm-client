import { useEffect, useState } from "react";
import "./allusers.css";
import { getAllUsers } from "../../actions/authActions";
import FollowerCard from "../../components/FollowerCard/FollowerCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const allUsers = async () => {
    const res = await getAllUsers();
    setUsers(res.users);
  };

  useEffect(() => {
    allUsers();
  }, []);

    return (
      <div className="allUsersPage">
        <h1>All Users</h1>
        <div className="allUsersContainer">
          {users &&
            users.map((user, id) => <FollowerCard key={id} user={user} />)}
        </div>
      </div>
    );
};

export default AllUsers;
