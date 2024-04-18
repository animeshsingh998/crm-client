import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../actions/productActions";
import { FaReact, FaPython, FaNode } from "react-icons/fa";
import { VscSymbolInterface } from "react-icons/vsc";
import { MdOutlineScience } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { getUserDetails } from "../../actions/utils";
import { addToCart } from "../../actions/cartActions";

const ProductDetails = () => {
  const { id } = useParams();
  const user = getUserDetails();
  const token = window.localStorage.getItem("jwt");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const getProd = async () => {
    const Prodd = await getProductById(id);
    setProduct(Prodd.product);
  };
  const showInterest = () => {
    alert(
      `An email to KarmaTechnoLabs has been sent indicating your interest in their ${product?.name} Service, expect a reply shortly!`
    );
  };
  useEffect(() => {
    getProd();
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
      <div className="pdRight">
        <h1>Service Details</h1>
        <h2>Name: {product?.name}</h2>
        <h3>Description: {product?.description}</h3>
        <h3>Ratings: {product?.ratings} /5</h3>
        <h3>
          Owner: KarmaTechnoLabs{" "}
          <button type="button" className="signin yolo" onClick={showInterest}>
            Show Interest
          </button>
        </h3>
        <h3>Orders Completed: {product?.ordersCompleted}</h3>
        <h3>Contact Number: +91-9737093009</h3>
        <h3>Email: karmatechnolabs@gmail.com</h3>
        <h3>
          Website:{" "}
          <Link
            to="https://www.karmatechnolabs.com"
            target="_blank"
            className="signin webVis"
          >
            Click to visit
          </Link>
        </h3>
        {user?.type === "user" && (
          <>
            <div className="bootns">
              <Link
                to={`/send-feedback/${product._id}`}
                className="primaryBtn addCartBtn"
              >
                Send a feedBack
              </Link>
              {/* <Link
                to={`/all-feedbacks/${product._id}`}
                className="primaryBtn addCartBtn"
              >
                See all Feedbacks
              </Link> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
