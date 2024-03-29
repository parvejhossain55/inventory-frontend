import { toast } from "react-toastify";
import axios from "../helper/axiosInstance";
import { getToken } from "../helper/helper";

// set axios default value
// axios.defaults.baseURL = process.env.REACT_APP_API;
// const headers = { headers: { Authorization: "Bearer " + getToken() } };

// Check User Authentication
export const checkAuth = async () => {
  try {
    const { data } = await axios.get(`/auth-check`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Check Admin Authentication
export const checkAuthAdmin = async () => {
  const { data } = await axios.get(`/admin-check`);
  // console.log("headers ");
  console.log("data ", data);
  return data;
};

// Get User Profile
export const getUser = async () => {
  const { data } = await axios.get(`/get-user`);
  // console.log('user', data)
  return data;
};

// Update User Profile
export const updateProfile = async (data) => {
  try {
    if (data.newPass || data.confPass) {
      if (data.newPass !== data.confPass) {
        toast.error("Password Does not Match");
      } else {
        await axios.put(`/update-profile`, data);
        toast.success("Profile Successfully Updated");
      }
    } else {
      await axios.put(`/update-profile`, data);
      toast.success("Profile Successfully Updated");
    }
  } catch (error) {
    console.error(error);
    toast.error("Profile Update Failed");
  }
};

// Filter Product
export const loadFilterProduct = async (currentPage, data) => {
  try {
    const result = await axios.post(
      `/products/filter-products/?page=${currentPage}`,
      data
    );
    return result.data;
  } catch (error) {
    console.log(error);
    toast.error("Filter Product Error");
  }
};

// Load Category Product
export const loadCategoryProduct = async ({
  slug,
  currentPage,
  perPage,
  sort,
}) => {
  try {
    const { data } = await axios.get(
      `/products/category/${slug}?page=${currentPage}&limit=${perPage}&sortBy=${sort}`
    );
    return data;
  } catch (error) {
    console.log(error);
    toast.error("Load Category Product Error");
  }
};

// Load Search Product
export const loadSearchProduct = async ({
  search,
  currentPage,
  perPage,
  sort,
}) => {
  try {
    const { data } = await axios.get(
      `/products/search?q=${search}&page=${currentPage}&limit=${perPage}&sortBy=${sort}`
    );
    return data;
  } catch (error) {
    console.log(error);
    toast.error("Load Search Product Error");
  }
};

// Load Product By Slug
export const loadProductBySlug = async (slug) => {
  try {
    const { data } = await axios.get(`products/${slug}`);
    return data;
  } catch (error) {
    console.log(error);
    toast.error("Load Product By Slug Error");
  }
};

// Load User Cart Item
export const loadCart = async () => {
  try {
    const { data } = await axios.get("/cart");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Add Item in User Cart
export const addToCart = async (productId, quantity = 1) => {
  try {
    const { data } = await axios.post("/cart", { productId, quantity });

    const cart = JSON.stringify(data.products);
    localStorage.setItem("cart", cart);

    toast.success("Product added to cart.");
  } catch (error) {
    console.log(error);
    toast.error("Product add to cart failed.");
  }
};

// Update User Cart Quantity
export const updateCartQuantity = async (quantity, itemId) => {
  const { data } = await axios.put("/cart", { quantity, itemId });

  const cart = JSON.stringify(data.products);
  localStorage.setItem("cart", cart);

  toast.success("Quantity Updated!");
};

// Remove User Cart Item
export const removeCartItemData = async (itemId) => {
  try {
    const { data } = await axios.delete(`/cart/${itemId}`);

    const cart = JSON.stringify(data.products);
    localStorage.setItem("cart", cart);

    toast.error(data.message);
  } catch (error) {
    console.log(error);
    toast.error("Remove Cart Item Error");
  }
};

// Add Item to User Wishlist
export const addToWishlist = async (productId) => {
  try {
    const { data } = await axios.post("/wishlist", { productId });
    toast.success(data.message);
  } catch (error) {
    console.log(error);
    toast.error("Filter Product Error");
  }
};

// Load User Wishlist
export const loadWishlistData = async () => {
  try {
    console.log("headers ");

    const { data } = await axios.get("/wishlist");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Remove User Wishlist
export const removeWishlistData = async (productId) => {
  try {
    await axios.delete(`/wishlist/${productId}`);
    toast.error("Item remove from wishlist");
  } catch (error) {
    console.log(error);
    toast.error("Wishlist Removed Error");
  }
};

// Apply Coupon Code
export const applyCouponCode = async (coupon) => {
  try {
    const { data } = await axios.get(`/coupons/${coupon}`);
    toast.info(data.message);
  } catch (error) {
    console.log(error);
    toast.error("Apply Coupon Code Error");
  }
};

// place order
export const checkoutOrder = async (order) => {
  const { data } = await axios.post("/cart/checkout", order);
  return data;
};

// check order status
export const checkOrderStatus = async (orderId) => {
  const { data } = await axios.get(`/order/${orderId}`);
  console.log("data", data);
  return data;
};
