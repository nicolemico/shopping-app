import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const cart = useSelector((state) => state.cart);

  const navLinkClass = ({ isActive }) => {
    const baseClass = 'text-2xl font-bold';
    if (isActive) {
      return `${baseClass} text-orange-400`;
    }

    return baseClass;
  };

  return (
    <div className="flex justify-between bg-white border-b p-4">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/cart" className="p-2 text-lg px-3 text-orange-400 rounded-md flex group">
        <FontAwesomeIcon icon={faCartShopping} className="text-xl group-hover:text-orange-500" />
        <div className="text-[10px] bg-orange-400 text-white group-hover:bg-orange-500 rounded-full w-5 h-4 flex items-center justify-center relative bottom-2">
          {cart.length}
        </div>
      </NavLink>
    </div>
  );
}
