import "./Homepage.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/homeImg.jpg";


const Homepage = () => {

  return (
    <div className="homePage">
      <img src={image1} alt="logo" />
      <div className="homePText">
        <h1 className="adminHeroHeading">Welcome to Enhancing Customer Engagements.</h1>
        <h3>
          We offer the best CRM servies in the cheapest price.
        </h3>
        <Link to="/services" className="primaryBtn">
          See All Services
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
