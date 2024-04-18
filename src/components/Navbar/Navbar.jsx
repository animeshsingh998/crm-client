"use client";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { getUserDetails } from "../../actions/utils";

const Navbar = () => {
  const token = localStorage.getItem("jwt");
  const handleLogout = () => {
    window.localStorage.setItem('jwt', null);
    window.localStorage.setItem('user', null);
    window.localStorage.setItem("isAuthenticated", "false");
    window.location.pathname = "/";
  };
  let jwt = window.localStorage.getItem("jwt");
  var isAuthenticated = window.localStorage.getItem("isAuthenticated");
  const user = getUserDetails();

  return (
    <nav>
      <div className="lftSide">
        <Link to="/">KarmaTechnolabs</Link>
      </div>
      <div className="rgtSide">
        <span>Animesh Singh 200670107021</span>
        {isAuthenticated === "true" ? (
          <>
            {user?.type === "admin" && (
              <Link to="/Dashboard" className="signOut">
                Dashboard
              </Link>
            )}
            {user?.type === "user" && (
              <Link to="/services" className="signOut">
                Services
              </Link>
            )}
            <Link to="/about-us" className="signOut">
              About us
            </Link>
            <button onClick={handleLogout} className="signin">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="signin">
              Sign in
            </Link>
            <Link to="/signup" className="signOut">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
