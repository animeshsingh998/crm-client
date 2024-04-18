import "./App.css";
import Homepage from "./pages/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/login/Login";
import NotFoundRes from "./pages/NotFound/NotFoundRes";
import { Suspense } from "react";
import Signup from "./pages/signup/Signup";
import Loading from "./components/loading/Loading";
import { getUserDetails } from "./actions/utils";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProduct from "./pages/AddProduct/AddProduct";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SendFeedback from "./AddProduct/SendFeedback";
import Aboutus from "./pages/AboutUs/Aboutus";
import ProductFeedback from "./pages/productFeedback/ProductFeedbacks";
import AllUsers from "./pages/allUsers/AllUsers";


function App() {
  const userTest = window.localStorage.getItem("jwt");
  if (!userTest) {
    window.localStorage.setItem("user", null);
    window.localStorage.setItem("jwt", null);
    window.localStorage.setItem("isAuthenticated", "false");
  }
  const user = getUserDetails();
  return (
    <>
      <NotFoundRes />
      <div className="mainApp">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route
              path="/dashboard"
              element={user?.type === "admin" ? <Dashboard /> : <NotFound />}
            />
            <Route
              path="/addProduct"
              element={user?.type === "admin" ? <AddProduct /> : <NotFound />}
            />
            <Route path="/services" element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
              path="/send-feedback/:id"
              element={user?.type === "user" ? <SendFeedback /> : <NotFound />}
            />
            <Route
              path="/feedbacks/:id"
              element={user?.type === "admin" ? <ProductFeedback /> : <NotFound />}
            />
            <Route
              path="/all-users/"
              element={user?.type === "admin" ? <AllUsers /> : <NotFound />}
            />
  
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
