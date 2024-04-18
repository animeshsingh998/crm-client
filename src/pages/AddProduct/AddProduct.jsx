import { useState } from "react";
import "./addProduct.css";
import { addProduct } from "../../actions/productActions";

const AddProduct = () => {
  const token = window.localStorage.getItem("jwt");
  const [userData, setUserData] = useState({ category: "reactjs" });
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addProduct(
      userData.name,
      userData.description,
      userData.category,
      userData.price,
      token
    );
    if (res.status === 200) {
      window.location.pathname = "/dashboard";
    } else {
      alert(res.message);
    }
  };
  return (
    <div className="addProduct">
      <div className="apContainer">
        <h1>Add a Service</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputEle">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              placeholder="Service Name"
              required
              onChange={handleInputChange}
              autoCapitalize="true"
            />
          </div>
          <div className="inputEle">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleInputChange}
            />
          </div>
          <div className="inputEle">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              onChange={handleInputChange}
              required
            >
              <option value="reactJs" defaultChecked>
                ReactJs
              </option>
              <option value="mern">Mern Stack</option>
              <option value="python">Python</option>
              <option value="rust">Rust</option>
              <option value="cpp">C++</option>
            </select>
          </div>
          <div className="inputEle">
            <label htmlFor="Price">Price(₹)</label>
            <input
              type="number"
              name="price"
              min="0"
              max="1000"
              step="0.01"
              placeholder="Price"
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
