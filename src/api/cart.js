import axios from 'axios';

export const getUserCart = async (userId) => {
  const response = await axios.get(`https://fakestoreapi.com/carts/${userId}`);
  return response.data;
};
