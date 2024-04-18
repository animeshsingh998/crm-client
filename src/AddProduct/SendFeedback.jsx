import { useEffect, useState } from "react";
import "./addProduct.css";
import { useParams } from "react-router-dom";
import { addProduct, getProductById } from "../actions/productActions";

const SendFeedback = () => {
  const token = window.localStorage.getItem("jwt");
  const [userData, setUserData] = useState({ experience: "excellent" });
  const [service, setService] = useState({});
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const { id } = useParams();
 const getProd = async () => {
   const Prodd = await getProductById(id);
   setService(Prodd.product);
 };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.rating <= 0 || userData.rating > 5) {
      return alert("Invalid Rating.");
    }
    const productId = id;
    const res = await addProduct(
      userData.feedback,
      userData.rating,
      userData.experience,
      productId,
      token
    );
    if (res.status === 200) {
      alert(res.message)
      window.location.pathname = "/services";
    } else {
      alert(res.message);
    }
  };
    useEffect(() => {
      getProd();
    }, []);
  return (
    <div className="addProduct">
      <div className="apContainer">
        <h1>Send a Feedback </h1>
        <form onSubmit={handleSubmit}>
          <div className="inputEle">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              value={service?.name || "Service"}
              disabled={true}
            />
          </div>
          <div className="inputEle">
            <label htmlFor="experience">Experience</label>
            <select
              name="experience"
              id="experience"
              onChange={handleInputChange}
              required
            >
              Poor
              <option value="excellent">Excellent</option>
              <option value="average">Average</option>
              <option value="poor" defaultChecked>Poor</option>
            </select>
          </div>
          <div className="inputEle">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              name="feedback"
              placeholder="Describe your feedback..."
              required
              onChange={handleInputChange}
              autoCapitalize="true"
            />
          </div>
          {/* <div className="inputEle">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Short address of house."
              required
              onChange={handleInputChange}
              autoCapitalize="true"
            />
          </div> */}
          <div className="inputEle">
            <label htmlFor="Price">Rating (Out of 5)</label>
            <input
              type="number"
              name="rating"
              minLength={1}
              maxLength={5}
              step="1"
              placeholder="5"
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default SendFeedback;
