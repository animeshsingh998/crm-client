import axios from "axios";

// const baseUrl = "http://localhost:7000";
const baseUrl = "https://crm-api-6ibn.onrender.com";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
};

export const addProduct = async (feedback, rating, experience, productId, token) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/product/createFeedback/${token}`,
      { feedback, rating, experience, productId },
      { headers },
      { withCredentials: true }
    );
    if (data) {
      const res = { status: 200, message: "Feedback sent Successfully!" };
      return res;
    }
  } catch (error) {
    const res = { status: 400, message: error.response.data.error };
    return res;
  }
};

export const getMyProducts = async (token) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/product/getMyProducts/${token}`,
      { headers },
      { withCredentials: true }
    );
      if (data) {
      const res = { "status": 200, "products": data };
      return res;
    }
  } catch (error) {
    const res = { "status": 400, "message": error?.response?.data?.error };
    return res;
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/product/allProducts`,
      { headers },
      { withCredentials: true }
    );
    if (data) {
      const res = { "status": 200, "products": data };
      return res;
    }
  } catch (error) {
    const res = { "status": 400, "message": error?.response?.data?.error };
    return res;
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/product/productById/${id}`,
      { headers },
      { withCredentials: true }
    );
    if (data) {
      const res = { "status": 200, "product": data };
      return res;
    }
  } catch (error) {
    const res = { "status": 400, "message": error?.response?.data?.error };
    return res;
  }
};

export const getProductFeedbacks = async (productId, token) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/product/getProductFeedbacks/${token}`,
      {productId},
      { headers },
      { withCredentials: true }
    );
    if (data) {
      const res = { status: 200, feedbacks: data };
      return res;
    }
  } catch (error) {
    const res = { status: 400, message: error?.response?.data?.error };
    return res;
  }
};


export const deleteProduct = async (id, token) => {
  try {
    const { data } = await axios.delete(
      `${baseUrl}/product/${id}/delete/${token}`,
      { headers },
      { withCredentials: true }
    );
      if (data) {
      const res = { "status": 200, "message": "Product deleted successfully!" };
      return res;
    }
  } catch (error) {
    const res = { status: 400, message: error?.response?.data?.error };
    return res;
  }
};

