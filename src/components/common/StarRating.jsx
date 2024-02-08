import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function StarRating({ rating }) {
  const wholeRating = Math.trunc(rating);
  const hasHalfRating = (rating - wholeRating) > 0;

  return (
    <>
      {[...Array(wholeRating).keys()].map((index) => <FontAwesomeIcon icon={faStar} className="text-yellow-400" key={index} />)}
      { (hasHalfRating) ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : '' }
    </>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
