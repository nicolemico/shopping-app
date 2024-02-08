import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getSingleProduct, getUserCart } from '../../api';
import StarRating from '../common/StarRating';

export default function CartProductList() {
  const userId = useSelector((state) => state.userId);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);

  const getCartData = async () => {
    getUserCart(userId).then((cartResponse) => {
      dispatch({ type: 'cart/setCart', payload: cartResponse.products });
    });
  };

  const getCartProductsData = async () => {
    const request = cart.map((cartItem) => getSingleProduct(cartItem.productId));
    const response = await Promise.all(request);
    let productData = response.map((responseObj) => responseObj.data);

    // map product quantity to cartData
    productData = productData.map((product) => {
      const cartProduct = cart.find((cartItem) => cartItem.productId === product.id);
      const productClone = product;
      productClone.quantity = cartProduct.quantity;
      return productClone;
    });
    setCartData(productData);
  };

  const handleChangeQuantity = (type, productId) => {
    setCartData(cartData.map((product) => {
      if (product.id === productId) {
        let newQuantity = 0;
        if (type === 'add') {
          newQuantity = product.quantity + 1;
        } else {
          newQuantity = (product.quantity > 0) ? product.quantity - 1 : product.quantity;
        }
        return {
          ...product,
          quantity: newQuantity,
        };
      }
      return product;
    }));
  };

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      getCartProductsData();
    }
  }, [cart]);
  return (
    <ul className="flex flex-col gap-6">
      { cartData.map((product) => (
        <li className="flex flex-col md:flex-row gap-10 p-6 rounded-lg border" key={product.id}>
          <img src={product.image} alt="product" className="w-28 object-contain" />
          <div className="flex flex-col flex-grow">
            <a href="/#" className="text-orange-400 text-lg">{product.title}</a>
            <p className="text-gray-600">{product.description}</p>
            <span className="mt-6">
              {product.rating.rate}
              <StarRating rating={product.rating.rate} />
              |
              {' '}
              {product.rating.count}
            </span>
          </div>
          <div className="self-end justify-between flex gap-6">
            <button className="bg-orange-400 h-5 w-5 flex items-center justify-center rounded-sm hover:bg-orange-500" type="button" onClick={() => handleChangeQuantity('minus', product.id)} aria-label="subtract 1 to product quantity">
              <FontAwesomeIcon icon={faMinus} className="text-white" />
            </button>
            <span className="w-4 text-center">{product.quantity}</span>
            <button className="bg-orange-400 h-5 w-5 flex items-center justify-center rounded-sm hover:bg-orange-500" type="button" onClick={() => handleChangeQuantity('add', product.id)} aria-label="add 1 to product quantity">
              <FontAwesomeIcon icon={faPlus} className="text-white" />
            </button>
          </div>
        </li>
      )) }
    </ul>
  );
}
