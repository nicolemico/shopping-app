import React from 'react';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import StarRating from '../common/StarRating';

export default function ProductCard({ product, clickAddToCart }) {
  return (
    <div className="min-w-[288px] w-72 flex flex-col justify-between p-2 rounded-md border" key={product.id}>
      <img className="h-48 object-contain" src={product.image} alt={product.title} />
      <div className="flex flex-col">
        <a href="/#" title={product.title} className="min-h-[50px] hover:text-blue-500">
          {product.title.slice(0, 60)}
          {(product.title.length > 60) ? '...' : ''}
        </a>
        <span className="text-orange-400">
          $
          {product.price}
        </span>
        <div className="flex justify-between">
          <div className="flex gap-1 flex-row items-center text-gray-600 text-xs">
            <span>Rating: </span>
            {product.rating.rate}
            <StarRating rating={product.rating.rate} />
            |
            {' '}
            {product.rating.count}
          </div>
          <button type="button" className="bg-orange-400 text-white px-2 py-1 rounded hover:bg-orange-500" onClick={clickAddToCart(product.id)}>
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropType.exact({
    category: PropType.string.isRequired,
    description: PropType.string,
    id: PropType.number.isRequired,
    image: PropType.string.isRequired,
    price: PropType.number.isRequired,
    rating: PropType.shape({
      rate: PropType.number.isRequired,
      count: PropType.number.isRequired,
    }),
    title: PropType.string.isRequired,
  }).isRequired,
  clickAddToCart: PropType.func.isRequired,
};
