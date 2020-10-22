import propTypes from 'prop-types';

export const MovieCardShape = propTypes.shape({
  title: propTypes.string.isRequired,
  description: propTypes.string,
  imgUrl: propTypes.string.isRequired,
  imdbUrl: propTypes.string.isRequired,
}).isRequired;
