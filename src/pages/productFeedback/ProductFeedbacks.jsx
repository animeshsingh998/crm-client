import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { getProductById, getProductFeedbacks } from "../../actions/productActions";
import { FaReact, FaPython, FaNode } from "react-icons/fa";
import { VscSymbolInterface } from "react-icons/vsc";
import { MdOutlineScience } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { getUserDetails } from "../../actions/utils";
import { addToCart } from "../../actions/cartActions";
import FeedbackCard from "./FeedbackCard";

const ProductFeedback = () => {
  const { id } = useParams();
  const user = getUserDetails();
  const token = window.localStorage.getItem("jwt");
  const [product, setProduct] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const getProd = async () => {
    const Prodd = await getProductById(id);
    setProduct(Prodd.product);
  };
  const getFeedbacks = async () => {
    const res = await getProductFeedbacks(id, token);
    setFeedbacks(res.feedbacks);
  };
  useEffect(() => {
    getProd();
    getFeedbacks();
  }, []);

  return (
    <div className="productDetails">
      <div className="pdLeft">
        {product.slug === "react" && <FaReact size={200} />}
        {product.slug === "python" && <FaPython size={200} />}
        {product.slug === "uiux" && <VscSymbolInterface size={200} />}
        {product.slug === "backend" && <FaNode size={200} />}
        {product.slug === "datascience" && <MdOutlineScience size={200} />}
        {product.slug === "android" && <IoLogoAndroid size={200} />}
      </div>
      <div className="pdRight feedFix">
        <h1>Service Details</h1>
        <h2>Name: {product?.name}</h2>
        <h2>All feedbacks</h2>
        <div className="allFeedbacks">
          {feedbacks && feedbacks.length > 0 ? (
            <>
              {feedbacks?.map((feedback, id) => (
                <FeedbackCard key={`feedback${id}`} feedback={feedback} />
              ))}
            </>
          ) : (
            <h2>No feedbacks for this service available</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFeedback;
