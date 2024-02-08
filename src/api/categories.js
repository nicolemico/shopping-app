import axios from 'axios';

export const getAllCategories = async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
};
