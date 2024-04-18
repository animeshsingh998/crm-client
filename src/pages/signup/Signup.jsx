import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { useEffect, useState } from "react";
import { registerUser } from "../../actions/authActions";
import img from '../../assets/sign.jpeg'

const Signup = () => {
  const navigate = useNavigate();
  let isAuthenticated = window.localStorage.getItem("jwt");
  const [userData, setUserData] = useState({ type: "customer" });
  const [passMatch, setPassMatch] = useState(false);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await registerUser(
      userData.email,
      "user",
      userData.password
    );
    if (res.status === 200) {
      window.location.pathname = "/";  
    } else {
      alert(res.message)
    }
  };

  const error = false;
  useEffect(() => {
    if (isAuthenticated !== "null") {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (userData?.cpassword?.length > 1 && userData.password === userData.cpassword) {
      setPassMatch(true)
    } else {
      setPassMatch(false)
    }
  },[userData])

  return (
    <div className="signUpPage">
      <div className="signUpFormContainer">
        <h1>Sign Up</h1>
        <form onSubmit={handleLogin} className="mainForm">
          <div className="inputEle">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              required
              onChange={handleChange}
            />
          </div>
          <div className="inputEle">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="inputEle">
            <label
              htmlFor="password"
              style={{ color: passMatch ? "green" : "red" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              required
              onChange={handleChange}
              style={{ border: `1px solid ${passMatch ? "green" : "red"}` }}
            />
            {!passMatch ? (
              <p style={{ color: "red" }}>Passwords do not match</p>
            ) : (
              <p style={{ color: "green" }}>Passwords match</p>
            )}
          </div>
          <button type="submit" disabled={!passMatch}>
            Sign Up
          </button>
        </form>
        <div className="formExtra">
          <Link to="/login">Already have a account? Login!</Link>
        </div>
      </div>
      <div className="signImgCOntainer">
        <img src={img} alt="image" />
      </div>
    </div>
  );
};

export default Signup;
