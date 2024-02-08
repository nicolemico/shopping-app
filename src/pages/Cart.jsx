import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import CartProductList from '../components/cart/CartProductList';

export default function Cart() {
  return (
    <MainLayout pageTitle="My Cart">
      <CartProductList />
    </MainLayout>
  );
}
