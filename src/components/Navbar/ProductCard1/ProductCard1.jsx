import "./productCard1.css";
import { Link } from "react-router-dom";
import { FaReact, FaPython, FaNode } from "react-icons/fa";
import { VscSymbolInterface } from "react-icons/vsc";
import { MdOutlineScience } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { getUserDetails } from "../../../actions/utils";

const ProductCard1 = ({ product }) => {
  const token = localStorage.getItem("jwt");
    const user = getUserDetails();
  const handleRentalDelete = () => {};
  return (
    <div className="productCard1">
      <div className="productCardData imgContainerData">
        {product.slug === "react" && <FaReact size={100} />}
        {product.slug === "python" && <FaPython size={100} />}
        {product.slug === "uiux" && <VscSymbolInterface size={100} />}
        {product.slug === "backend" && <FaNode size={100} />}
        {product.slug === "datascience" && <MdOutlineScience size={100} />}
        {product.slug === "android" && <IoLogoAndroid size={100} />}
      </div>
      <div className="productCardData">
        <h1>Name:</h1>
        <h2>{product.name}</h2>
      </div>
      <div className="productCardData">
        <h1>Rating:</h1>
        <h2>{product.ratings}</h2>
      </div>
      <div className="productCardData">
        <h1>Orders Completed:</h1>
        <h2>{product.ordersCompleted}</h2>
      </div>
      <div className="bootn">
        {user?.type === "user" ? (
          <Link to={`/product/${product._id}`} className="primaryBtn">
            Details
          </Link>
        ) : (
          <Link to={`/feedbacks/${product._id}`} className="primaryBtn">
            Feedbacks
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard1;
