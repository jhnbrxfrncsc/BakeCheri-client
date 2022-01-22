import axios from 'axios';

const prodUrl = "https://bakecheri-api.herokuapp.com/products";
const userUrl = "https://bakecheri-api.herokuapp.com/users";
const orderUrl = "https://bakecheri-api.herokuapp.com/orders";

// products
export const fetchProducts = () => axios.get(prodUrl);
export const createProduct = (newProduct) => axios.post(prodUrl, newProduct);
export const updateProduct = (prodId, newData) => axios.put(`${prodUrl}/${prodId}`, newData);
export const updateAvailability = (prodId) => axios.put(`${prodUrl}/availability`, { prodId });
export const deleteProduct = (prodId) => axios.delete(`${prodUrl}/${prodId}`);

// users
export const fetchUsers = () => axios.get(userUrl);
export const fetchUser = (userId) => axios.get(`${userUrl}/${userId}`);
export const registerUser = (userData) => axios.post(`${userUrl}/register`, userData);
export const loginUser = (userData) => axios.post(`${userUrl}/login`, userData);
export const roleChanger = (userId) => axios.put(`${userUrl}/change-role`, {userId});
export const userDeletion = (userId) => axios.delete(`${userUrl}/${userId}`);
export const cartItemAddition = (cartItem) => axios.put(`${userUrl}/add-to-cart`, cartItem);
export const cartItemDeletion = (cartItem) => axios.put(`${userUrl}/delete-cart-item`, cartItem);

// orders
export const fetchOrders = () => axios.get(orderUrl);
export const placeOrder = (cartData) => axios.post(orderUrl, cartData);
export const fetchUserOrders = (userId) => axios.get(`${orderUrl}/${userId}`);