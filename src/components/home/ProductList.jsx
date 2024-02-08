import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../api';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const location = useLocation();
  const [categoryParam, setCategoryParam] = useState(new URLSearchParams(location.search).get('category'));

  useEffect(() => {
    if(categoryParam === null) {
      getProducts().then(data => setProducts(data));
      return;
    }
    getProductsByCategory(categoryParam).then(data => setProducts(data));
  }, [categoryParam]);

  useEffect(() => {
    setCategoryParam(new URLSearchParams(location.search).get('category'));
  }, [location.search]);

  const handleClickAddCart = (productId) => () => {
    dispatch({ type: 'cart/addToCart', payload: { id: productId, quantity: 1 } });
    toast('Item Added to cart', { type: 'success' });
  };

  return (
    <div className="flex flex-row flex-wrap gap-10 mx-auto ">
      { products.map((product) => (
        <ProductCard key={product.id} product={product} clickAddToCart={handleClickAddCart} />
      ))}
    </div>
  );
}
