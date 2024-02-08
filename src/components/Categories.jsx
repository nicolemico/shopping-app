import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllCategories } from '../api';

export default function Aside() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [categoryParam, setCategoryParam] = useState(new URLSearchParams(location.search).get('category'));

  const fetchCategories = async () => {
    const data = await getAllCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setCategoryParam(new URLSearchParams(location.search).get('category'));
  }, [location.search]);

  return (
    <div className="border-r min-w-[250px]">
      <h3 className="text-lg text-orange-400">Categories</h3>
      <ul>
        { categories.map((category) => (
          <li key={category} className="my-3">
            <Link to={`?category=${category}`} className={`capitalize ${((categoryParam === category) ? 'underline decoration-orange-400 font-bold' : '')}}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
