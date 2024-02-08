import React from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/home/ProductList';
import MainLayout from '../components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout pageTitle="Browse Products">
      <div className="flex flex-col md:flex-row gap-10">
        <Categories />
        <ProductList />
      </div>
    </MainLayout>
  );
}
