import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

export default function StarRating({ rating }) {
  const perfectRating = 5; 
  const wholeRating = Math.trunc(rating);
  const halfRating = rating - wholeRating;
  const remainingRating = perfectRating - wholeRating - (halfRating > 0 ? 1 : 0); 

  return (
    <>
      {[...Array(wholeRating).keys()].map((index) => <FontAwesomeIcon icon={faStar} className="text-yellow-400" key={index} />)}
      { (halfRating > 0) ? <FontAwesomeIcon icon={faStarHalfStroke} className="text-yellow-400" /> : '' }
      {[...Array(remainingRating).keys()].map((index) => <FontAwesomeIcon icon={faStarRegular} className="text-yellow-400" key={index} />)}
    </>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
