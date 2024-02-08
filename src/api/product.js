import axios from 'axios';

export const getProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return response.data;
};

export const getSingleProduct = (productId) => axios.get(`https://fakestoreapi.com/products/${productId}`);
