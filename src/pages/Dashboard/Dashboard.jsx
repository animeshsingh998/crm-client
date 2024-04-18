import { deleteProduct, getMyProducts } from '../../actions/productActions';
import { useEffect, useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const token = window.localStorage.getItem("jwt");
    const [myProducts, setMyProducts] = useState({});
    const getMyProd = async () => {
        const myProdd = await getMyProducts(token);
        setMyProducts(myProdd.products)
    }
    useEffect(() => {
        getMyProd();  
    }, [])
    const handleDel = async (id) => {
        if (confirm("Are you sure you want to delete this Product?")) {
            const res = await deleteProduct(id, token);
            if (res.status === 200) {
                alert(res.message);
                getMyProd();
            } else {
              alert(res.message);
            }
        }
    };
  return (
    <div className="dashboard">
      <h1>ADMIN Dashboard</h1>
      <div className="dashTop">
        {/* <Link to="/addProduct">Add Service</Link> */}
        <Link to="/all-users">All Users</Link>
        <Link to="/services">Feedbacks</Link>
      </div>
      <div className="dashBot">
        <h2>All Services</h2>
        <div className="productsheader">
          <div className="pcBox">
            <h4>ID</h4>
          </div>
          <div className="pcBox">
            <h4>Name</h4>
          </div>
          <div className="pcBox">
            <h4>Ratings</h4>
          </div>
          <div className="pcBox">
            <h4>Orders Completed</h4>
          </div>
        </div>
        {myProducts?.length > 0 ? (
          myProducts?.map((product, id) => (
            <div className="productCard" key={id}>
              <div className="pcBox">
                <h4>{id + 1}</h4>
              </div>
              <div className="pcBox">
                <h4>{product?.name}</h4>
              </div>
              <div className="pcBox">
                <h4>{product?.ratings} /5</h4>
              </div>
              <div className="pcBox">
                <h4>{product?.ordersCompleted}</h4>
              </div>
            </div>
          ))
        ) : (
          <h3>No Products Yet</h3>
        )}
      </div>
    </div>
  );
}

export default Dashboard